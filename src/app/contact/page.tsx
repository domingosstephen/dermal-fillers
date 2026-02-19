'use client';

import Link from 'next/link';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const faqs = [
  { q: 'I am a nurse practitioner / aesthetic nurse. Can I purchase?', a: 'Yes. Eligibility extends to registered nurses and nurse practitioners licensed to administer injectable treatments in their jurisdiction. You will need to provide your NMC, NPI, or equivalent registration number at account verification.' },
  { q: 'I represent a distributor, not a clinic. Can we work together?', a: 'Yes. We supply to registered wholesale distributors operating in the medical device space, subject to verification of your distribution licence and registration. Select "Wholesale Distributor" under Practice Type in the enquiry form.' },
  { q: 'Is there a minimum first order or account fee?', a: 'There is no account set-up fee. Minimum order quantities vary by product. Your account manager will provide your specific MOQs after verification — and they are set to be accessible for solo practitioners and small clinics, not only large groups.' },
  { q: 'How quickly can I receive a first order after account activation?', a: 'Once your account is active, orders are typically dispatched within 48 hours of confirmation. EU delivery is usually 2–5 business days. US delivery is typically 5–10 business days depending on customs clearance.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire to real backend / Formspree / server action
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section className="page-hero" aria-labelledby="contact-heading">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
              <span aria-current="page">Contact &amp; Enquire</span>
            </nav>
            <h1 id="contact-heading">Start Your Trade Enquiry.</h1>
            <p>Complete the form below. Licence verification within 1 business day. Personalised pricing from your account manager within 24 hours of activation.</p>
          </div>
        </section>

        {/* Enquiry section */}
        <section className="section" id="enquire" aria-labelledby="form-heading">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 'var(--space-16)', alignItems: 'flex-start' }}>

              {/* Form */}
              <div>
                <h2 id="form-heading" style={{ marginBottom: 'var(--space-3)' }}>Trade Enquiry Form</h2>
                <p style={{ marginBottom: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
                  This form is for licensed practitioners and registered clinics only. All fields marked with{' '}
                  <span aria-label="required" style={{ color: 'var(--color-gold)', fontWeight: 700 }}>*</span> are required.
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-12)' }} role="alert" aria-live="polite">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }} aria-hidden="true">✓</div>
                    <h3 style={{ color: 'var(--color-navy)', marginBottom: 'var(--space-3)' }}>Enquiry Received.</h3>
                    <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 480, marginInline: 'auto' }}>
                      Thank you. Our compliance team will verify your credentials within 1 business day. Your account manager will be in touch within 24 hours of verification with your personalised pricing.
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-4)' }}>
                      In the meantime, you can review our full{' '}
                      <Link href="/products" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>product catalogue</Link>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Trade enquiry form" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

                    {/* Practice details */}
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                      <legend style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', width: '100%' }}>Your Practice Details</legend>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="first-name">First Name <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <input type="text" id="first-name" name="first_name" className="form-input" placeholder="Dr. Jane" autoComplete="given-name" required />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="last-name">Last Name <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <input type="text" id="last-name" name="last_name" className="form-input" placeholder="Smith" autoComplete="family-name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="clinic-name">Clinic / Practice Name <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                          <input type="text" id="clinic-name" name="clinic_name" className="form-input" placeholder="e.g. City Aesthetics Clinic" autoComplete="organization" required />
                        </div>
                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="email">Business Email <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="jane@yourclinic.com" autoComplete="email" required />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="phone">Phone Number <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 000-0000" autoComplete="tel" required />
                          </div>
                        </div>
                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="country">Country <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <select id="country" name="country" className="form-select" required>
                              <option value="" disabled>Select your country</option>
                              <optgroup label="North America">
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                              </optgroup>
                              <optgroup label="Europe">
                                <option value="GB">United Kingdom</option>
                                <option value="DE">Germany</option>
                                <option value="FR">France</option>
                                <option value="IT">Italy</option>
                                <option value="ES">Spain</option>
                                <option value="NL">Netherlands</option>
                                <option value="BE">Belgium</option>
                                <option value="SE">Sweden</option>
                                <option value="NO">Norway</option>
                                <option value="DK">Denmark</option>
                                <option value="FI">Finland</option>
                                <option value="AT">Austria</option>
                                <option value="CH">Switzerland</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="IE">Ireland</option>
                              </optgroup>
                              <optgroup label="Other">
                                <option value="AU">Australia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="OTHER">Other</option>
                              </optgroup>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="practice-type">Practice Type <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                            <select id="practice-type" name="practice_type" className="form-select" required>
                              <option value="" disabled>Select practice type</option>
                              <option value="solo-practitioner">Solo Practitioner</option>
                              <option value="aesthetic-clinic">Aesthetic Clinic (1 location)</option>
                              <option value="multi-location">Multi-Location Clinic Group</option>
                              <option value="medical-spa">Medical Spa / MedSpa</option>
                              <option value="plastic-surgery">Plastic Surgery Centre</option>
                              <option value="dermatology">Dermatology Practice</option>
                              <option value="distributor">Wholesale Distributor</option>
                              <option value="other">Other Healthcare Organisation</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    {/* Credentials */}
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }} id="verification">
                      <legend style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', width: '100%' }}>Professional Credentials</legend>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                        <div className="highlight-box">
                          <p>Account activation requires verification of a valid practitioner licence or business registration number. This is a regulatory requirement for the sale of medical devices.</p>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="licence-number">Practitioner Licence / Registration Number <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></label>
                          <input type="text" id="licence-number" name="licence_number" className="form-input" placeholder="e.g. GMC 1234567 / DEA ABCD1234567" required aria-describedby="licence-hint" />
                          <span className="form-hint" id="licence-hint">Enter your medical board, aesthetic council, or business registration number. This will be verified by our compliance team.</span>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="issuing-body">Issuing Body / Registration Council</label>
                          <input type="text" id="issuing-body" name="issuing_body" className="form-input" placeholder="e.g. General Medical Council, State Medical Board of California" />
                        </div>
                      </div>
                    </fieldset>

                    {/* Products */}
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                      <legend style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', width: '100%' }}>Products of Interest</legend>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                        <div className="form-group">
                          <span className="form-label" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>Which products are you interested in? <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span></span>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                            {[['aesthefill-soft', 'AestheFill Soft'], ['aesthefill-volume', 'AestheFill Volume'], ['aesthefill-deep', 'AestheFill Deep'], ['full-range', 'Full Range (All Three)']].map(([val, label]) => (
                              <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                <input type="checkbox" name="products[]" value={val} defaultChecked={val === 'full-range'} style={{ width: 18, height: 18, accentColor: 'var(--color-gold)', flexShrink: 0 }} />
                                {label}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="monthly-volume">Estimated Monthly Volume</label>
                          <select id="monthly-volume" name="monthly_volume" className="form-select">
                            <option value="" disabled>Select approximate monthly usage</option>
                            <option value="1-10">1–10 syringes per month</option>
                            <option value="11-30">11–30 syringes per month</option>
                            <option value="31-100">31–100 syringes per month</option>
                            <option value="101-500">101–500 syringes per month</option>
                            <option value="500+">500+ syringes per month</option>
                            <option value="unsure">Not sure yet</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* Additional */}
                    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                      <legend style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', width: '100%' }}>Additional Information</legend>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="message">Message or Questions (Optional)</label>
                          <textarea id="message" name="message" className="form-textarea" placeholder="Any specific questions about the products, compliance documentation, delivery timelines, or anything else — let us know here." />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="how-found">How Did You Hear About AestheFill Pro?</label>
                          <select id="how-found" name="how_found" className="form-select">
                            <option value="" disabled>Select one</option>
                            <option value="google">Google Search</option>
                            <option value="colleague">Colleague / Referral</option>
                            <option value="conference">Industry Conference or Event</option>
                            <option value="social">Social Media</option>
                            <option value="publication">Medical / Trade Publication</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* Consent + submit */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: 'pointer' }}>
                        <input type="checkbox" name="consent_data" required style={{ marginTop: 3, flexShrink: 0, width: 18, height: 18, accentColor: 'var(--color-gold)' }} />
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                          I confirm that I am a licensed practitioner or authorised representative of a registered healthcare business. I agree to the processing of my data for the purpose of account verification and trade enquiry, in accordance with the{' '}
                          <Link href="/privacy" style={{ color: 'var(--color-navy)', textDecoration: 'underline' }}>Privacy Policy</Link>. <span aria-hidden="true" style={{ color: 'var(--color-gold)' }}>*</span>
                        </span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: 'pointer' }}>
                        <input type="checkbox" name="consent_marketing" style={{ marginTop: 3, flexShrink: 0, width: 18, height: 18, accentColor: 'var(--color-gold)' }} />
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                          I would like to receive product updates, regulatory news, and trade offers from AestheFill Pro. I understand I can unsubscribe at any time.
                        </span>
                      </label>
                      <button type="submit" className="btn btn--primary btn--lg" disabled={loading} style={{ alignSelf: 'flex-start' }}>
                        {loading ? 'Submitting…' : 'Submit My Trade Enquiry →'}
                      </button>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        By submitting this form you confirm the information provided is accurate. For urgent queries, email{' '}
                        <a href="mailto:trade@yourdomain.com" style={{ color: 'var(--color-navy)' }}>trade@yourdomain.com</a> directly.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <aside style={{ position: 'sticky', top: 'calc(var(--nav-height) + var(--space-8))' }} aria-label="Contact information and process">
                {/* Contact info */}
                <div style={{ background: 'var(--color-navy)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ color: 'var(--color-white)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>Get in Touch Directly.</h3>
                  {[
                    { label: 'Trade Enquiries', value: 'trade@yourdomain.com', sub: 'Response within 24 hours', href: 'mailto:trade@yourdomain.com' },
                    { label: 'Account Support', value: 'support@yourdomain.com', sub: 'For existing account holders', href: 'mailto:support@yourdomain.com' },
                    { label: 'Business Hours', value: 'Monday – Friday', sub: '09:00 – 17:00 CET', href: null },
                    { label: 'Coverage', value: 'USA & Europe', sub: 'EU · UK · EEA · United States', href: null },
                  ].map((item, i, arr) => (
                    <div key={item.label} style={{ display: 'flex', gap: 'var(--space-4)', paddingBlock: 'var(--space-5)', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-gold)', fontSize: '1rem' }}>✉</div>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-1)' }}>{item.label}</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.80)', fontWeight: 500 }}>
                          {item.href ? <a href={item.href} style={{ color: 'inherit' }}>{item.value}</a> : item.value}
                        </div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)' }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Process mini steps */}
                <div style={{ background: 'var(--color-off-white)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', border: '1px solid var(--color-border)' }}>
                  <h5 style={{ color: 'var(--color-navy)', marginBottom: 'var(--space-5)', fontSize: 'var(--text-base)' }}>What Happens After You Submit</h5>
                  {[
                    { n: 1, title: 'Enquiry Received', sub: 'Confirmation email sent to your address immediately.' },
                    { n: 2, title: 'Licence Verification', sub: 'Our compliance team verifies your credentials. Typically within 1 business day.' },
                    { n: 3, title: 'Account Activation', sub: 'Your trade account is activated and your account manager assigned.' },
                    { n: 4, title: 'Pricing & Terms', sub: 'Personalised pricing, MOQs, and payment terms provided within 24 hours of activation.' },
                  ].map((step, i, arr) => (
                    <div key={step.n} style={{ display: 'flex', gap: 'var(--space-4)', paddingBlock: 'var(--space-4)', borderBottom: i < arr.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--color-gold)', color: 'var(--color-navy)', fontSize: 'var(--text-xs)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.n}</div>
                      <div>
                        <strong style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-navy)', marginBottom: 2 }}>{step.title}</strong>
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{step.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* Samples */}
        <section className="section section--slate" id="samples" aria-labelledby="samples-heading">
          <div className="container container--narrow" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Not Ready to Order Yet?</span>
            <h2 id="samples-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>Request a Product Sample First.</h2>
            <p className="lead" style={{ marginBottom: 'var(--space-6)' }}>We offer product samples to verified practitioners considering switching suppliers or adding a new range to their clinic. Subject to account verification and availability.</p>
            <p style={{ marginBottom: 'var(--space-8)', color: 'var(--color-text-muted)' }}>To request a sample, mention it in the Additional Information field of the main enquiry form, or email our trade team at <a href="mailto:trade@yourdomain.com" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>trade@yourdomain.com</a> with the subject line &quot;Sample Request.&quot;</p>
            <Link href="#enquire" className="btn btn--primary btn--lg">Include Sample Request in My Enquiry →</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="contact-faq-heading">
          <div className="container container--narrow">
            <div className="section-header">
              <span className="eyebrow">Before You Submit</span>
              <h2 id="contact-faq-heading">Quick Answers to Common Enquiry Questions.</h2>
            </div>
            <div role="list">
              {faqs.map((faq, i) => (
                <div className={`faq-item${openFaq === i ? ' open' : ''}`} role="listitem" key={i}>
                  <button
                    className="faq-question"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <h4>{faq.q}</h4>
                    <div className="faq-question__icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                  </button>
                  <div className="faq-answer" role="region">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
