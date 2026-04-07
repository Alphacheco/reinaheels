import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const lookbookImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4a.jpg',
    '5.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '24.jpg',
    '37.jpg',
    '_A731067.jpg',
    '_A731068.jpg',
    '_A731089.jpg',
  ]

  const featuredLooks = [
    { file: '1.jpg', note: 'Editorial cyan' },
    { file: '14.jpg', note: 'Latex silhouette' },
    { file: '24.jpg', note: 'Spotlight drama' },
  ]

  const bookingItems = [
    {
      title: 'Shows en vivo',
      text: 'Festivales, clubs y fechas headline con visuales de alto impacto.',
    },
    {
      title: 'Eventos privados',
      text: 'Cumpleanos, bodas y marcas que buscan una entrada imposible de olvidar.',
    },
    {
      title: 'Colaboraciones',
      text: 'Campanas, contenido y activaciones con direccion artistica.',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((previousSlide) => (previousSlide + 1) % lookbookImages.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [lookbookImages.length])

  const goToPreviousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? lookbookImages.length - 1 : previousSlide - 1,
    )
  }

  const goToNextSlide = () => {
    setCurrentSlide((previousSlide) => (previousSlide + 1) % lookbookImages.length)
  }

  return (
    <main className="showcase-shell">
      <section className="poster-frame">
        <header className="topbar">
          <div className="topbar-actions">
            <a className="contact-chip" href="#contacto">
              Contacto
            </a>
            <a className="contact-chip" href="#bookings">
              alquiler de atuendos
            </a>
          </div>
        </header>

        <section className="hero-grid" id="inicio">
          <div className="hero-copy">
            
            <h1 className="hero-title">REINA HEELS</h1>
            <p className="hero-script">Escena</p>
            
            <p className="hero-description">
              Un show construido como portada: moda, humor, lipsync y una presencia
              escenica que mezcla glamour pop con precision teatral.
            </p>

            <div className="hero-actions">
              <a className="primary-cta" href="#shows">
                Ver proximos shows
              </a>
              <div className="hero-stat">
                <span>2026</span>
                <strong>Tour visual en vivo</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual">

            <aside className="quote-card">
              <p className="quote-mark">&ldquo;</p>
              <p className="quote-text">
                No vine a encajar. Vine a destacar.
              </p>
              <p className="quote-author">Reina</p>
            </aside>

            <aside className="show-card" id="shows">
              <span className="show-label">Proximo show</span>
              <strong>SAB 14 DIC</strong>
              <span className="show-venue">Club Glam</span>
              <a href="#bookings">Consegui tu entrada</a>
            </aside>
          </div>
        </section>

        <section className="lower-grid">
          <article className="about-card">
            <span className="section-tag">Sobre mi</span>
            <h2>Moda, humor y performance sin modo discreto.</h2>
            <p>
              Reina convierte cada salida en una imagen memorable: siluetas altas,
              maquillaje grafico y una energia frontal que no pide permiso.
            </p>
            <a href="#historia">Conoce mi historia</a>
          </article>

          <div className="gallery-grid" aria-label="Galeria destacada">
            {featuredLooks.map((item, index) => (
              <article
                key={item.file}
                className={`gallery-card feature-${index + 1}`}
              >
                <img src={`/${item.file}`} alt={`Look destacado ${index + 1}`} />
                <span>{item.note}</span>
              </article>
            ))}
            <article className="gallery-card gallery-manifesto">
              <img src="/16.jpg" alt="Look destacado archivo fashion" />
              <span>Fashion archive</span>
              <strong>CMYK Glam Archive</strong>
            </article>
          </div>

          <aside className="bookings-card" id="bookings">
            <span className="section-tag section-tag-dark">Bookings</span>
            <h2>Formatos para escenarios, marcas y eventos privados.</h2>
            <div className="booking-list">
              {bookingItems.map((item) => (
                <article key={item.title} className="booking-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <a className="secondary-cta" href="#contacto">
              Quiero contratar
            </a>
          </aside>
        </section>

        <section className="lookbook-section" aria-labelledby="lookbook-title">
          <div className="lookbook-intro">
            <span className="section-tag">Galeria</span>
            <h2 id="lookbook-title">Todas las imagenes convertidas en un archivo visual con actitud de campana.</h2>
            <p>
              Cada cuadro entra como parte de un lookbook vivo: contraste, textura,
              pose y una puesta que mezcla backstage, editorial y escenario.
            </p>
          </div>

          <div className="lookbook-carousel">
            <div className="carousel-stage">
              <button
                type="button"
                className="carousel-control previous"
                onClick={goToPreviousSlide}
                aria-label="Imagen anterior"
              >
                ←
              </button>

              <div className="carousel-viewport">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {lookbookImages.map((image, index) => (
                    <figure key={image} className="carousel-slide">
                      <div className="carousel-media">
                        <img
                          src={`/${image}`}
                          alt={`Reina look ${index + 1}`}
                          loading={index < 2 ? 'eager' : 'lazy'}
                        />
                      </div>
                      <figcaption>
                        <span>Look {String(index + 1).padStart(2, '0')}</span>
                        <strong>
                          {index % 2 === 0 ? 'Reina archive' : 'Stage couture'}
                        </strong>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="carousel-control next"
                onClick={goToNextSlide}
                aria-label="Imagen siguiente"
              >
                →
              </button>
            </div>

            <div className="carousel-meta">
              <p className="carousel-counter">
                {String(currentSlide + 1).padStart(2, '0')} / {String(lookbookImages.length).padStart(2, '0')}
              </p>
              <div className="carousel-dots" aria-label="Selector de imagenes">
                {lookbookImages.map((image, index) => (
                  <button
                    key={`${image}-dot`}
                    type="button"
                    className={index === currentSlide ? 'active' : ''}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ir al look ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="thumbnail-rail" aria-label="Miniaturas de galeria">
              {lookbookImages.map((image, index) => (
                <button
                  key={`${image}-thumb`}
                  type="button"
                  className={index === currentSlide ? 'active' : ''}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Seleccionar look ${index + 1}`}
                >
                  <img src={`/${image}`} alt="" loading="lazy" />
                  <span>Look {String(index + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>

      <footer className="poster-footer" id="contacto">
        <div className="social-strip">
          <span>Seguime</span>
          <a href="#">IG</a>
          <a href="#">TT</a>
          <a href="#">YT</a>
          <a href="#">X</a>
        </div>
        <p>La vida es demasiado corta para ser normal.</p>
      </footer>
    </main>
  )
}

export default App
