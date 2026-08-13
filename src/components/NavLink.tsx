"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === (typeof href === "string" ? href : href.pathname);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
