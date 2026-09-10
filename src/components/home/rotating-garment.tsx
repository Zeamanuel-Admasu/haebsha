"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/lib/language";

export function RotatingGarment() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(image, {
      transformStyle: "preserve-3d",
      transformPerspective: 1100,
      rotateY: -8,
      rotateX: 3
    });

    const tiltX = gsap.quickTo(image, "rotateX", { duration: 0.55, ease: "power3.out" });
    const tiltY = gsap.quickTo(image, "rotateY", { duration: 0.55, ease: "power3.out" });

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tiltX(y * -9);
      tiltY(x * 16);
    };

    const spin = () => {
      gsap
        .timeline()
        .to(image, { rotateY: "+=360", duration: 1.15, ease: "power3.inOut" })
        .to(image, { rotateX: 3, rotateY: -8, duration: 0.55, ease: "power3.out" });
    };

    const leave = () => {
      tiltX(3);
      tiltY(-8);
    };

    card.addEventListener("pointermove", move);
    card.addEventListener("pointerenter", spin);
    card.addEventListener("click", spin);
    card.addEventListener("pointerleave", leave);

    return () => {
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerenter", spin);
      card.removeEventListener("click", spin);
      card.removeEventListener("pointerleave", leave);
      gsap.killTweensOf(image);
    };
  }, []);

  return (
    <div className="rotating-garment" ref={cardRef}>
      <div className="rotating-garment-image" ref={imageRef}>
        <span className="garment-depth-stack" aria-hidden="true">
          <Image
            src="/images/source/4k/habesha-garment-cutout-transparent-4k.png"
            alt=""
            width={2556}
            height={3840}
            sizes="(max-width: 820px) 82vw, 28vw"
            className="garment-depth depth-one"
          />
          <Image
            src="/images/source/4k/habesha-garment-cutout-transparent-4k.png"
            alt=""
            width={2556}
            height={3840}
            sizes="(max-width: 820px) 82vw, 28vw"
            className="garment-depth depth-two"
          />
          <Image
            src="/images/source/4k/habesha-garment-cutout-transparent-4k.png"
            alt=""
            width={2556}
            height={3840}
            sizes="(max-width: 820px) 82vw, 28vw"
            className="garment-depth depth-three"
          />
        </span>
        <Image
          src="/images/source/4k/habesha-garment-cutout-transparent-4k.png"
          alt={t("garment.alt")}
          width={2556}
          height={3840}
          className="garment-face"
          sizes="(max-width: 820px) 82vw, 28vw"
        />
      </div>
      <p>{t("garment.hint")}</p>
    </div>
  );
}
