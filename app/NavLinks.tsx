"use client";

import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

type Props = {};

export default function NavLinks({}: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav>
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}
