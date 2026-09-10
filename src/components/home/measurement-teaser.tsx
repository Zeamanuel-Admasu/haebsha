"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language";

export function MeasurementTeaser() {
  const { t } = useLanguage();

  return (
    <section className="section measurement-section" aria-labelledby="measurement-title">
      <div className="measurement-copy reveal-up">
        <p className="eyebrow">{t("measurement.eyebrow")}</p>
        <h2 id="measurement-title">{t("measurement.title")}</h2>
        <Link href="/measurements" className="secondary-link">
          {t("measurement.cta")}
        </Link>
      </div>
      <div className="measurement-preview image-reveal">
        <Image
          src="/images/source/4k/ethiopian-store-photo-2-4k.jpg"
          alt={t("measurement.alt")}
          width={1024}
          height={1536}
          sizes="(max-width: 780px) 92vw, 36vw"
        />
        <span>{t("measurement.preview")}</span>
      </div>
    </section>
  );
}
