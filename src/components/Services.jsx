import './Services.css'

const SERVICES = [
  { title: 'Graphic Design', desc: 'Clean, versatile visuals built for print and digital, from concept to final file.' },
  { title: 'Poster Design', desc: 'Bold, story-first posters for events, films and short films that stop the scroll.' },
  { title: 'Thumbnail Design', desc: 'High-CTR YouTube thumbnails with clear focal points and punchy contrast.' },
  { title: 'Video Editing', desc: 'Pace, cuts and colour that keep viewers watching till the last frame.' },
  { title: 'Photo Editing', desc: 'Retouching and colour grading that keeps skin, light and mood natural.' },
  { title: 'Menu Card Design', desc: 'Appetite-driving restaurant menus that are easy to scan and easy to order from.' },
  { title: 'Book Cover Design', desc: 'Covers that signal genre and tone at a glance, on shelf and as a thumbnail.' },
  { title: 'Front Page Design', desc: 'Magazine and title-page layouts with clear hierarchy and strong typography.' },
  { title: 'Branding', desc: 'Logos, colour and type systems that keep a brand consistent everywhere it shows up.' },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow">What I do</p>
        <h2 className="section-title">Services</h2>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article className="services__card" key={s.title}>
              <span className="services__scene">SCENE {String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
