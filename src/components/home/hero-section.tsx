"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { Brand3D } from "./brand-3d";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" aria-label={t("hero.aria")}>
      <div className="hero-copy">
        <p className="eyebrow">{t("hero.eyebrow")}</p>
        <Brand3D />
        <div className="hero-actions" aria-label="Primary paths">
          <Link href="/shop" className="primary-link">
            {t("hero.primary")}
          </Link>
          <Link href="/custom" className="secondary-link">
            {t("hero.secondary")}
          </Link>
        </div>
      </div>
      <div className="hero-image-wrap image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-1-4k.jpg"
          alt={t("hero.alt")}
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
