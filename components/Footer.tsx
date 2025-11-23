export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-christmas-green text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              🎄 Véspera de Natal
            </h3>
            <p className="text-christmas-cream">
              Celebrando a magia do Natal na Avenida Paulista, São Paulo
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-christmas-cream">
              Avenida Paulista<br />
              São Paulo, SP<br />
              Brasil
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <p className="text-christmas-cream">
              Siga-nos para mais atualizações sobre os eventos de Natal na Paulista
            </p>
          </div>
        </div>
        
        <div className="border-t border-christmas-gold/30 pt-8 text-center text-christmas-cream">
          <p>© {currentYear} Véspera de Natal da Avenida Paulista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}