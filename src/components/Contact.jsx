import './Contact.css'

const DETAILS = [
  { label: 'Email', value: 'surendradevu1402@gmail.com', href: 'mailto:surendradevu1402@gmail.com' },
  { label: 'Phone / WhatsApp', value: '+91 9381378002', href: 'tel:+919381378002' },
  { label: 'Location', value: 'Visakhapatnam, Andhra Pradesh, India', href: null },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/s_design_den' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Behance', href: 'https://behance.net/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Let's create something amazing together.</h2>
          <p className="contact__lead">
            Reach out directly by email, phone or WhatsApp — I usually reply within a few hours.
          </p>
          <a
            className="btn btn-primary contact__whatsapp"
            href="https://wa.me/919381378002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact__card">
          {DETAILS.map((d) => (
            <div className="contact__row" key={d.label}>
              <span className="contact__label">{d.label}</span>
              {d.href ? (
                <a href={d.href} className="contact__value contact__value--link">
                  {d.value}
                </a>
              ) : (
                <span className="contact__value">{d.value}</span>
              )}
            </div>
          ))}

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="contact__placeholder-note">
        Placeholder email, phone number and social links above — swap them for your real details.
      </p>
    </section>
  )
}
