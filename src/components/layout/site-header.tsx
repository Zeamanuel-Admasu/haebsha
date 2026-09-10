"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Language, useLanguage } from "@/lib/language";

const navigation = [
  { label: "nav.shop", href: "/shop" },
  { label: "nav.custom", href: "/custom" },
  { label: "nav.story", href: "/story" },
  { label: "nav.how", href: "/how-it-works" }
] as const;

const languageOptions: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "am", label: "አማ" }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled || isOpen ? "is-solid" : ""}`}>
      <Link href="/" className="brand-mark" onClick={() => setIsOpen(false)}>
        Qesem
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {t(item.label)}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <div className="language-toggle" aria-label={t("language.label")}>
          {languageOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              className={language === option.value ? "is-active" : ""}
              aria-pressed={language === option.value}
              aria-label={
                option.value === "en" ? t("language.english") : t("language.amharic")
              }
              onClick={() => setLanguage(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <Link href="/shop" aria-label={t("nav.search")}>
          <Search size={18} strokeWidth={1.7} />
        </Link>
        <Link href="/account" aria-label={t("nav.account")}>
          <User size={18} strokeWidth={1.7} />
        </Link>
        <Link href="/cart" aria-label={t("nav.bag")}>
          <ShoppingBag size={18} strokeWidth={1.7} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-panel ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-language-toggle" aria-label={t("language.label")}>
          {languageOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              className={language === option.value ? "is-active" : ""}
              aria-pressed={language === option.value}
              onClick={() => setLanguage(option.value)}
            >
              {option.value === "en" ? t("language.english") : t("language.amharic")}
            </button>
          ))}
        </div>
        {navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
            {t(item.label)}
          </Link>
        ))}
        <Link href="/account" onClick={() => setIsOpen(false)}>
          {t("nav.account")}
        </Link>
        <Link href="/cart" onClick={() => setIsOpen(false)}>
          {t("nav.bag")}
        </Link>
      </div>
    </header>
  );
}
