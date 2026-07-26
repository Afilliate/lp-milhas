import { useEffect } from 'react';
import './App.css';

function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'LP Concierge SD Viagens',
        content_category: 'Ticket de Emissão',
      });
    }

    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const checkoutUrl = 'https://pay.kiwify.com.br/hV1J2Kp';

  // Única ação: redirecionar a página atual para o checkout
  const handleCTAClick = (e) => {
    e.preventDefault();
    // Dispara o Pixel (não bloqueante)
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('trackCustom', 'LeadQualificado', {
          content_name: 'Concierge Internacional',
          currency: 'BRL',
        });
      } catch (err) {
        // silencia erros
      }
    }
    // Redireciona a aba atual para o checkout
    window.location.href = checkoutUrl;
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <img
            src="https://res.cloudinary.com/dxphpupax/image/upload/f_auto,q_auto:best/imagem_2025-08-18_005838677_ijxuzc"
            alt="SD Viagens"
            className="logo"
          />
          <span className="brand-name">SD Viagens</span>
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxphpupax/image/upload/f_auto,q_auto:best/v1780443628/First_class_airplane_cabin_interior_202606022040_uatd31.jpg')`,
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Economia de verdade em voos internacionais — sem você precisar entender de milhas.</h1>
          <p className="hero-subtitle">
            Concierge de emissão com milhas — você compra o ticket de R$ 197, 
            nós encontramos sua passagem internacional mais barata. 
            Se não houver economia, devolvemos cada centavo.
          </p>
          <a
            href={checkoutUrl}
            className="btn btn-primary pulse"
            onClick={handleCTAClick}
          >
            Quero um especialista para pagar menos
          </a>
        </div>
      </section>

      <section className="social-proof fade-section">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">+200</div>
              <div className="stat-label">clientes atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">R$ 1.000</div>
              <div className="stat-label">economia média por emissão</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">de economia confirmada</div>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Deixei de pagar R$ 5.400 para Orlando. Com o serviço, paguei R$ 2.100 na passagem. Inacreditável."
              </p>
              <p className="testimonial-author">— Ana Carolina, São Paulo</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Minha lua de mel em Paris saiu pela metade do preço. Atendimento atencioso e rápido."
              </p>
              <p className="testimonial-author">— Rafael e Juliana, Curitiba</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee fade-section">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C0A05D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h2>Economia garantida ou seu dinheiro de volta</h2>
            <p>
              Se não encontrarmos um voo mais barato do que o preço em dinheiro que você achou, 
              devolvemos integralmente seus R$ 197. Simples assim.
            </p>
            <div className="guarantee-seal">
              <span>✓</span> Risco zero para você
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works fade-section">
        <div className="container">
          <h2>Como funciona</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Adquira o Ticket</h3>
              <p>Compre o Ticket de Emissão (R$ 197) — é o único valor que você paga agora.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Envie seu destino</h3>
              <p>Após a compra, você acessa o canal exclusivo e envia seu destino e datas.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Receba a passagem</h3>
              <p>Em até 24h, envio a cotação. Você aprova, paga a passagem emitida e já pode arrumar as malas.</p>
            </div>
          </div>

          <div className="economy-example">
            <div className="economy-detail">
              <span className="economy-label">Preço original do voo:</span>
              <span className="old-price">R$ 4.200</span>
            </div>
            <div className="economy-detail">
              <span className="economy-label">Preço que você pagou:</span>
              <span className="new-price">R$ 2.997</span>
            </div>
            <div className="economy-divider"></div>
            <div className="economy-detail">
              <span className="economy-label">Ticket de Emissão:</span>
              <span className="ticket-price">R$ 197</span>
            </div>
            <div className="savings">Você economizou R$ 1.203</div>
          </div>
        </div>
      </section>

      <section className="faq fade-section">
        <div className="container">
          <h2>Perguntas que você pode ter</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como vocês conseguem preços mais baixos?</h3>
              <p>Temos parceria com fornecedores que acumulam milhas e emitimos passagens no seu CPF, dentro das regras das companhias aéreas.</p>
            </div>
            <div className="faq-item">
              <h3>O que acontece se não houver economia?</h3>
              <p>Devolvemos os R$ 197 integralmente. Se não valer a pena, você não perde nada.</p>
            </div>
            <div className="faq-item">
              <h3>Quanto tempo leva para receber a cotação?</h3>
              <p>Respondo em até 24 horas após o envio dos dados pelo canal exclusivo. Geralmente é muito mais rápido.</p>
            </div>
            <div className="faq-item">
              <h3>O serviço funciona para voos nacionais?</h3>
              <p>Sim, mas é em voos internacionais de longa distância que a economia é realmente impressionante.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final fade-section">
        <div className="container">
          <h2>Pronto para viajar pagando menos?</h2>
          <p className="cta-subtext">
            Mais de 200 viajantes já economizaram com nosso concierge. O risco é zero.
          </p>
          <a
            href={checkoutUrl}
            className="btn btn-primary pulse"
            onClick={handleCTAClick}
          >
            Quero um especialista para pagar menos
          </a>
          <p className="cta-urgency">Resposta pessoal em até 24h — vagas limitadas este mês</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. CNPJ: XX.XXX.XXX/XXXX-XX. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
