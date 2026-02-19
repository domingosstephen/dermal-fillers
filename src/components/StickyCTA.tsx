import Link from 'next/link';

export default function StickyCTA() {
  return (
    <div className="sticky-cta-bar" role="complementary" aria-label="Mobile call to action">
      <Link
        href="/contact#enquire"
        className="btn btn--primary"
        style={{ width: '100%', justifyContent: 'center' }}
        aria-label="Enquire to purchase dermal fillers wholesale"
      >
        Enquire to Purchase →
      </Link>
    </div>
  );
}
