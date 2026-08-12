"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MotionController() {
  useLayoutEffect(() => {
    document.body.classList.remove("route-leaving");
    const context = gsap.context(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set("[data-reveal], [data-stagger] > *", { opacity: 1, y: 0, clearProps: "clipPath" });
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
          node.textContent = node.dataset.display ?? node.dataset.count ?? "";
        });
        return;
      }

      const media = gsap.matchMedia();
      gsap.from("[data-hero-reveal]", { yPercent: 108, opacity: 0, duration: 1.05, stagger: .09, ease: "power4.out", delay: .12 });
      gsap.from("[data-hero-fade]", { opacity: 0, scale: .94, duration: 1.2, ease: "power3.out", delay: .3 });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, { y: 34, opacity: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 86%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, { y: 24, opacity: 0, duration: .65, stagger: .07, ease: "power3.out", scrollTrigger: { trigger: group, start: "top 84%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count ?? 0);
        const decimals = Number.isInteger(target) ? 0 : 1;
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
          onUpdate: () => { node.textContent = `${node.dataset.prefix ?? ""}${state.value.toFixed(decimals)}${node.dataset.suffix ?? ""}`; },
          onComplete: () => { node.textContent = node.dataset.display ?? node.textContent; },
        });
      });

      media.add("(min-width: 521px)", () => {
        gsap.fromTo("[data-process-fill]", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", ease: "none", scrollTrigger: { trigger: "#about", start: "top 72%", end: "bottom 55%", scrub: .6 } });
      });
      media.add("(max-width: 520px)", () => {
        gsap.fromTo("[data-process-fill]", { scaleY: 0 }, { scaleY: 1, transformOrigin: "top center", ease: "none", scrollTrigger: { trigger: "#about", start: "top 72%", end: "bottom 55%", scrub: .6 } });
      });
      gsap.fromTo("[data-timeline-fill]", { scaleY: 0 }, { scaleY: 1, transformOrigin: "top center", ease: "none", scrollTrigger: { trigger: "#experience", start: "top 68%", end: "bottom 70%", scrub: .6 } });

      media.add("(min-width: 768px)", () => {
        const shells = gsap.utils.toArray<HTMLElement>(".stack-shell");
        shells.slice(0, -1).forEach((shell, index) => {
          if (shell.classList.contains("stack-shell--work")) return;
          const next = shells[index + 1];
          const card = shell.querySelector<HTMLElement>(":scope > .section-card");
          if (!card || !next) return;
          gsap.to(card, { scale: .965, opacity: .76, filter: "brightness(.72)", ease: "none", scrollTrigger: { trigger: next, start: "top bottom", end: "top 3%", scrub: .55 } });
        });

        const panels = gsap.utils.toArray<HTMLElement>(".project-panel");
        panels.slice(0, -1).forEach((panel, index) => {
          gsap.to(panel, { scale: .972, opacity: .82, filter: "brightness(.78)", ease: "none", scrollTrigger: { trigger: panels[index + 1], start: "top bottom", end: "top 3%", scrub: .55 } });
        });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((layer) => {
          gsap.fromTo(layer, { yPercent: -4 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: layer.closest("section") ?? layer, start: "top bottom", end: "bottom top", scrub: .8 } });
        });
        gsap.fromTo(".contact-card", { scale: .94, borderRadius: 44 }, { scale: 1, borderRadius: 22, ease: "none", scrollTrigger: { trigger: ".stack-shell--contact", start: "top bottom", end: "top 8%", scrub: .55 } });
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => {
      window.clearTimeout(refresh);
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div className="route-curtain" aria-hidden="true"><span>PH / PERFORMANCE</span></div>;
}
