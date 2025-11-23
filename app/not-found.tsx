import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-christmas-cream px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-christmas-red mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link 
          href="/"
          className="inline-block bg-christmas-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-christmas-green transition-colors"
        >
          🎄 Voltar para início
        </Link>
      </div>
    </div>
  )
}