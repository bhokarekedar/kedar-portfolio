import Link from "next/link";
import { SITE_NAME } from "@/constants/site";

import { Container } from "./Container";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/app-support", label: "App Support" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/75 py-8 text-sm text-slate-600">
      <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-1 text-slate-500">Built with Next.js and deployed for fast, searchable pages.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-slate-600 transition-colors hover:text-teal-800">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
