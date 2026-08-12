"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { capabilities, projects } from "@/data/portfolio";
import { CaseVisual } from "@/components/CaseVisual";

export function PortraitPlaceholder() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--portrait-x", `${x * 9}px`);
    ref.current.style.setProperty("--portrait-y", `${y * 7}px`);
  };

  const reset = () => {
    ref.current?.style.setProperty("--portrait-x", "0px");
    ref.current?.style.setProperty("--portrait-y", "0px");
  };

  return (
    <div className="portrait-frame" ref={ref} onMouseMove={move} onMouseLeave={reset} data-hero-fade>
      <div className="portrait-halo" />
      <div className="portrait-editorial-copy">PHU<br />HOANG</div>
      <div className="portrait-silhouette">
        <div className="portrait-head"><span className="portrait-hair" /><i className="portrait-ear portrait-ear--left" /><i className="portrait-ear portrait-ear--right" /></div>
        <div className="portrait-neck" />
        <div className="portrait-body" />
      </div>
      <span className="portrait-note">Portrait placeholder / 1600 × 2000</span>
    </div>
  );
}

export function CapabilitiesList() {
  const [active, setActive] = useState<number | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div className="capabilities-list" onMouseMove={move} onMouseLeave={() => setActive(null)} data-stagger>
      {capabilities.map((capability, index) => (
        <button
          className={`capability-row${active === index ? " is-active" : ""}`}
          key={capability.title}
          type="button"
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(active === index ? null : index)}
          aria-expanded={active === index}
        >
          <span className="capability-number">0{index + 1}</span>
          <span className="capability-main"><strong>{capability.title}</strong><span>{capability.copy}</span></span>
          <ArrowUpRight aria-hidden="true" />
        </button>
      ))}
      {active !== null && (
        <div className="capability-preview" style={{ left: position.x, top: position.y }} aria-hidden="true">
          <CaseVisual project={projects[capabilities[active].project]} compact />
        </div>
      )}
    </div>
  );
}

export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return <a ref={ref} href={href} className={className} onMouseMove={move} onMouseLeave={reset}>{children}</a>;
}
