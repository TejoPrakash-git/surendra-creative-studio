import './Portfolio.css'

const FRAMES = [
  { label: 'YouTube Thumbnail', image: '/images/portfolio1.jpg', tag: 'POSTER' },
  { label: 'Movie Poster', image: '/images/portfolio2.jpg', tag: 'THUMB' },
  { label: 'Movie Poster', image: '/images/portfolio3.jpg', tag: 'MENU' },
  { label: 'Short Film Poster', image: '/images/portfolio4.jpg', tag: 'POSTER' },
  { label: 'Movie Poster', image: '/images/portfolio5.jpg', tag: 'PHOTO' },
  { label: 'YouTube Thumbnail', image: '/images/portfolio6.jpg', tag: 'COVER' },
  { label: 'Menu-1', image: '/images/portfolio7.jpeg', tag: 'POSTER' },
  { label: 'Menu-2', image: '/images/portfolio8.jpeg', tag: 'THUMB' },
]

function SprocketStrip() {
  return (
    <div className="sprocket-row" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Portfolio Reel</h2>
      </div>

      <div className="portfolio__strip">
        <SprocketStrip />
        <div className="portfolio__track">
          {FRAMES.map((f, i) => (
            <div className="portfolio__frame" key={i}>
              <div className="portfolio__frame-media">
                {f.image ? (
                  <img src={f.image} alt={f.label} />
                ) : (
                  <span>{f.tag}</span>
                )}
              </div>
              <p>{f.label}</p>
            </div>
          ))}
        </div>
        <SprocketStrip />
      </div>

      <div className="portfolio__action" style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="#gallery" className="btn btn-ghost">
          View Full Gallery
        </a>
      </div>
    </section>
  )
}
