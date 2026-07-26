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

  const handleCTAClick = (e) => {
    e.preventDefault();
    // Abre o checkout em nova aba
    const newWindow = window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    // Dispara o Pixel (não bloqueante)
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('trackCustom', 'LeadQualificado', {
          content_name: 'Concierge Internacional',
          currency: 'BRL',
        });
      } catch (err) {
        // silencia erros do Pixel
      }
    }
    // Fallback: se o popup for bloqueado, redireciona na mesma aba
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = checkoutUrl;
    }
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
          {/* Link sem href real: apenas aciona o clique */}
          <a
            href="#"
            className="btn btn-primary pulse"
            onClick={handleCTAClick}
          >
            Quero um especialista para pagar menos
          </a>
        </div>
      </section>

      {/* ... resto do conteúdo permanece exatamente igual ... */}

      <section className="cta-final fade-section">
        <div className="container">
          <h2>Pronto para viajar pagando menos?</h2>
          <p className="cta-subtext">
            Mais de 200 viajantes já economizaram com nosso concierge. O risco é zero.
          </p>
          {/* Link sem href real */}
          <a
            href="#"
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
