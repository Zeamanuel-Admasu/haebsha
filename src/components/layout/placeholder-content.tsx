"use client";

import Link from "next/link";
import { TranslationKey, useLanguage } from "@/lib/language";

const pageTitleKeys = {
  shop: "footer.previous",
  custom: "nav.custom",
  story: "nav.story",
  "how-it-works": "nav.how",
  account: "nav.account",
  cart: "nav.bag",
  measurements: "footer.measurement",
  shipping: "footer.shipping",
  returns: "footer.returns",
  faq: "footer.faq",
  contact: "footer.contact",
  privacy: "footer.privacy",
  terms: "footer.terms"
} satisfies Record<string, TranslationKey>;

type PlaceholderSlug = keyof typeof pageTitleKeys;

export function PlaceholderContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const titleKey = pageTitleKeys[slug as PlaceholderSlug];
  const title = titleKey ? t(titleKey) : t("placeholder.default");

  return (
    <main className="placeholder-page">
      <Link href="/" className="placeholder-brand">
        Qesem
      </Link>
      <section>
        <p className="eyebrow">{t("placeholder.comingSoon")}</p>
        <h1>{title}</h1>
        <p>{t("placeholder.body")}</p>
        <Link href="/" className="text-link">
          {t("placeholder.return")}
        </Link>
      </section>
    </main>
  );
}
