import Link from "next/link";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <p className="eyebrow">Begin</p>
      <h2 id="final-title">
        Your design.
        <br />
        Your measurements.
        <br />
        Made for you.
      </h2>
      <div>
        <Link href="/shop" className="primary-link">
          Explore designs
        </Link>
        <Link href="/custom" className="secondary-link">
          Create your own
        </Link>
      </div>
    </section>
  );
}
