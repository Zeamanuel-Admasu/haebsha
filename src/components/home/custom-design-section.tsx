import Image from "next/image";
import Link from "next/link";
import { RotatingGarment } from "./rotating-garment";

export function CustomDesignSection() {
  return (
    <section className="section custom-section" aria-labelledby="custom-title">
      <div className="custom-visual image-reveal" data-parallax>
        <Image
          src="/images/source/4k/ethiopian-store-photo-2-4k.jpg"
          alt="Phone, fabric, trim, and measuring tape for a custom Habesha design"
          width={1024}
          height={1536}
          sizes="(max-width: 820px) 92vw, 40vw"
        />
      </div>
      <div className="custom-copy reveal-up">
        <p className="eyebrow">Custom design</p>
        <h2>Send the design you have in mind.</h2>
        <p>
          Share a photo or video. We review the garment, fabric direction, and
          finish, then send your custom price before the next step begins.
        </p>
        <Link href="/custom" className="primary-link">
          Get my price
        </Link>
      </div>
      <RotatingGarment />
    </section>
  );
}
