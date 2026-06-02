import { useEffect } from 'react';
import './App.css';

/**
 * ============================================================
 * TICKET MILHAS (SD Viagens) – LANDING PAGE
 * ============================================================
 * 
 * PLACEHOLDERS PARA SUBSTITUIR (procure por "TODO"):
 * 1. Links da Kiwify (checkout R$197 e R$397)
 * 2. Número de WhatsApp
 * 3. Depoimentos reais
 * 4. Pixel ID da Meta (no index.html)
 * 
 * O código base do Pixel deve ser inserido no index.html.
 * ============================================================
 */

function App() {
  // Page view opcional (dispara ViewContent para remarketing)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'LP Ticket Milhas',
        content_category: 'Milhas',
      });
    }
  }, []);

  /**
   * Função que dispara o evento LeadQualificado no Pixel
   * e redireciona para o checkout da Kiwify.
   */
  const handleCTAClick = (e, checkoutUrl) => {
    e.preventDefault();

    // Dispara evento personalizado LeadQualificado no Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'LeadQualificado', {
        content_name: 'Ticket Milhas',
        content_category: 'Milhas',
        currency: 'BRL',
      });
    }

    // Pequeno delay para garantir que o Pixel envie o evento
    setTimeout(() => {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }, 100);
  };

  return (
    <div className="app">
      {/* ============================================================ */}
      {/* HEADER */}
      {/* ============================================================ */}
      <header className="header">
        <div className="container header-content">
          <img
            src="https://res.cloudinary.com/dxphpupax/image/upload/q_auto:best/imagem_2025-08-18_005838677_ijxuzc"
            alt="SD Viagens"
            className="logo"
          />
          <span className="brand-name">SD Viagens</span>
        </div>
      </header>

      {/* ============================================================ */}
      {/* HERO COM BACKGROUND IMAGE */}
      {/* ============================================================ */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxphpupax/image/upload/v1780443628/First_class_airplane_cabin_interior_202606022040_uatd31.jpg')`,
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Viaje pagando menos: eu pesquiso e emito sua passagem com milhas.</h1>
          <p className="hero-subtitle">
            Você escolhe o voo, eu faço o resto. Se não houver economia real
            comparada ao preço em dinheiro, devolvo seus R$ 197.
          </p>
          <a
            href="#checkout-kiwify-197" // TODO: Substituir pelo link real da Kiwify
            className="btn btn-primary pulse"
            onClick={(e) => handleCTAClick(e, '#checkout-kiwify-197')}
          >
            Quero Economizar Agora
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMO FUNCIONA */}
      {/* ============================================================ */}
      <section className="how-it-works">
        <div className="container">
          <h2>Como funciona</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Compra e Envio</h3>
              <p>
                Você compra o ticket de R$ 197 e me envia os dados do voo
                pelo WhatsApp.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Pesquisa e Proposta</h3>
              <p>
                Eu pesquiso a melhor opção com milhas e preparo sua proposta
                com o valor final.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Aprovação e Emissão</h3>
              <p>
                Você aprova a economia, paga a passagem separada e eu emito
                na hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DEPOIMENTOS */}
      {/* ============================================================ */}
      <section className="testimonials">
        <div className="container">
          <h2>Quem já economizou</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                {/* TODO: Substituir pelo depoimento real do João */}
                "Paguei R$ 1.200 num voo que estava R$ 2.100 em dinheiro.
                O serviço se pagou e ainda economizei R$ 900."
              </p>
              <p className="testimonial-author">— João, São Paulo</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                {/* TODO: Substituir pelo depoimento real da Maria */}
                "Consegui visitar minha família em Orlando por menos da metade
                do preço. Atendimento impecável."
              </p>
              <p className="testimonial-author">— Maria, Rio de Janeiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GARANTIA */}
      {/* ============================================================ */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon">🛡️</div>
            <h2>Garantia Total</h2>
            <p>
              Se eu não encontrar um voo mais barato que o preço em dinheiro,
              devolvo integralmente seus R$ 197. <strong>Risco zero para você.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA FINAL */}
      {/* ============================================================ */}
      <section className="cta-final">
        <div className="container">
          <h2>Pronto para economizar na sua próxima viagem?</h2>
          <p className="cta-subtext">
            Mais de 200 clientes já economizaram com milhas.
          </p>
          <a
            href="#checkout-kiwify-197" // TODO: Substituir pelo link real da Kiwify
            className="btn btn-primary pulse"
            onClick={(e) => handleCTAClick(e, '#checkout-kiwify-197')}
          >
            Quero Economizar Agora
          </a>

          {/* UPSELL DISCRETO */}
          <p className="upsell">
            <a href="#checkout-kiwify-397">
              Conheça o Plano Completo de Assessoria de Milhas (R$ 397)
            </a>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. Todos os direitos reservados.</p>
          <p>
            <a
              href="https://wa.me/5511999999999" // TODO: Substituir pelo número real
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

export default App;
