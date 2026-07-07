import './Testimonials.css'

const REVIEWS = [
  {
    quote: 'The thumbnails Surendra made bumped our click-through rate almost immediately. Fast turnaround and he actually listens to feedback.',
    name: 'Rakesh V.',
    role: 'YouTube Creator',
  },
  {
    quote: 'Our new menu card looks completely different — cleaner, and customers keep commenting on it. Worth every rupee.',
    name: 'Priya N.',
    role: 'Restaurant Owner',
  },
  {
    quote: 'He designed a short film poster for us that genuinely looked festival-ready. Great sense of mood and typography.',
    name: 'Kiran D.',
    role: 'Independent Filmmaker',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <p className="eyebrow">Client Reviews</p>
        <h2 className="section-title">What clients say</h2>

        <div className="testimonials__grid">
          {REVIEWS.map((r) => (
            <blockquote className="testimonials__card" key={r.name}>
              <p>&ldquo;{r.quote}&rdquo;</p>
              <footer>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
