"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="final-cta" aria-labelledby="final-title">
      <p className="eyebrow">{t("final.eyebrow")}</p>
      <h2 id="final-title">
        {t("final.line1")}
        <br />
        {t("final.line2")}
        <br />
        {t("final.line3")}
      </h2>
      <div>
        <Link href="/shop" className="primary-link">
          {t("hero.primary")}
        </Link>
        <Link href="/custom" className="secondary-link">
          {t("hero.secondary")}
        </Link>
      </div>
    </section>
  );
}
