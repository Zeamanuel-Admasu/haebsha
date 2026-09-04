import Link from "next/link";

const links = [
  ["Previous Designs", "/shop"],
  ["Custom Design", "/custom"],
  ["How It Works", "/how-it-works"],
  ["Measurement Guide", "/measurements"],
  ["Shipping", "/shipping"],
  ["Returns", "/returns"],
  ["FAQ", "/faq"],
  ["Our Story", "/story"],
  ["Contact", "/contact"],
  ["Instagram", "/instagram"],
  ["TikTok", "/tiktok"],
  ["Facebook", "/facebook"]
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-brand">
          Qesem
        </Link>
        <p>Tradition, made yours.</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="footer-legal">
        <span>&copy; 2026 Qesem Habesha Libs</span>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
