import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-christmas-red text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🎄</span>
            <div>
              <h1 className="text-2xl font-bold">Véspera de Natal</h1>
              <p className="text-christmas-gold text-sm">Avenida Paulista</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/#momentos" 
              className="hover:text-christmas-gold transition-colors"
            >
              Momentos
            </Link>
            <Link 
              href="/#eventos" 
              className="hover:text-christmas-gold transition-colors"
            >
              Eventos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}