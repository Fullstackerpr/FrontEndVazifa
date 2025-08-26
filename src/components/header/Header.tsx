"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#1c144b] py-4 flex justify-around items-center text-white text-lg">
      <h2 className="font-bold text-xl">NextJs</h2>
      <div className="flex gap-6">
        <Link
          href="/"
          className={pathname === "/" ? "text-red-400 underline" : ""}
        >
          Home
        </Link>
        <Link
          href="/user"
          className={pathname === "/user" ? "text-red-400 underline" : ""}
        >
          User
        </Link>
        <Link
          href="/product"
          className={pathname === "/product" ? "text-red-400 underline" : ""}
        >
          Product
        </Link>
        <Link
          href="/food"
          className={pathname === "/food" ? "text-red-400 underline" : ""}
        >
          Food
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
