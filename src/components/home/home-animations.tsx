"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-copy .eyebrow", { y: 18, opacity: 0, duration: 0.7 })
        .from(".brand-3d", { y: 28, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".hero-actions a", { y: 14, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.25")
        .from(".hero-image-wrap img", { scale: 1.06, opacity: 0, duration: 1.15 }, "-=0.9");

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((item) => {
        gsap.from(item, {
          y: 36,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 82%" }
        });
      });

      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((item) => {
        gsap.from(item, {
          clipPath: "inset(12% 0 12% 0)",
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 84%" }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
        gsap.to(item, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        });
      });

      gsap.from(".process-step", {
        y: 34,
        opacity: 0,
        stagger: 0.16,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".process-list", start: "top 80%" }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
