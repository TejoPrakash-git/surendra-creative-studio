import './Hero.css'

function SprocketRow() {
  return (
    <div className="sprocket-row" aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <SprocketRow />

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">Welcome to my creative portfolio</p>
        <h1 className="hero__title">
          SURENDRA
          <span className="hero__title-sub">Creative Studio</span>
        </h1>
        <p className="hero__tagline">
          Creative Designer &amp; Video Editor turning ideas into cinematic posters,
          scroll-stopping thumbnails and stories worth watching twice.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            View Portfolio
          </a>
        </div>

        <div className="hero__tags">
          {['Poster Design', 'Thumbnail Design', 'Video Editing', 'Photo Editing', 'Branding'].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <SprocketRow />
    </section>
  )
}
