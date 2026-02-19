import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = {
  title: 'Wholesale Dermal Filler Products | HA Injectables Catalogue',
  description:
    'Browse our full wholesale catalogue of CE-certified hyaluronic acid dermal fillers. Three precision-engineered HA ranges — Soft, Volume, and Deep — for every aesthetic indication. Trade pricing available to licensed practitioners.',
  alternates: { canonical: 'https://www.yourdomain.com/products/' },
  openGraph: {
    title: 'Wholesale Dermal Filler Products Catalogue | AestheFill Pro',
    description: 'Three CE-certified HA filler ranges formulated for every anatomical zone and clinical technique. Wholesale pricing for licensed practitioners in the USA and Europe.',
    url: 'https://www.yourdomain.com/products/',
    images: [{ url: '/assets/og-products.jpg', width: 1200, height: 630 }],
  },
};

const products = [
  {
    id: 'soft',
    range: '01',
    name: 'AestheFill Soft',
    badge: 'Superficial Lines',
    badgeStyle: {},
    category: 'Fine Lines & Lip Definition',
    desc: 'Our lowest-viscosity formula, designed for work where precision and natural movement are paramount. AestheFill Soft integrates smoothly into the superficial dermis, providing reliable hydration, subtle definition, and a consistent finish that experienced practitioners trust repeat-treatment after repeat-treatment.',
    descSub: 'The low cross-linking density ensures minimal swelling on injection and excellent moulding in delicate anatomical zones, including the periorbital area and vermilion border.',
    indications: ['Periorbital Lines', 'Lip Definition', 'Superficial Wrinkles', 'Décolleté', 'Neck & Décolleté', 'Glabellar Lines', 'Superficial Skin Hydration'],
    specs: [
      ['HA Concentration', '16 mg/mL'],
      ['Cross-Linking Degree', 'Low (BDDE)'],
      ['Viscosity (G\')', '85 Pa'],
      ['Volume Options', '0.3 mL · 1.0 mL'],
      ['Lidocaine', '0.3% (optional)'],
      ['Needles Included', '27G × 0.5" (×2)'],
      ['Injection Depth', 'Superficial dermis'],
      ['Duration (Est.)', '6–9 months'],
      ['Storage', '2–8 °C'],
      ['Shelf Life', '24 months from mfg.'],
      ['Regulatory Status', 'CE / MDR 2017/745'],
      ['GMP Manufacture', 'EU Certified Facility'],
    ],
    imgAlt: 'AestheFill Soft syringe and packaging — clean studio photograph, white background — 600×500px WebP',
    imgLabel: 'AestheFill Soft Product Photography\n600×500px WebP, white BG, studio lit',
    featured: false,
  },
  {
    id: 'volume',
    range: '02',
    name: 'AestheFill Volume',
    badge: 'Most Requested',
    badgeStyle: { background: 'var(--color-gold)', color: 'var(--color-navy)' },
    category: 'Mid-Face Volumisation & Contouring',
    desc: 'The centrepiece of our range. AestheFill Volume delivers the lift, projection, and duration that a full-service aesthetic clinic depends on for its mid-face and contouring work. Its optimised rheology — a balance of cohesivity and elasticity — gives practitioners precise control over volume placement and natural-looking results that last.',
    descSub: 'The formulation supports both linear threading and bolus injection techniques, making it the versatile workhorse for practices treating a broad range of patient profiles and treatment plans.',
    indications: ['Cheek Augmentation', 'Nasolabial Folds', 'Midface Volumisation', 'Marionette Lines', 'Lip Body Volume', 'Temple Hollowing', 'Pre-Jowl Sulcus'],
    specs: [
      ['HA Concentration', '22 mg/mL'],
      ['Cross-Linking Degree', 'Medium (BDDE)'],
      ['Viscosity (G\')', '250 Pa'],
      ['Volume Options', '1.0 mL · 2.0 mL'],
      ['Lidocaine', '0.3% (optional)'],
      ['Needles Included', '25G × 1" (×2)'],
      ['Injection Depth', 'Deep dermis / subcutis'],
      ['Duration (Est.)', '12–18 months'],
      ['Storage', '2–8 °C'],
      ['Shelf Life', '24 months from mfg.'],
      ['Regulatory Status', 'CE / MDR 2017/745'],
      ['GMP Manufacture', 'EU Certified Facility'],
    ],
    imgAlt: 'AestheFill Volume syringe and premium packaging — studio photograph with warm gold accent lighting — 600×500px WebP',
    imgLabel: 'AestheFill Volume Product Photography\n600×500px WebP, dark BG with gold accent lighting',
    featured: true,
  },
  {
    id: 'deep',
    range: '03',
    name: 'AestheFill Deep',
    badge: 'Deep Tissue',
    badgeStyle: {},
    category: 'Structural Correction & Contouring',
    desc: 'AestheFill Deep is formulated for advanced practitioners who work at the deepest anatomical levels. Its high-density, highly cross-linked matrix provides the mechanical support required for structural correction — jawline definition, chin projection, and deep malar enhancement — with results that stand the test of time.',
    descSub: 'Suitable for both supraperiosteal and deep dermal placement. Compatible with cannula techniques. Recommended for practitioners with advanced anatomical training and demonstrable experience in deep-plane injection.',
    indications: ['Jawline Definition', 'Chin Projection', 'Malar Augmentation', 'Deep Nasolabial Folds', 'Nose Bridge (Advanced)', 'Mandibular Angle'],
    specs: [
      ['HA Concentration', '24 mg/mL'],
      ['Cross-Linking Degree', 'High (BDDE)'],
      ['Viscosity (G\')', '480 Pa'],
      ['Volume Options', '1.0 mL · 2.0 mL'],
      ['Lidocaine', '0.3% (optional)'],
      ['Needles / Cannula', '23G needle · 22G cannula option'],
      ['Injection Depth', 'Supraperiosteal / deep dermis'],
      ['Duration (Est.)', '18–24 months'],
      ['Storage', '2–8 °C'],
      ['Shelf Life', '24 months from mfg.'],
      ['Regulatory Status', 'CE / MDR 2017/745'],
      ['GMP Manufacture', 'EU Certified Facility'],
    ],
    imgAlt: 'AestheFill Deep syringe and premium dark packaging — architectural studio photograph, dark navy background — 600×500px WebP',
    imgLabel: 'AestheFill Deep Product Photography\n600×500px WebP, dark dramatic studio lighting',
    featured: false,
    advancedOnly: true,
  },
];

