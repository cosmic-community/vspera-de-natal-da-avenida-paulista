import type { EventoNatal } from '@/types'

interface EventoCardProps {
  evento: EventoNatal;
}

export default function EventoCard({ evento }: EventoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {evento.metadata?.foto && (
        <div className="relative h-48">
          <img
            src={`${evento.metadata.foto.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={evento.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-christmas-green flex-1">
            {evento.metadata?.nome || evento.title}
          </h3>
          {evento.metadata?.entrada_gratuita && (
            <span className="bg-christmas-gold text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
              ✨ Grátis
            </span>
          )}
        </div>
        
        <div className="space-y-3 mb-4">
          {evento.metadata?.horario && (
            <p className="text-gray-700 flex items-center">
              <span className="text-xl mr-2">🕐</span>
              <span className="font-semibold">{evento.metadata.horario}</span>
            </p>
          )}
          
          {evento.metadata?.localizacao && (
            <p className="text-gray-700 flex items-center">
              <span className="text-xl mr-2">📍</span>
              <span>{evento.metadata.localizacao}</span>
            </p>
          )}
        </div>
        
        {evento.metadata?.descricao && (
          <div 
            className="text-gray-600 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: evento.metadata.descricao }}
          />
        )}
      </div>
    </div>
  )
}