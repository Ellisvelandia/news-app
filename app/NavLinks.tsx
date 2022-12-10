import React from "react";
import { categories } from "../constants";
import NavLink from "./NavLink";

type Props = {};

export default function NavLinks({}: Props) {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
}
