"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

import { Container } from "./Container";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/apps", label: "Android Apps" },
] as const;

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <Link
            href="/"
            className="group inline-flex min-w-0 items-center gap-3 rounded-md text-sm font-bold text-slate-950 outline-offset-4"
            aria-label={`${SITE_NAME} home`}
            onClick={() => setIsOpen(false)}
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-slate-950 text-sm font-black text-white shadow-sm transition-colors group-hover:bg-teal-700">
              KB
            </span>
            <span className="truncate text-base">{SITE_NAME}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-slate-100 hover:text-slate-950",
                    active ? "bg-teal-50 text-teal-800" : "text-slate-600",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center md:flex">
            <Link
              href="/contact"
              aria-current={isActivePath(pathname, "/contact") ? "page" : undefined}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-bold shadow-sm transition-colors",
                isActivePath(pathname, "/contact")
                  ? "bg-teal-800 text-white"
                  : "bg-slate-950 text-white hover:bg-teal-800",
              )}
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
            <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-current transition-transform",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span className={cn("h-0.5 w-5 rounded-full bg-current transition-opacity", isOpen && "opacity-0")} />
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-current transition-transform",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-200 md:hidden",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 border-t border-slate-200/80 py-3" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-semibold transition-colors",
                      active ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                aria-current={isActivePath(pathname, "/contact") ? "page" : undefined}
                className="mt-2 rounded-md bg-slate-950 px-3 py-3 text-center text-base font-bold text-white transition-colors hover:bg-teal-800"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
