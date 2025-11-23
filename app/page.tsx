import { getMomentos, getEventos } from '@/lib/cosmic'
import MomentoCard from '@/components/MomentoCard'
import EventoCard from '@/components/EventoCard'
import Hero from '@/components/Hero'
import type { MomentoPaulista, EventoNatal } from '@/types'

export const revalidate = 60

export default async function Home() {
  const momentos = await getMomentos()
  const eventos = await getEventos()

  return (
    <div>
      <Hero />
      
      {/* Momentos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-christmas-red mb-4">
              ✨ Momentos Mágicos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra os momentos mais especiais da véspera de Natal na Avenida Paulista
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {momentos.map((momento: MomentoPaulista) => (
              <MomentoCard key={momento.id} momento={momento} />
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="py-16 px-4 bg-christmas-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-christmas-green mb-4">
              🎄 Eventos de Natal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Participe dos eventos especiais que acontecem na avenida mais famosa de São Paulo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {eventos.map((evento: EventoNatal) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}