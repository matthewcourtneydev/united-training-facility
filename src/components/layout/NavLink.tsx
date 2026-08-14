"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-semibold uppercase tracking-[0.14em] transition-colors",
        isActive ? "text-white" : "text-neutral-400 hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}