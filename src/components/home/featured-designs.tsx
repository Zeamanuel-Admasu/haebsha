import Image from "next/image";
import Link from "next/link";
import { featuredDesigns } from "@/features/designs/data/featured-designs";

export function FeaturedDesigns() {
  return (
    <section className="section designs-section" aria-labelledby="designs-title">
      <div className="section-heading reveal-up">
        <p className="eyebrow">Our designs</p>
        <h2 id="designs-title">Pieces we have created before.</h2>
        <Link href="/shop" className="text-link">
          View all
        </Link>
      </div>
      <div className="design-grid">
        {featuredDesigns.map((design) => (
          <Link
            href={design.href}
            className={`design-card image-reveal ${design.size}`}
            key={design.id}
            aria-label={`${design.name}, ${design.category}`}
          >
            <Image
              src={design.image}
              alt={design.alt}
              width={3840}
              height={design.size === "tall" ? 3840 : 3840}
              sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
