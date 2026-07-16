import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [{ href: "/", label: "Overview" }];

export function Nav() {
  return (
    <header className="border-b border-brand-panel-alt bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden gap-8 text-sm text-brand-slate md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="primary">Get Started</Button>
      </div>
    </header>
  );
}
