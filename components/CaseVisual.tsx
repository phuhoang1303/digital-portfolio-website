import type { Project } from "@/data/portfolio";

type CaseVisualProps = {
  project: Pick<Project, "title" | "visualType" | "accent" | "surface" | "number">;
  compact?: boolean;
};

const Sparkline = ({ values }: { values: number[] }) => {
  const points = values.map((value, index) => `${index * 24},${72 - value}`).join(" ");
  return (
    <svg viewBox="0 0 120 80" aria-hidden="true">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

export function CaseVisual({ project, compact = false }: CaseVisualProps) {
  return (
    <div
      className={`case-visual case-visual--${project.visualType}${compact ? " case-visual--compact" : ""}`}
      style={{ "--case-accent": project.accent, "--case-surface": project.surface } as React.CSSProperties}
      aria-label={`Editorial placeholder visual for ${project.title}`}
      role="img"
    >
      <div className="case-grid" aria-hidden="true" />
      <span className="visual-index">PH / {project.number}</span>

      {project.visualType === "search" && (
        <>
          <div className="search-window visual-layer visual-layer--one">
            <div className="window-bar"><i /><i /><i /><span>growth query explorer</span></div>
            <div className="search-copy"><small>AI MAX / TEST CELL</small><strong>Find the signal<br />inside the scale.</strong></div>
            <div className="search-chart"><Sparkline values={[18, 33, 29, 46, 54, 61]} /></div>
          </div>
          <div className="metric-ticket visual-layer visual-layer--two"><span>INCREMENTAL</span><b>+24%</b><small>sample</small></div>
        </>
      )}

      {project.visualType === "app" && (
        <>
          <div className="phone phone--left visual-layer visual-layer--one"><i /><span>INSTALL</span><b>01</b><em>Discover</em></div>
          <div className="phone phone--center visual-layer visual-layer--two"><i /><span>VERIFY</span><b>02</b><em>eKYC</em></div>
          <div className="phone phone--right visual-layer visual-layer--three"><i /><span>ACTIVATE</span><b>03</b><em>Grow</em></div>
          <div className="orbit-copy">INSTALL → VERIFY → VALUE</div>
        </>
      )}

      {project.visualType === "commerce" && (
        <>
          <div className="commerce-card visual-layer visual-layer--one"><span>DROP 03</span><div className="product-shape" /><b>ALWAYS ON</b></div>
          <div className="commerce-chart visual-layer visual-layer--two"><small>REVENUE PULSE</small><Sparkline values={[14, 27, 23, 45, 57, 68]} /><strong>4.8×</strong></div>
          <div className="commerce-sticker visual-layer visual-layer--three">MEDIA<br />THAT<br />MOVES</div>
        </>
      )}

      {project.visualType === "lead" && (
        <>
          <div className="lead-poster visual-layer visual-layer--one"><small>QUALIFY THE DEMAND</small><strong>THE RIGHT<br />LEAD, NOT<br />JUST A LEAD.</strong></div>
          <div className="lead-funnel visual-layer visual-layer--two"><span>VIEW</span><span>INTENT</span><span>SQL</span></div>
          <div className="lead-dot visual-layer visual-layer--three">+29%<small>sample quality</small></div>
        </>
      )}

      {project.visualType === "website" && (
        <>
          <div className="browser-frame visual-layer visual-layer--one">
            <div className="window-bar"><i /><i /><i /><span>joystay / find your place</span></div>
            <div className="stay-hero"><small>STAY SOMEWHERE<br />THAT FEELS LIKE YOU</small><div className="stay-door" /></div>
          </div>
          <div className="tracking-map visual-layer visual-layer--two"><b>GA4</b><span>view_item</span><span>select_room</span><span>begin_booking</span></div>
        </>
      )}

      <span className="visual-caption">Purpose-built placeholder · replace with approved campaign asset</span>
    </div>
  );
}
