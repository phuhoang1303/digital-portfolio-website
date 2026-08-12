import { ArrowDown, ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { CapabilitiesList, MagneticLink, PortraitPlaceholder } from "@/components/Interactive";
import { CaseVisual } from "@/components/CaseVisual";
import { MotionController } from "@/components/MotionController";
import { TransitionLink } from "@/components/TransitionLink";
import { experience, performanceResults, projects, siteContent } from "@/data/portfolio";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><p>{children}</p></div>;
}

function SiteNav() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Phu Hoang, back to top">PH<span>.</span></a>
      <nav>
        <a href="#work">Work</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href={`mailto:${siteContent.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="stack-shell stack-shell--hero" id="top">
      <section className="section-card hero-card" aria-labelledby="hero-title">
        <div className="outline-marquee" aria-hidden="true"><span>PERFORMANCE / STRATEGY / MEASUREMENT / GROWTH / </span><span>PERFORMANCE / STRATEGY / MEASUREMENT / GROWTH / </span></div>
        <div className="hero-status" data-hero-reveal><i />{siteContent.status}</div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-mask"><span data-hero-reveal>Digital performance marketer · Vietnam / SEA</span></p>
            <h1 id="hero-title" aria-label="Phu Hoang, Digital Performance Marketer">
              <span className="hero-line hero-mask"><span data-hero-reveal>PHU</span></span>
              <span className="hero-line hero-line--indent hero-mask"><span data-hero-reveal>HOANG</span></span>
              <span className="hero-role hero-mask"><span data-hero-reveal>DIGITAL PERFORMANCE</span></span>
              <span className="hero-role hero-role--solid hero-mask"><span data-hero-reveal>MARKETER</span></span>
            </h1>
            <div className="hero-bottom" data-hero-reveal>
              <p>{siteContent.positioning}</p>
              <a className="text-link" href="#work">View selected work <ArrowDown size={18} /></a>
            </div>
          </div>
          <PortraitPlaceholder />
        </div>
        <div className="tool-ribbon" data-stagger aria-label="Platforms and expertise">
          {siteContent.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="stack-shell" id="about">
      <section className="section-card about-card" aria-labelledby="about-title">
        <SectionLabel number="01">About / Expertise</SectionLabel>
        <div className="about-grid">
          <h2 id="about-title" data-reveal>Built for the space between <em>media</em> and <em>meaning.</em></h2>
          <div className="about-copy">
            <p data-reveal>{siteContent.intro}</p>
            <div className="about-meta" data-stagger>
              <div><small>Markets</small>{siteContent.markets.map((market) => <span key={market}>{market}</span>)}</div>
              <div><small>Core focus</small><span>Acquisition</span><span>Measurement</span><span>Growth systems</span></div>
            </div>
          </div>
        </div>
        <div className="expertise-block">
          <p className="eyebrow">Areas of expertise</p>
          <div className="expertise-tags" data-stagger>{siteContent.expertise.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="process" aria-label="Marketing journey" data-reveal>
          <div className="process-line"><i data-process-fill /></div>
          {siteContent.process.map((step, index) => <div className="process-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}
        </div>
      </section>
    </div>
  );
}

function ProjectPanel({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="project-panel" style={{ "--project-index": index, "--project-accent": project.accent } as React.CSSProperties}>
      <TransitionLink href={`/projects/${project.slug}`} className="project-link" aria-label={`Open case study: ${project.title}`}>
        <div className="project-copy">
          <div className="project-topline"><span>{project.number} / 05</span><span>{project.industry}</span></div>
          <h3>{project.title}</h3>
          <p>{project.objective}</p>
          <div className="project-meta"><span>{project.brand}</span><span>{project.role}</span></div>
          <div className="project-channels">{project.channels.map((channel) => <span key={channel}>{channel}</span>)}</div>
          <div className="project-results">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label}><b data-count={metric.value} data-prefix={metric.prefix ?? ""} data-suffix={metric.suffix ?? ""} data-display={`${metric.prefix ?? ""}${metric.value}${metric.suffix ?? ""}`}>0</b><span>{metric.label}<small>Sample</small></span></div>
            ))}
          </div>
          <span className="project-open">Explore case <ArrowUpRight size={19} /></span>
        </div>
        <div className="project-art" data-parallax><CaseVisual project={project} /></div>
      </TransitionLink>
    </article>
  );
}

function WorkSection() {
  return (
    <div className="stack-shell stack-shell--work" id="work">
      <section className="section-card work-card" aria-labelledby="work-title">
        <div className="work-intro">
          <SectionLabel number="02">Selected Work</SectionLabel>
          <h2 id="work-title" data-reveal>Performance stories, told with <em>evidence.</em></h2>
          <p data-reveal>Five editable sample case structures. Results are clearly marked as illustrative until verified campaign data is supplied.</p>
        </div>
        <div className="projects-stack">
          {projects.map((project, index) => <ProjectPanel project={project} index={index} key={project.slug} />)}
        </div>
      </section>
    </div>
  );
}

function CapabilitiesSection() {
  return (
    <div className="stack-shell" id="capabilities">
      <section className="section-card capabilities-card" aria-labelledby="capabilities-title">
        <div className="capabilities-heading">
          <SectionLabel number="03">Capabilities</SectionLabel>
          <h2 id="capabilities-title" data-reveal>How media becomes <em>momentum.</em></h2>
          <p data-reveal>Hover to preview on desktop. Tap a row to expand its supporting thought on touch devices.</p>
        </div>
        <CapabilitiesList />
      </section>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="stack-shell" id="experience">
      <section className="section-card experience-card" aria-labelledby="experience-title">
        <div className="experience-header">
          <SectionLabel number="04">Experience</SectionLabel>
          <h2 id="experience-title" data-reveal>Experience built around <em>accountability.</em></h2>
          <p data-reveal>Role chronology and employer details are intentionally held as editable placeholders until Phu&apos;s approved CV is supplied.</p>
        </div>
        <div className="timeline">
          <div className="timeline-track"><i data-timeline-fill /></div>
          {experience.map((item, index) => (
            <article className="experience-row" key={item.period} data-reveal>
              <div className="timeline-dot"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="experience-role"><small>{item.period}</small><h3>{item.role}</h3><span>{item.company}</span></div>
              <p>{item.summary}</p>
              <div className="experience-context"><span>{item.context}</span><strong>{item.preview}</strong></div>
            </article>
          ))}
        </div>
        <div className="platform-cloud" data-stagger>
          {siteContent.tools.slice(0, 6).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>
    </div>
  );
}

function PerformanceSection() {
  return (
    <div className="stack-shell" id="performance">
      <section className="section-card performance-card" aria-labelledby="performance-title">
        <div className="performance-heading">
          <SectionLabel number="05">Performance / Results</SectionLabel>
          <h2 id="performance-title" data-reveal>The numbers matter.<br /><em>The reason behind them matters more.</em></h2>
        </div>
        <div className="result-grid" data-stagger>
          {performanceResults.map((result) => (
            <article className="result-card" key={result.label}>
              <div className="result-title"><span>{result.label}</span><small>{result.delta}</small></div>
              <strong data-count={result.value} data-prefix={result.prefix ?? ""} data-suffix={result.suffix ?? ""} data-display={`${result.prefix ?? ""}${result.value}${result.suffix ?? ""}`}>0</strong>
              <div className="micro-bars" aria-hidden="true">{result.bars.map((bar, index) => <i style={{ height: `${bar}%` }} key={index} />)}</div>
              <p>{result.context}</p>
              <small className="sample-label">Illustrative placeholder metric</small>
            </article>
          ))}
        </div>
        <div className="allocation" data-reveal>
          <div className="allocation-copy"><span>Sample budget allocation</span><h3>Invest by <em>marginal opportunity,</em> not habit.</h3><p>A planning example that balances demand capture, demand creation, experimentation, and measurement.</p></div>
          <div className="allocation-chart" aria-label="Illustrative budget allocation: capture 42%, create 33%, test 15%, measure 10%"><div className="donut"><span>100<small>%</small></span></div><ul><li><i />Capture <b>42%</b></li><li><i />Create <b>33%</b></li><li><i />Test <b>15%</b></li><li><i />Measure <b>10%</b></li></ul></div>
        </div>
      </section>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="stack-shell stack-shell--contact" id="contact">
      <section className="section-card contact-card" aria-labelledby="contact-title">
        <div className="contact-top"><SectionLabel number="06">Contact</SectionLabel><span>{siteContent.status}</span></div>
        <h2 id="contact-title" data-reveal>LET&apos;S TURN MEDIA INTO <em>MEASURABLE GROWTH.</em></h2>
        <div className="contact-actions" data-stagger>
          <MagneticLink href={`mailto:${siteContent.email}?subject=Performance%20marketing%20opportunity`} className="contact-primary"><span>Start a conversation</span><ArrowUpRight /></MagneticLink>
          <a href={`mailto:${siteContent.email}`}><Mail size={18} /><span>Email<small>{siteContent.email} · placeholder</small></span></a>
          <a href={siteContent.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /><span>LinkedIn<small>Profile URL to be supplied</small></span></a>
          <a href="/phu-hoang-cv-placeholder.txt" download="Phu-Hoang-CV-placeholder.txt"><Download size={18} /><span>Download CV<small>Placeholder file</small></span></a>
        </div>
        <footer><span>Phu Hoang / Digital Performance Marketer</span><span>Strategy · Media · Measurement · Growth</span><a href="#top">Back to top <ArrowRight size={15} /></a></footer>
      </section>
    </div>
  );
}

export function PortfolioHome() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <MotionController />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <PerformanceSection />
        <ContactSection />
      </main>
    </>
  );
}
