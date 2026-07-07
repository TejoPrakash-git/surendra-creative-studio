import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">SURENDRA CREATIVE STUDIO</span>
        <span className="footer__copy">&copy; {year} Surendra. All rights reserved.</span>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
