import { useEffect } from 'react';
import './App.css';

function Obrigado() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content" style={{ justifyContent: 'center' }}>
          <img
            src="https://res.cloudinary.com/dxphpupax/image/upload/f_auto,q_auto:best/imagem_2025-08-18_005838677_ijxuzc"
            alt="SD Viagens"
            className="logo"
          />
          <span className="brand-name">SD Viagens</span>
        </div>
      </header>

      <main className="thankyou-page">
        <div className="container thankyou-content">
          <h1>Pagamento confirmado! Agora é com a SD Viagens.</h1>
          <p className="subtitle">
            Recebemos seu pedido do Ticket de Emissão. Para começarmos, envie os dados do seu voo pelo WhatsApp agora mesmo.
          </p>

          <div className="instructions">
            <p><strong>Envie pelo WhatsApp:</strong></p>
            <ol>
              <li>Origem e destino</li>
              <li>Datas de ida e volta</li>
              <li>Número de passageiros</li>
            </ol>
            <p style={{ marginTop: 12 }}>
              Responderei com sua cotação em até 24 horas. Se a economia não valer a pena, devolvo os R$ 197 — você não perde nada.
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
            <span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0A05D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <span>
              <strong>Garantia de economia:</strong> se não encontrarmos um voo mais barato, você recebe 100% do valor do ticket de volta.
            </span>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. Todos os direitos reservados.</p>
          <p style={{ marginTop: 8 }}>
            <a href="https://wa.me/5511976134095" target="_blank" rel="noopener noreferrer">
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Obrigado;
