"use client";

import Link from "next/link";
import { TranslationKey, useLanguage } from "@/lib/language";

const links = [
  { labelKey: "footer.previous", href: "/shop" },
  { labelKey: "nav.custom", href: "/custom" },
  { labelKey: "nav.how", href: "/how-it-works" },
  { labelKey: "footer.measurement", href: "/measurements" },
  { labelKey: "footer.shipping", href: "/shipping" },
  { labelKey: "footer.returns", href: "/returns" },
  { labelKey: "footer.faq", href: "/faq" },
  { labelKey: "nav.story", href: "/story" },
  { labelKey: "footer.contact", href: "/contact" },
  { label: "Instagram", href: "/instagram" },
  { label: "TikTok", href: "/tiktok" },
  { label: "Facebook", href: "/facebook" }
] satisfies Array<
  { href: string; labelKey: TranslationKey; label?: never } | { href: string; label: string; labelKey?: never }
>;

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-brand">
          Qesem
        </Link>
        <p>{t("footer.tagline")}</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.labelKey ? t(link.labelKey) : link.label}
          </Link>
        ))}
      </nav>
      <div className="footer-legal">
        <span>&copy; 2026 Qesem Habesha Libs</span>
        <Link href="/privacy">{t("footer.privacy")}</Link>
        <Link href="/terms">{t("footer.terms")}</Link>
      </div>
    </footer>
  );
}
