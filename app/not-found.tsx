import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404 / Lost signal</span><h1>This page is outside the measurement plan.</h1><Link href="/">Return to the portfolio</Link></main>;
}
