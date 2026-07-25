import { useEffect } from 'react';
import './App.css';

/**
 * ============================================================
 * SD VIAGENS – CONCIERGE DE VOOS INTERNACIONAIS
 * (Layout Premium – Seções Destacadas)
 * ============================================================
 * 
 * PLACEHOLDERS (procure por "TODO"):
 * 1. Link real da Kiwify (R$197)
 * 2. Depoimentos reais
 * 3. Pixel ID da Meta (no index.html)
 * 
 * WhatsApp: 5511976134095 (já correto)
 * ============================================================
 */

function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'LP Concierge Internacional',
        content_category: 'Milhas',
      });
    }
  }, []);

  const handleCTAClick = (e, checkoutUrl) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq(
        'trackCustom',
        'LeadQualificado',
        {
          content_name: 'Concierge Internacional',
          content_category: 'Milhas',
          currency: 'BRL',
        },
        {},
        () => {
          window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        }
      );
    } else {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="app">
      {/* HEADER PREMIUM */}
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

      {/* HERO COM BACKGROUND IMAGE – FOCO TOTAL */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxphpupax/image/upload/v1780443628/First_class_airplane_cabin_interior_202606022040_uatd31.jpg')`,
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Sua passagem internacional mais barata. Sem você perder tempo com milhas.</h1>
          <p className="hero-subtitle">
            Serviço de concierge de emissão. Você foca no destino, nós no preço.
          </p>
          <a
            href="#checkout-kiwify-197" // TODO: Substituir pelo link real da Kiwify
            className="btn btn-primary pulse"
            onClick={(e) => handleCTAClick(e, '#checkout-kiwify-197')}
          >
            Quero um especialista para pagar menos
          </a>
        </div>
      </section>

      {/* PROVA SOCIAL EM DESTAQUE */}
      <section className="testimonials">
        <div className="container">
          <h2>Resultados reais de quem já confiou na gente</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                {/* TODO: Substituir pelo depoimento real */}
                "Paguei R$ 2.400 num voo para Orlando que estava R$ 4.100 em dinheiro. O serviço se pagou e ainda economizei R$ 1.700."
              </p>
              <p className="testimonial-author">— João, Campinas</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                {/* TODO: Substituir pelo depoimento real */}
                "Minha família foi para Lisboa por menos da metade do preço. Atendimento impecável."
              </p>
              <p className="testimonial-author">— Maria, Belo Horizonte</p>
            </div>
          </div>
          <div className="economy-example">
            <span>💰</span>
            <span>
              <strong>Exemplo real:</strong> economia líquida de <strong>R$ 1.003</strong> após a taxa de R$ 197.
            </span>
          </div>
        </div>
      </section>

      {/* GARANTIA COMO BLOCO VISUAL DE ALTA CONFIANÇA */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon">🛡️</div>
            <h2>Se não economizarmos, devolvemos seu dinheiro</h2>
            <p>
              Se eu não encontrar um voo mais barato que o preço em dinheiro, devolvo integralmente seus R$ 197.
              <br />
              <strong>Risco zero para você.</strong>
            </p>
            <div className="guarantee-seal">
              <span>✓</span> R$ 197 protegidos
            </div>
          </div>
        </div>
      </section>

      {/* PASSO A PASSO HORIZONTAL COM ÍCONES */}
      <section className="how-it-works">
        <div className="container">
          <h2>Como funciona</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">🎫</div>
              <h3>1. Adquira o Ticket</h3>
              <p>Você adquire o Ticket SD Viagens (R$ 197).</p>
            </div>
            <div className="step-card">
              <div className="step-icon">💬</div>
              <h3>2. Envie os dados</h3>
              <p>Envia seu destino e datas pelo WhatsApp.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">🔍</div>
              <h3>3. Pesquisa inteligente</h3>
              <p>Nós pesquisamos os menores preços com milhas.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">💳</div>
              <h3>4. Aprovação e pagamento</h3>
              <p>Você aprova e paga a passagem com total segurança.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">🧳</div>
              <h3>5. É só arrumar as malas</h3>
              <p>Pronto. Você recebe a passagem emitida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PARA OBJEÇÕES */}
      <section className="faq">
        <div className="container">
          <h2>Dúvidas frequentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como funciona a garantia?</h3>
              <p>Se não encontrarmos um voo mais barato que o preço em dinheiro, devolvemos integralmente os R$ 197. Sem burocracia.</p>
            </div>
            <div className="faq-item">
              <h3>Quanto tempo leva para receber a proposta?</h3>
              <p>Respondo com sua proposta em até 24 horas após o envio dos dados pelo WhatsApp.</p>
            </div>
            <div className="faq-item">
              <h3>O serviço funciona para voos nacionais?</h3>
              <p>Sim, mas é especialmente vantajoso para voos internacionais e de alta temporada, onde a economia é maior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL COM URGÊNCIA SUTIL */}
      <section className="cta-final">
        <div className="container">
          <h2>Pronto para pagar menos na sua viagem internacional?</h2>
          <p className="cta-subtext">
            Mais de 200 clientes já economizaram com milhas em voos de longa distância.
          </p>
          <a
            href="#checkout-kiwify-197"
            className="btn btn-primary pulse"
            onClick={(e) => handleCTAClick(e, '#checkout-kiwify-197')}
          >
            Quero um especialista para pagar menos
          </a>
          <p className="cta-urgency">Vagas limitadas este mês – garantia de resposta em até 24h</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. Todos os direitos reservados.</p>
          <p className="footer-security">
            SD Viagens. CNPJ XXXX. Sem estresse, só economia.
          </p>
          <p>
            <a
              href="https://wa.me/5511976134095"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com a gente pelo WhatsApp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
