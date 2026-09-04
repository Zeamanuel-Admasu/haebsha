"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Brand3D() {
  const wrapRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(text, {
      transformStyle: "preserve-3d",
      transformPerspective: 900,
      rotateX: 0,
      rotateY: 0,
      z: 0
    });

    const quickX = gsap.quickTo(text, "rotateX", { duration: 0.65, ease: "power3.out" });
    const quickY = gsap.quickTo(text, "rotateY", { duration: 0.65, ease: "power3.out" });
    const quickZ = gsap.quickTo(text, "z", { duration: 0.65, ease: "power3.out" });

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      quickX(y * -6);
      quickY(x * 8);
      quickZ(18);
    };

    const leave = () => {
      quickX(0);
      quickY(0);
      quickZ(0);
    };

    const rotate = () => {
      gsap
        .timeline()
        .to(text, { rotateY: "+=360", duration: 0.95, ease: "power3.inOut" })
        .to(text, { rotateX: 0, rotateY: 0, z: 0, duration: 0.55, ease: "power3.out" });
    };

    wrap.addEventListener("pointermove", move);
    wrap.addEventListener("pointerleave", leave);
    wrap.addEventListener("click", rotate);

    return () => {
      wrap.removeEventListener("pointermove", move);
      wrap.removeEventListener("pointerleave", leave);
      wrap.removeEventListener("click", rotate);
      gsap.killTweensOf(text);
    };
  }, []);

  return (
    <button className="brand-3d" type="button" ref={wrapRef} aria-label="Animate Qesem Habesha Libs branding">
      <span ref={textRef}>
        <span>Qesem</span>
        <span>Habesha Libs</span>
      </span>
    </button>
  );
}
