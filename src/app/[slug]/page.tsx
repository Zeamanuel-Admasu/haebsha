import { PlaceholderContent } from "@/components/layout/placeholder-content";

const labels: Record<string, string> = {
  shop: "Previous Designs",
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
  return <PlaceholderContent slug={params.slug} />;
}
