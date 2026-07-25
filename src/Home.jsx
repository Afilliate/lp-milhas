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
  }, []);

  const checkoutUrl = 'https://pay.kiwify.com.br/SEU_CHECKOUT'; // Substituir pelo link real

  const handleCTAClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'LeadQualificado', {
        content_name: 'Concierge Internacional',
        currency: 'BRL',
      }, {}, () => {
        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      });
    } else {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="app">
      {/* HEADER */}
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

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dxphpupax/image/upload/f_auto,q_auto:best/v1780443628/First_class_airplane_cabin_interior_202606022040_uatd31.jpg')`,
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Primeira Classe pelo preço da Econômica.</h1>
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

      {/* PROVA SOCIAL + ESTATÍSTICAS */}
      <section className="social-proof">
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

      {/* GARANTIA */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-icon">🛡️</div>
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

      {/* COMO FUNCIONA (3 PASSOS) */}
      <section className="how-it-works">
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
              <p>Pelo WhatsApp, você me passa as datas e preferências do voo.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Receba a passagem</h3>
              <p>Em até 24h, envio a cotação. Você aprova, paga a passagem emitida e já pode arrumar as malas.</p>
            </div>
          </div>

          <div className="economy-example">
            <div>
              <span className="old-price">R$ 4.200</span>
              <span style={{margin: '0 8px', color: '#888'}}>→</span>
              <span className="new-price">R$ 2.997</span>
            </div>
            <div className="savings">Economia de R$ 1.203</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
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
              <p>Respondo em até 24 horas após o envio dos dados. Geralmente é muito mais rápido.</p>
            </div>
            <div className="faq-item">
              <h3>O serviço funciona para voos nacionais?</h3>
              <p>Sim, mas é em voos internacionais de longa distância que a economia é realmente impressionante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 SD Viagens. CNPJ: XX.XXX.XXX/XXXX-XX. Todos os direitos reservados.</p>
          <p style={{marginTop: 8}}>
            <a href="https://wa.me/5511976134095" target="_blank" rel="noopener noreferrer">
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
