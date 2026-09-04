import Image from "next/image";
import Link from "next/link";
import { Brand3D } from "./brand-3d";

export function HeroSection() {
  return (
    <section className="hero-section" aria-label="Qesem Habesha Libs homepage introduction">
      <div className="hero-copy">
        <p className="eyebrow">Modern Habesha fashion, made to order</p>
        <Brand3D />
        <div className="hero-actions" aria-label="Primary paths">
          <Link href="/shop" className="primary-link">
            Explore designs
          </Link>
          <Link href="/custom" className="secondary-link">
            Create your own
          </Link>
        </div>
      </div>
      <div className="hero-image-wrap image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-1-4k.jpg"
          alt="Editorial Qesem Habesha Libs model wearing an ivory embroidered dress"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 780px) 88vw, 46vw"
          className="hero-image"
        />
      </div>
    </section>
  );
}
