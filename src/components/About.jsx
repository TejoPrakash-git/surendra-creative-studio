import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__frame">
          <div className="about__frame-corner about__frame-corner--tl" />
          <div className="about__frame-corner about__frame-corner--br" />
          <div className="about__frame-inner">
            <span className="about__frame-initial">S</span>
          </div>
          <p className="about__frame-caption">DIR. OF DESIGN — SURENDRA</p>
        </div>

        <div className="about__copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">Hi, I'm Surendra.</h2>

          <p className="about__lead">
            I'm a Creative Designer and Video Editor specializing in poster designing,
            thumbnail designing, restaurant menu designing, photo editing, movie poster
            &amp; cover design, short film poster design, movie editing and short film editing.
          </p>

          <p>
            I transform ideas into visually stunning designs and engaging videos. From
            professional restaurant menus to cinematic movie posters, from eye-catching
            YouTube thumbnails to high-quality photo retouching, I focus on creativity,
            quality and attention to detail.
          </p>

          <p>
            My goal is to create content that attracts audiences, tells stories, and
            leaves a lasting impression. Thank you for visiting my portfolio —
            let's create something amazing together.
          </p>

          <div className="about__stats">
            <div>
              <strong>9+</strong>
              <span>Creative services</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Original concepts</span>
            </div>
            <div>
              <strong>24-48h</strong>
              <span>Typical turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
