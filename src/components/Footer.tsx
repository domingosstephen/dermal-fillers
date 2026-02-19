import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>AestheFill Pro</h3>
            <p>
              Premium CE-certified dermal fillers and hyaluronic acid injectables, supplied wholesale
              to licensed aesthetic practitioners across the USA and Europe. Compliance, quality, and
              consistency — in every syringe.
            </p>
            <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-3)' }}>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.60)', fontSize: '0.75rem', fontWeight: 700,
                }}
              >
                in
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.60)', fontSize: '0.75rem', fontWeight: 700,
                }}
              >
                ig
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/products#soft">AestheFill Soft</Link></li>
              <li><Link href="/products#volume">AestheFill Volume</Link></li>
              <li><Link href="/products#deep">AestheFill Deep</Link></li>
              <li><Link href="/products">Full Catalogue</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#compliance">Compliance</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Trade</h5>
            <ul>
              <li><Link href="/contact#enquire">Enquire to Purchase</Link></li>
              <li><Link href="/contact#verification">Licence Verification</Link></li>
              <li><Link href="/contact#faq">Ordering FAQ</Link></li>
              <li><a href="mailto:trade@yourdomain.com">trade@yourdomain.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} AestheFill Pro. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Sale</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>

        <p className="footer__compliance">
          AestheFill Pro products are medical devices sold exclusively to licensed healthcare and
          aesthetic practitioners. Not for retail consumer sale. All products CE-marked under EU MDR
          2017/745. US purchasers are responsible for compliance with applicable federal and state
          import and administration regulations. Product availability and regulatory status may vary
          by jurisdiction. This website does not constitute medical advice.
        </p>
      </div>
    </footer>
  );
}
