import { useEffect } from 'react';
import './App.css';

function Obrigado() {
  // Dispara PageView do Meta Pixel (código base já deve estar no index.html)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content" style={{ justifyContent: 'center' }}>
          <img
            src="https://res.cloudinary.com/dxphpupax/image/upload/q_auto:best/imagem_2025-08-18_005838677_ijxuzc"
            alt="SD Viagens"
            className="logo"
          />
          <span className="brand-name">SD Viagens</span>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="thankyou-page">
        <div className="container thankyou-content">
          <h1>Pagamento confirmado! Agora é com a SD Viagens.</h1>
          <p className="subtitle">
            Recebi seu pagamento do Ticket de Emissão. Para emitir sua passagem,
            envie os dados do voo pelo WhatsApp agora mesmo.
          </p>

          <div className="instructions">
            <p><strong>Envie pelo WhatsApp:</strong></p>
            <ol>
              <li>Origem e destino</li>
              <li>Datas de ida e volta</li>
              <li>Número de passageiros</li>
            </ol>
            <p>
              Responderei com sua proposta em até 24 horas. Se a economia
              não valer a pena, devolvo os R$ 197 — você não tem nada a perder.
            </p>
          </div>

          <a
            href="https://wa.me/5511976134095?text=Ol%C3%A1%2C+comprei+o+Ticket+de+Emiss%C3%A3o+e+quero+minha+cota%C3%A7%C3%A3o.+Aqui+est%C3%A3o+os+dados+do+voo%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Enviar Dados do Voo pelo WhatsApp
          </a>

          <div className="guarantee-thankyou">
            <span>🔒</span>
            <span>
              <strong>Garantia de economia:</strong> se eu não encontrar um voo
              mais barato que o preço em dinheiro, você recebe 100% do valor
              do ticket de volta.
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. Todos os direitos reservados.</p>
          <p>
            <a
              href="https://wa.me/5511976134095"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Obrigado;
