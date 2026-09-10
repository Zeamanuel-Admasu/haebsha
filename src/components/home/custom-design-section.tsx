"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { RotatingGarment } from "./rotating-garment";

export function CustomDesignSection() {
  const { t } = useLanguage();

  return (
    <section className="section custom-section" aria-labelledby="custom-title">
      <div className="custom-visual image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-2-4k.jpg"
          alt={t("custom.alt")}
          width={1024}
          height={1536}
          sizes="(max-width: 820px) 92vw, 40vw"
        />
      </div>
      <div className="custom-copy reveal-up">
        <p className="eyebrow">{t("custom.eyebrow")}</p>
        <h2>{t("custom.title")}</h2>
        <p>{t("custom.body")}</p>
        <Link href="/custom" className="primary-link">
          {t("custom.cta")}
        </Link>
      </div>
      <RotatingGarment />
    </section>
  );
}
