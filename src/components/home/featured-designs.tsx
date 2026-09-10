"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredDesigns } from "@/features/designs/data/featured-designs";
import { useLanguage } from "@/lib/language";

const designCopy = {
  selam: {
    category: "design.selam.category",
    alt: "design.selam.alt"
  },
  maraki: {
    category: "design.maraki.category",
    alt: "design.maraki.alt"
  },
  almaz: {
    category: "design.almaz.category",
    alt: "design.almaz.alt"
  },
  tsion: {
    category: "design.tsion.category",
    alt: "design.tsion.alt"
  },
  lidet: {
    category: "design.lidet.category",
    alt: "design.lidet.alt"
  }
} as const;

export function FeaturedDesigns() {
  const { t } = useLanguage();

  return (
    <section className="section designs-section" aria-labelledby="designs-title">
      <div className="section-heading reveal-up">
        <p className="eyebrow">{t("designs.eyebrow")}</p>
        <h2 id="designs-title">{t("designs.title")}</h2>
        <Link href="/shop" className="text-link">
          {t("designs.viewAll")}
        </Link>
      </div>
      <div className="design-grid">
        {featuredDesigns.map((design) => {
          const copy = designCopy[design.id as keyof typeof designCopy];

          return (
            <Link
              href={design.href}
              className={`design-card image-reveal ${design.size}`}
              key={design.id}
              aria-label={`${design.name}, ${t(copy.category)}`}
            >
              <Image
                src={design.image}
                alt={t(copy.alt)}
                width={3840}
                height={design.size === "tall" ? 3840 : 3840}
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
