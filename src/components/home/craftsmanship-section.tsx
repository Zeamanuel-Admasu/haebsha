import Image from "next/image";

export function CraftsmanshipSection() {
  return (
    <section className="section craft-section" aria-labelledby="craft-title">
      <div className="craft-image image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-3-4k.jpg"
          alt="Artisan hands arranging embroidered Habesha fabric"
          width={1536}
          height={1024}
          sizes="(max-width: 860px) 92vw, 54vw"
        />
      </div>
      <div className="craft-copy reveal-up">
        <p className="eyebrow">Made with intention</p>
        <h2 id="craft-title">
          Crafted through Ethiopian tradition, made individually for you.
        </h2>
      </div>
    </section>
  );
}
