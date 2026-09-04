import Link from "next/link";

const labels: Record<string, string> = {
  shop: "Previous Designs",
  custom: "Custom Design",
  story: "Our Story",
  "how-it-works": "How It Works",
  account: "Account",
  cart: "Bag",
  measurements: "Measurement Guide",
  shipping: "Shipping",
  returns: "Returns",
  faq: "FAQ",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook"
};

export function generateStaticParams() {
  return Object.keys(labels).map((slug) => ({ slug }));
}

export default function PlaceholderPage({ params }: { params: { slug: string } }) {
  const title = labels[params.slug] ?? "Coming Soon";

  return (
    <main className="placeholder-page">
      <Link href="/" className="placeholder-brand">
        Qesem
      </Link>
      <section>
        <p className="eyebrow">Coming soon</p>
        <h1>{title}</h1>
        <p>
          This destination is reserved for the next phase. The homepage links are
          active while the full experience is being designed.
        </p>
        <Link href="/" className="text-link">
          Return home
        </Link>
      </section>
    </main>
  );
}
