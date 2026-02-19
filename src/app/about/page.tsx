import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = {
  title: 'About AestheFill Pro | Wholesale Dermal Filler Supplier | USA & Europe',
  description:
    'AestheFill Pro is a licensed wholesale supplier of CE-certified dermal fillers to aesthetic practitioners across the USA and Europe. Learn about our compliance standards, supply chain integrity, and what makes us the trusted choice for serious clinics.',
  alternates: { canonical: 'https://www.yourdomain.com/about/' },
  openGraph: {
    title: 'About AestheFill Pro | Wholesale Dermal Filler Supplier',
    description: 'Learn about AestheFill Pro — our compliance standards, supply chain integrity, and why 1,200+ clinics across the USA and Europe trust us as their dermal filler supplier.',
    url: 'https://www.yourdomain.com/about/',
    images: [{ url: '/assets/og-about.jpg', width: 1200, height: 630 }],
  },
};

const timeline = [
  { year: '2018', title: 'Founded', body: 'AestheFill Pro established with initial catalogue of 3 HA filler products. First trade accounts in Germany and France.' },
  { year: '2019', title: 'EU Expansion', body: 'Distribution expanded to 8 European countries. Cold-chain monitoring system implemented on all shipments as standard.' },
  { year: '2021', title: 'MDR Transition', body: 'Full transition to EU MDR 2017/745 compliance ahead of regulatory deadline. All product certifications updated and verified.' },
  { year: '2022', title: 'US Market Entry', body: 'First shipments to US-based aesthetic clinics. FDA import compliance documentation framework established.' },
  { year: '2024', title: '1,000+ Active Accounts', body: 'Milestone of 1,000 verified trade accounts reached. Catalogue expanded to 18 product SKUs across three ranges.' },
  { year: '2025', title: 'Today', body: '1,200+ active accounts. Serving the USA, EU, UK, and EEA. Expanding into additional markets.' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section className="page-hero" aria-labelledby="about-heading">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
              <span aria-current="page">About</span>
            </nav>
            <h1 id="about-heading">Built on Compliance. Trusted by Clinicians.</h1>
            <p>We exist to give aesthetic practitioners access to the kind of supply chain that their profession demands — and that their patients deserve.</p>
          </div>
        </section>

        {/* Mission */}
        <section className="section" aria-labelledby="mission-heading">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-20)' }}>
              <div>
                <span className="eyebrow">Our Mission</span>
                <h2 id="mission-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  The Right Product, at the Right Temperature, With the Right Documentation — Every Time.
                </h2>
                <p className="lead" style={{ marginBottom: 'var(--space-5)' }}>
                  We founded AestheFill Pro because we saw a gap in the market that no one was willing to talk about: the quality of aesthetic injectables available to practitioners outside hospital procurement networks was inconsistent, under-documented, and — in too many cases — untraceable.
                </p>
                <p style={{ marginBottom: 'var(--space-5)' }}>
                  The aesthetic medicine market has matured. Patients are more informed. Regulators are more active. The practitioners building the most respected clinics in the USA and Europe have understood for years that their supply chain is an extension of their clinical standard of care.
                </p>
                <p>
                  We built AestheFill Pro to serve those practitioners — and to raise the floor for everyone else. Our operating principle is simple: we will not sell a product we cannot fully document, ship at a temperature we cannot prove, or supply to a practitioner we cannot verify.
                </p>
              </div>
              <div>
                <div className="img-placeholder img-placeholder--wide" role="img" aria-label="Founder / Leadership Portrait — Professional environmental portrait in office/lab setting — 800×640px WebP">
                  <div className="img-placeholder__label">Founder / Leadership Portrait<br />Suggested: Professional environmental portrait in office/lab setting, 800×640px WebP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section--sm section--dark" aria-label="Company milestones">
          <div className="container">
            <div className="stats-row">
              {[
                { number: '2018', label: 'Year Founded' },
                { number: '1,200+', label: 'Active Trade Accounts\nUSA & Europe' },
                { number: '14', label: 'Countries Served\nAcross Two Continents' },
                { number: '100%', label: 'Cold-Chain Compliance\nSince Day One' },
              ].map((stat) => (
                <div className="stat-item" key={stat.number}>
                  <div className="stat-item__number">{stat.number}</div>
                  <div className="stat-item__label">{stat.label.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section section--slate" aria-labelledby="values-heading">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">What We Stand For</span>
              <h2 id="values-heading">Three Commitments We Do Not Compromise On.</h2>
              <p>These are not marketing statements. They are the operational standards that govern every decision we make.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              {[
                { icon: '⚖️', title: 'Regulatory Integrity', body: 'We only supply products with valid, current CE marking under MDR 2017/745. We verify every account before it can purchase. These are not optional extras — they are the minimum standard for operating ethically in this category.' },
                { icon: '🌡️', title: 'Cold-Chain Non-Negotiation', body: 'Hyaluronic acid products that have been stored outside 2–8 °C are compromised products. Every shipment we make is temperature-monitored, documented, and verifiable. If we cannot confirm the cold-chain, we do not ship.' },
                { icon: '🔍', title: 'Full Supply Chain Traceability', body: 'We know where every product we sell was manufactured, when it was made, and how it was handled. From GMP facility to your clinic, full traceability documentation is available on request for every order.' },
              ].map((v) => (
                <div key={v.icon} style={{ padding: 'var(--space-8)', background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)', display: 'block' }} aria-hidden="true">{v.icon}</span>
                  <h4 style={{ marginBottom: 'var(--space-3)' }}>{v.title}</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="section" id="compliance" aria-labelledby="compliance-heading">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-20)' }}>
              <div>
                <div className="img-placeholder img-placeholder--wide" role="img" aria-label="Compliance / Documentation Visual — CE certificates and quality documents — 800×640px WebP">
                  <div className="img-placeholder__label">Compliance / Documentation Visual<br />Suggested: Compliance certificates and quality documents — 800×640px WebP</div>
                </div>
              </div>
              <div>
                <span className="eyebrow">Compliance Standards</span>
                <h2 id="compliance-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>The Documentation That Protects Your Practice.</h2>
                <p style={{ marginBottom: 'var(--space-5)' }}>In a regulated medical device market, incomplete documentation is not a minor inconvenience — it is a liability. We have built our compliance infrastructure so that every practitioner who purchases from us has everything they need for regulatory inspection, patient file documentation, and internal audit.</p>
                <p style={{ marginBottom: 'var(--space-8)' }}>Our compliance team monitors regulatory changes in both the EU and US markets to ensure our documentation packages remain current. When regulations change, our processes change — ahead of the deadline, not after.</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                  {[
                    { title: 'EU MDR 2017/745 Compliance', body: 'All products CE-marked under the current Medical Device Regulation. Notified body certificates available on request.' },
                    { title: 'GMP Manufacturing Verification', body: 'All products manufactured in EU GMP-certified facilities. Manufacturing site certifications available to verified accounts.' },
                    { title: 'Batch-Level Documentation', body: 'Every order is accompanied by the corresponding batch certificate. Cross-reference your batch number at any time post-delivery.' },
                    { title: 'Temperature Records Per Shipment', body: 'Cold-chain monitoring devices in every shipment. Digital and physical temperature records provided at delivery.' },
                  ].map((item) => (
                    <li className="feature-item" key={item.title}>
                      <div className="feature-item__icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="feature-item__content">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section section--slate" id="team" aria-labelledby="team-heading">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">The People Behind the Product</span>
              <h2 id="team-heading">A Team Built From Aesthetic Medicine and Regulatory Expertise.</h2>
              <p>We are not a generic medical supplies distributor. Our team combines clinical backgrounds, regulatory affairs expertise, and international logistics experience — built specifically for the aesthetic injectable market.</p>
            </div>
            <div className="grid-3">
              {[
                { title: 'Co-Founder & CEO', bio: 'Former aesthetic medicine distributor with 12 years in the EU medical device supply chain. Built AestheFill Pro after seeing the compliance gap in the independent clinic market firsthand.', imgAlt: 'CEO/Founder Portrait — 600×480px WebP, professional setting' },
                { title: 'Head of Regulatory Affairs', bio: 'Regulatory affairs specialist with 9 years in EU MDR compliance and FDA import documentation. Oversees all certification, batch documentation, and compliance communications with trade accounts.', imgAlt: 'Head of Regulatory Affairs Portrait — 600×480px WebP, professional setting' },
                { title: 'Head of Operations & Logistics', bio: 'Specialist in pharmaceutical cold-chain logistics across EU and US markets. Designed and implemented our temperature monitoring and documentation system from the ground up.', imgAlt: 'Head of Operations Portrait — 600×480px WebP, professional setting' },
              ].map((member, i) => (
                <div key={i} style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', overflow: 'hidden', textAlign: 'center' }}>
                  <div className="img-placeholder img-placeholder--team" role="img" aria-label={`Team member headshot placeholder: ${member.imgAlt}`}>
                    <div className="img-placeholder__label">{member.imgAlt}</div>
                  </div>
                  <div style={{ padding: 'var(--space-6)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 'var(--space-1)' }}>[First Name, Surname]</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '0.03em', marginBottom: 'var(--space-3)' }}>{member.title}</div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', maxWidth: 600, marginInline: 'auto' }}>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-navy)', fontWeight: 500, marginBottom: 'var(--space-3)' }}>Want to speak to a person, not a portal?</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>Every verified trade account is assigned a named account manager. No automated ticketing. No offshore call centres. A person who knows your account, your ordering patterns, and your product preferences.</p>
              <Link href="/contact#enquire" className="btn btn--primary">Enquire for Your Account Manager →</Link>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="history-heading">
          <div className="container">
            <div className="grid-2" style={{ gap: 'var(--space-20)', alignItems: 'flex-start' }}>
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 id="history-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>Seven Years of Building the Supply Chain the Industry Deserved.</h2>
                <p style={{ marginBottom: 'var(--space-5)' }}>We started in 2018 with three products, two markets, and a founding principle we have never deviated from: if we cannot fully document it, we will not sell it.</p>
                <p>Since then, we have expanded our catalogue, deepened our manufacturer relationships, built a bi-continental logistics network, and served over 1,200 active trade accounts — all while maintaining the compliance standard that earned our first customers&apos; trust.</p>
              </div>
              <div style={{ position: 'relative', paddingLeft: 'var(--space-12)' }} role="list" aria-label="Company history timeline">
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 20, width: 2, background: 'linear-gradient(180deg, var(--color-gold) 0%, rgba(201,168,76,0.20) 100%)' }} aria-hidden="true" />
                {timeline.map((item) => (
                  <div key={item.year} style={{ position: 'relative', marginBottom: 'var(--space-10)' }} role="listitem">
                    <div style={{ position: 'absolute', left: 'calc(-1 * var(--space-12) + 12px)', top: 6, width: 16, height: 16, borderRadius: '50%', background: 'var(--color-gold)', border: '3px solid var(--color-white)', boxShadow: '0 0 0 2px var(--color-gold)' }} aria-hidden="true" />
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-1)' }}>{item.year}</div>
                    <h4 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supply chain */}
        <section className="section section--dark" aria-labelledby="supply-heading">
          <div className="container">
            <div className="section-header section-header--light">
              <span className="eyebrow">Supply Chain Integrity</span>
              <h2 id="supply-heading">From GMP Factory to Your Clinic. Every Step Documented.</h2>
              <p>We do not use grey market channels, parallel import routes, or unverified intermediaries. Our supply chain is short, direct, and fully auditable.</p>
            </div>
            <div className="grid-4">
              {[
                { icon: '🏭', title: 'EU GMP Manufacturer', desc: 'ISO-certified, EU GMP-compliant manufacturing facility. Regular quality audits.' },
                { icon: '📦', title: 'Quality Release', desc: 'Batch testing and quality release by our regulatory team before any product enters our warehouse.' },
                { icon: '🌡️', title: 'Cold-Chain Storage', desc: '2–8 °C controlled warehouse. Continuous temperature logging. Validated storage equipment.' },
                { icon: '🚚', title: 'Verified Logistics', desc: 'Temperature-monitored transit. Monitoring devices in every shipment. Full tracking from dispatch.' },
              ].map((item) => (
                <div key={item.icon} style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', fontSize: '1.5rem' }} aria-hidden="true">{item.icon}</div>
                  <h5 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-2)' }}>{item.title}</h5>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-12)', flexWrap: 'wrap' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Enquire to Purchase →</Link>
              <Link href="/products" className="btn btn--secondary btn--lg">View Products</Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" aria-labelledby="about-cta-heading">
          <div className="container container--narrow" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Ready to Work With Us?</span>
            <h2 id="about-cta-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>If You Hold the Licence, We Will Hold the Standard.</h2>
            <p className="lead" style={{ marginBottom: 'var(--space-8)' }}>Submit your trade enquiry. Verification in 1 business day. Personalised pricing within 24 hours of account activation.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Submit Your Enquiry →</Link>
              <Link href="/products" className="btn btn--outline-navy btn--lg">View Products First</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
