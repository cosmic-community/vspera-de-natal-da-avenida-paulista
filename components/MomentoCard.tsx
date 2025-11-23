import Link from 'next/link'
import type { MomentoPaulista } from '@/types'

interface MomentoCardProps {
  momento: MomentoPaulista;
}

export default function MomentoCard({ momento }: MomentoCardProps) {
  return (
    <Link 
      href={`/momentos/${momento.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {momento.metadata?.fotografia && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={`${momento.metadata.fotografia.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={momento.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-christmas-red mb-3 group-hover:text-christmas-green transition-colors">
          {momento.metadata?.titulo || momento.title}
        </h3>
        
        {momento.metadata?.data && (
          <p className="text-sm text-christmas-gold mb-3 flex items-center">
            📅 {new Date(momento.metadata.data).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        )}
        
        {momento.metadata?.historia && (
          <p className="text-gray-600 line-clamp-3">
            {momento.metadata.historia.substring(0, 150)}...
          </p>
        )}
        
        <div className="mt-4 text-christmas-red font-semibold flex items-center group-hover:text-christmas-green transition-colors">
          Ver mais
          <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}