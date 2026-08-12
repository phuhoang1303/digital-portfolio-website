"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function TransitionLink({ href, onClick, children, ...props }: Props) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    document.body.classList.add("route-leaving");
    window.setTimeout(() => router.push(String(href)), 440);
  };

  return <Link href={href} onClick={handleClick} {...props}>{children}</Link>;
}
