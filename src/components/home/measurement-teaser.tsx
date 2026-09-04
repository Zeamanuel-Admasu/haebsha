import Image from "next/image";
import Link from "next/link";

export function MeasurementTeaser() {
  return (
    <section className="section measurement-section" aria-labelledby="measurement-title">
      <div className="measurement-copy reveal-up">
        <p className="eyebrow">The perfect fit</p>
        <h2 id="measurement-title">
          We will show you exactly how to measure from home.
        </h2>
        <Link href="/measurements" className="secondary-link">
          Watch the guide
        </Link>
      </div>
      <div className="measurement-preview image-reveal">
        <Image
          src="/images/source/4k/ethiopian-store-photo-2-4k.jpg"
          alt="Close detail of embroidered fabric used as a measurement guide preview"
          width={1024}
          height={1536}
          sizes="(max-width: 780px) 92vw, 36vw"
        />
        <span>Fit guide preview</span>
      </div>
    </section>
  );
}
