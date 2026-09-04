"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Custom Design", href: "/custom" },
  { label: "Our Story", href: "/story" },
  { label: "How It Works", href: "/how-it-works" }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link href="/shop" aria-label="Search">
          <Search size={18} strokeWidth={1.7} />
        </Link>
        <Link href="/account" aria-label="Account">
          <User size={18} strokeWidth={1.7} />
        </Link>
        <Link href="/cart" aria-label="Bag">
          <ShoppingBag size={18} strokeWidth={1.7} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-panel ${isOpen ? "is-open" : ""}`}>
        {navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/account" onClick={() => setIsOpen(false)}>
          Account
        </Link>
        <Link href="/cart" onClick={() => setIsOpen(false)}>
          Bag
        </Link>
      </div>
    </header>
  );
}
