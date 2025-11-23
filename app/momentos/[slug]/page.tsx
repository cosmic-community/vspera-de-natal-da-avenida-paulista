// app/momentos/[slug]/page.tsx
import { getMomento, getMomentos } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Gallery from '@/components/Gallery'
import Link from 'next/link'
import type { MomentoPaulista } from '@/types'

export const revalidate = 60

export async function generateStaticParams() {
  const momentos = await getMomentos()
  return momentos.map((momento: MomentoPaulista) => ({
    slug: momento.slug,
  }))
}

export default async function MomentoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const momento = await getMomento(slug)

  if (!momento) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        {momento.metadata?.fotografia && (
          <img
            src={`${momento.metadata.fotografia.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt={momento.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              {momento.metadata?.titulo || momento.title}
            </h1>
            {momento.metadata?.data && (
              <p className="text-xl text-christmas-gold">
                📅 {new Date(momento.metadata.data).toLocaleDateString('pt-BR')}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-christmas-red hover:text-christmas-green transition-colors mb-8"
        >
          ← Voltar para início
        </Link>

        {momento.metadata?.historia && (
          <div className="prose prose-lg max-w-none mb-12">
            <ReactMarkdown>{momento.metadata.historia}</ReactMarkdown>
          </div>
        )}

        {momento.metadata?.galeria && momento.metadata.galeria.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-christmas-red mb-6">
              📸 Galeria de Fotos
            </h2>
            <Gallery images={momento.metadata.galeria} />
          </div>
        )}
      </div>
    </div>
  )
}