const comparisonRows = [
  ['HA Concentration', '16 mg/mL', '22 mg/mL', '24 mg/mL'],
  ['Cross-Linking', 'Low (BDDE)', 'Medium (BDDE)', 'High (BDDE)'],
  ['Viscosity (G\')', '85 Pa', '250 Pa', '480 Pa'],
  ['Injection Depth', 'Superficial dermis', 'Deep dermis / subcutis', 'Supraperiosteal / deep dermis'],
  ['Volume Options', '0.3 mL · 1.0 mL', '1.0 mL · 2.0 mL', '1.0 mL · 2.0 mL'],
  ['Duration (Est.)', '6–9 months', '12–18 months', '18–24 months'],
  ['Included Needle', '27G × 0.5"', '25G × 1"', '23G needle / 22G cannula'],
  ['Lidocaine Option', '0.3%', '0.3%', '0.3%'],
  ['CE Certification', '✓ MDR 2017/745', '✓ MDR 2017/745', '✓ MDR 2017/745'],
  ['Primary Indications', 'Fine lines, lips, periorbital', 'Cheeks, midface, folds', 'Jaw, chin, deep structural'],
  ['Practitioner Level', 'All levels', 'Intermediate – Advanced', 'Advanced only'],
];

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section className="page-hero" aria-labelledby="page-heading">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
              <span aria-current="page">Products</span>
            </nav>
            <h1 id="page-heading">The Complete Product Catalogue.</h1>
            <p>Three CE-certified hyaluronic acid filler ranges, engineered for precision across every anatomical zone. Wholesale supply for licensed practitioners.</p>
          </div>
        </section>

        {/* Catalogue intro bar */}
        <section className="section--sm" style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-navy)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>All products carry CE marking under EU MDR 2017/745 and full cold-chain documentation.</p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Pricing is available to verified trade accounts only. Enquire below to receive your personalised quote.</p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexShrink: 0 }}>
                <Link href="/contact#enquire" className="btn btn--primary">Enquire for Pricing →</Link>
                <Link href="#comparison" className="btn btn--outline-navy">Compare Products</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        {products.map((product, idx) => (
          <section
            key={product.id}
            id={product.id}
            className={`section${idx % 2 === 1 ? ' section--slate' : ''}`}
            aria-labelledby={`${product.id}-heading`}
          >
            <div className="container">
              {product.featured && (
                <div style={{ background: 'linear-gradient(90deg, var(--color-navy) 0%, var(--color-navy-mid) 100%)', padding: 'var(--space-3) var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0', marginBottom: 0 }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>★ Most Requested by Trade Accounts</span>
                </div>
              )}
              <div style={{ background: 'var(--color-white)', borderRadius: product.featured ? '0 0 var(--radius-xl) var(--radius-xl)' : 'var(--radius-xl)', border: product.featured ? '2px solid rgba(201,168,76,0.40)' : '1px solid var(--color-border)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {/* Image */}
                <div style={{ gridColumn: 1 }}>
                  <div className="img-placeholder" style={{ height: '100%', minHeight: 420, borderRadius: 0, border: 'none' }} role="img" aria-label={`Product image placeholder: ${product.imgAlt}`}>
                    <span style={{ background: 'var(--color-navy)', color: 'var(--color-gold)', fontSize: 'var(--text-xs)', fontWeight: 700, padding: '5px 12px', borderRadius: 'var(--radius-pill)', ...product.badgeStyle }}>{product.badge}</span>
                    <div className="img-placeholder__label">{product.imgLabel}</div>
                  </div>
                </div>
                {/* Content */}
                <div style={{ gridColumn: 2, padding: 'var(--space-10)', borderRight: '1px solid var(--color-border)' }}>
                  <span className="eyebrow">Range {product.range}</span>
                  <h2 id={`${product.id}-heading`} style={{ marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>{product.name}</h2>
                  <div className="badge badge--navy" style={{ marginBottom: 'var(--space-5)' }}>{product.category}</div>
                  <p style={{ marginBottom: 'var(--space-5)' }}>{product.desc}</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>{product.descSub}</p>
                  {product.advancedOnly && (
                    <div className="highlight-box" style={{ marginBottom: 'var(--space-6)' }}>
                      <p><strong>Advanced Practitioners:</strong> This product is recommended for clinicians with advanced anatomical training in deep-plane facial injection.</p>
                    </div>
                  )}
                  <h5 style={{ marginBottom: 'var(--space-3)' }}>Indicated Treatment Areas</h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                    {product.indications.map((ind) => (
                      <span key={ind} style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-navy-mid)', background: 'var(--color-slate-50)', border: '1px solid var(--color-slate-100)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>{ind}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)', display: 'flex', gap: 'var(--space-3)' }}>
                    <Link href="/contact#enquire" className="btn btn--primary">Enquire for Pricing →</Link>
                    <Link href="/contact#samples" className="btn btn--outline-navy">Request Sample</Link>
                  </div>
                </div>
                {/* Specs */}
                <div style={{ gridColumn: 3, padding: 'var(--space-10)', background: 'var(--color-off-white)' }}>
                  <h5 style={{ marginBottom: 'var(--space-5)' }}>Technical Specifications</h5>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label={`${product.name} technical specifications`}>
                    <tbody>
                      {product.specs.map(([key, val]) => (
                        <tr key={key} style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <td style={{ padding: 'var(--space-3) 0', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-navy)', width: '45%' }}>{key}</td>
                          <td style={{ padding: 'var(--space-3) 0', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-gold-pale)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-navy)', fontWeight: 600, marginBottom: 'var(--space-1)' }}>Documentation Included</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>CE Certificate · Batch Certificate · IFU · Cold-Chain Records</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Comparison table */}
        <section className="section section--slate" id="comparison" aria-labelledby="comparison-heading">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Product Comparison</span>
              <h2 id="comparison-heading">Choose the Right Formula for Every Indication.</h2>
              <p>A side-by-side comparison of all three AestheFill Pro ranges to guide product selection for your clinic.</p>
            </div>
            <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <table className="comparison-table" aria-label="Comparison of AestheFill Soft, Volume, and Deep product ranges">
                <thead>
                  <tr>
                    <th scope="col">Specification</th>
                    <th scope="col">AestheFill Soft</th>
                    <th scope="col">AestheFill Volume ★</th>
                    <th scope="col">AestheFill Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, ...vals]) => (
                    <tr key={label}>
                      <td><strong>{label}</strong></td>
                      {vals.map((v, i) => <td key={i}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)', fontSize: 'var(--text-sm)' }}>Duration estimates are based on typical patient profiles and injection technique. Individual results vary.</p>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Enquire for the Full Range →</Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section--dark" aria-labelledby="products-cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Get Started Today</span>
            <h2 id="products-cta-heading" style={{ color: 'var(--color-white)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)', maxWidth: 600, marginInline: 'auto' }}>Ready to Enquire? Your Account Manager is Waiting.</h2>
            <p style={{ color: 'rgba(255,255,255,0.70)', maxWidth: 480, marginInline: 'auto', marginBottom: 'var(--space-8)' }}>Submit your trade enquiry and receive personalised pricing within 24 hours. No commitment required at the enquiry stage.</p>
            <Link href="/contact#enquire" className="btn btn--primary btn--lg">Submit Trade Enquiry →</Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
