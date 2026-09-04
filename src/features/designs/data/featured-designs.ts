export type FeaturedDesign = {
  id: string;
  name: string;
  category: string;
  href: string;
  image: string;
  alt: string;
  source: "Ethiopian.store";
  size: "large" | "medium" | "tall";
};

export const featuredDesigns: FeaturedDesign[] = [
  {
    id: "selam",
    name: "Selam",
    category: "Women's Custom Dress",
    href: "/shop",
    image: "/images/source/4k/ethiopian-store-photo-1-4k.jpg",
    alt: "Habesha dress sourced from Ethiopian.store",
    source: "Ethiopian.store",
    size: "large"
  },
  {
    id: "maraki",
    name: "Maraki",
    category: "Embroidered Finish",
    href: "/shop",
    image: "/images/source/4k/ethiopian-store-photo-2-4k.jpg",
    alt: "Pink and white Habesha dress sourced from Ethiopian.store",
    source: "Ethiopian.store",
    size: "medium"
  },
  {
    id: "almaz",
    name: "Almaz",
    category: "Ceremony Set",
    href: "/shop",
    image: "/images/source/4k/ethiopian-store-photo-3-4k.jpg",
    alt: "White Habesha outfit sourced from Ethiopian.store",
    source: "Ethiopian.store",
    size: "tall"
  },
  {
    id: "tsion",
    name: "Tsion",
    category: "Custom Sleeve Work",
    href: "/shop",
    image: "/images/source/4k/ethiopian-store-photo-1-4k.jpg",
    alt: "Habesha fashion inspiration sourced from Ethiopian.store",
    source: "Ethiopian.store",
    size: "medium"
  },
  {
    id: "lidet",
    name: "Lidet",
    category: "Bridal Inspiration",
    href: "/shop",
    image: "/images/source/4k/ethiopian-store-photo-2-4k.jpg",
    alt: "Traditional Ethiopian clothing inspiration sourced from Ethiopian.store",
    source: "Ethiopian.store",
    size: "medium"
  }
];
