import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlaskConical, Menu, X, Users } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/chemistry", label: "01 Chemistry" },
    { to: "/procedure", label: "02 Procedure" },
    { to: "/diagrams", label: "03 Diagrams" },
    { to: "/video", label: "04 Video" },
    { to: "/applications", label: "05 Applications" },
    { to: "/quiz", label: "06 AI Quiz" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <FlaskConical className="h-5 w-5" />
          </div>
          <span>PureHands Lab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Team shortcut & mobile button */}
        <div className="flex items-center gap-2">
          <a
            href="/#team"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/50 transition"
          >
            <Users className="h-3.5 w-3.5 text-primary" />
            <span>Team Details</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card/95 px-4 py-4 md:hidden backdrop-blur-lg">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/#team"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-xl border border-border/80 px-4 py-2 text-sm font-medium text-primary hover:bg-secondary"
            >
              <Users className="h-4 w-4" />
              <span>Team Members (Nidhi &amp; Shruti)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Navbar;

