export default function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=2000&h=1200&fit=crop&auto=format)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          🎄 Véspera de Natal
        </h1>
        <h2 className="text-3xl md:text-4xl text-christmas-gold mb-8 drop-shadow-lg">
          Avenida Paulista
        </h2>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Descubra a magia do Natal na avenida mais famosa de São Paulo. 
          Momentos inesquecíveis, eventos especiais e tradições que aquecem o coração.
        </p>
      </div>
    </div>
  )
}