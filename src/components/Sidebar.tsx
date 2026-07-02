"use client";

import Link from "next/link";
import {
  Home,
  Bookmark,
  Code2,
  FileText,
  BookOpen,
  TrendingUp,
  Info,
  Sparkles,
  Flame,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/practice", label: "Practice", icon: Code2 },
  { href: "/resources", label: "Resources", icon: FileText },
  { href: "/roadmap", label: "Roadmap", icon: BookOpen },
];

type SidebarProps = {
  active: string;
  /** Which promo card to show at the bottom of the sidebar */
  promo?: "learning" | "practicing";
};

export default function Sidebar({ active, promo = "learning" }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col justify-between border-r border-gray-100 bg-white px-4 py-6">
      <div>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-2 mb-8">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-lg">
            M
          </span>
          <span className="text-[15px] font-semibold text-gray-900">
            ML Pathway
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = label === active;
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-brand/10 text-brand font-medium"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                <Icon size={18} strokeWidth={2} />
                {label}
              </Link>
            );
          })}

          <div className="my-3 h-px bg-gray-100" />

          <Link
            href="/about"
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              active === "About"
                ? "bg-brand/10 text-brand font-medium"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
          </Link>
        </nav>
      </div>

      {/* Bottom promo card */}
      {promo === "learning" ? (
        <div className="rounded-xl bg-brand/[0.06] p-4">
          <Sparkles size={18} className="text-brand mb-2" strokeWidth={2} />
          <p className="text-sm font-semibold text-gray-900">
            Focus on learning.
          </p>
          <p className="text-sm text-gray-500">We&apos;ll guide the way.</p>
        </div>
      ) : (
        <div className="rounded-xl bg-brand/[0.06] p-4">
          <Sparkles size={18} className="text-brand mb-2" strokeWidth={2} />
          <p className="text-sm font-semibold text-gray-900">
            Keep practicing!
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Consistency builds real skills.
          </p>
        </div>
      )}
    </aside>
  );
}
