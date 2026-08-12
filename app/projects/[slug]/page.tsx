import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseVisual } from "@/components/CaseVisual";
import { TransitionLink } from "@/components/TransitionLink";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.objective } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="case-page" style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <header className="case-nav">
        <TransitionLink href="/#work"><ArrowLeft size={17} /> All work</TransitionLink>
        <span>PH / {project.number}</span>
        <a href="mailto:phu.hoang@example.com">Discuss a project <ArrowUpRight size={16} /></a>
      </header>

      <article>
        <section className="case-hero">
          <div className="case-kicker"><span>{project.number} / 05</span><span>{project.industry}</span><span>Sample case structure</span></div>
          <h1>{project.title}</h1>
          <div className="case-intro"><p>{project.objective}</p><span>{project.brand}</span></div>
        </section>

        <section className="case-visual-large"><CaseVisual project={project} /></section>

        <section className="case-narrative">
          <div><span>01 / Challenge</span><h2>The constraint</h2><p>{project.challenge}</p></div>
          <div><span>02 / Strategy</span><h2>The response</h2><p>{project.strategy}</p></div>
          <aside><span>Role</span><p>{project.role}</p><span>Channels</span><ul>{project.channels.map((channel) => <li key={channel}>{channel}</li>)}</ul></aside>
        </section>

        <section className="case-metrics">
          <div className="case-metrics-heading"><span>03 / Key results</span><h2>A result framework ready for <em>verified data.</em></h2><p>Every value below is illustrative and must be replaced with approved, non-confidential reporting before publication.</p></div>
          <div className="case-metric-grid">
            {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.prefix}{metric.value}{metric.suffix}</strong><span>{metric.label}</span><small>{metric.note}</small></div>)}
          </div>
        </section>

        <section className="case-method">
          <span>Working principle</span>
          <blockquote>“Optimize the decision system—not only the campaign sitting inside it.”</blockquote>
          <div className="method-flow"><span>Signal</span><i /><span>Hypothesis</span><i /><span>Test</span><i /><span>Learning</span><i /><span>Scale</span></div>
        </section>
      </article>

      <footer className="next-case">
        <span>Next case study</span>
        <TransitionLink href={`/projects/${nextProject.slug}`}><strong>{nextProject.title}</strong><ArrowRight /></TransitionLink>
        <small>All case content and metrics remain editable in data/portfolio.ts.</small>
      </footer>
    </main>
  );
}
