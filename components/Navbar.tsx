"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


  function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black rounded-full shadow-2xl text-xl", className)}
      >
        <Menu setActive={setActive}>
            <HoveredLink href="/">
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </HoveredLink>
            <HoveredLink href="/courses">
            <MenuItem setActive={setActive} active={active} item="Service">
            <div className="flex flex-col text-sm space-y-4">
            <HoveredLink href="/courses">
            All Services
            </HoveredLink>
            <HoveredLink href="#">
            Basic
            </HoveredLink>
            <HoveredLink href="#">
            All cources
            </HoveredLink>
            <HoveredLink href="#">
            All cources
            </HoveredLink>
            <HoveredLink href="#">
            All cources
            </HoveredLink>
            </div>
            </MenuItem>
            </HoveredLink>
            <HoveredLink href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
            </HoveredLink>

        </Menu>
      </div>
    )
}
export default Navbar;