"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioSystem } from "@/data/portfolioData";

type NavbarProps = {
  systems: PortfolioSystem[];
  onSelectSystem: (system: PortfolioSystem) => void;
};

export default function Navbar({ systems, onSelectSystem }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (system: PortfolioSystem) => {
    onSelectSystem(system);
    setOpen(false);

    document.getElementById(system.id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <nav className="navbar">
      <a className="brand" href="#top" aria-label="Ir al inicio">
        <Image
          src="/project-media/Icon.svg"
          alt="Logo del portafolio"
          width={38}
          height={38}
          className="brand-mark"
          priority
        />
        <span>Sistema Portafolio</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Abrir menu"
      >
        Menu
      </button>

      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {systems.map((system) => (
          <button key={system.id} type="button" onClick={() => handleSelect(system)}>
            {system.title}
          </button>
        ))}

        <a href="./cv.pdf" download>
          Hoja de Vida
        </a>
      </div>
    </nav>
  );
}
