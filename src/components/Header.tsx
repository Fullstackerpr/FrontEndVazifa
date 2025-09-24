"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "CSR" },
    { href: "/ssr", label: "SSR" },
    { href: "/isr", label: "ISR" },
    { href: "/ssg", label: "SSG" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-2xl font-extrabold">
          Next.js Rendering
        </h1>

        <ul className="flex gap-4 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-3 py-2 rounded-md font-medium text-white transition-colors duration-200
                  hover:bg-white/20
                  ${
                    pathname === link.href
                      ? "bg-white/30 shadow-md"
                      : "bg-transparent"
                  }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 bg-white transition-transform duration-200 ${
                    pathname === link.href
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
