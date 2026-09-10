"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";

export function CraftsmanshipSection() {
  const { t } = useLanguage();

  return (
    <section className="section craft-section" aria-labelledby="craft-title">
      <div className="craft-image image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-3-4k.jpg"
          alt={t("craft.alt")}
          width={1536}
          height={1024}
          sizes="(max-width: 860px) 92vw, 54vw"
        />
      </div>
      <div className="craft-copy reveal-up">
        <p className="eyebrow">{t("craft.eyebrow")}</p>
        <h2 id="craft-title">{t("craft.title")}</h2>
      </div>
    </section>
  );
}
