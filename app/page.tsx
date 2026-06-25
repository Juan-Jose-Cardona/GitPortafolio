"use client";

import { useState } from "react";
import InfoPanel from "@/components/InfoPanel";
import Navbar from "@/components/Navbar";
import SpaceScene from "@/components/SpaceScene";
import {
  portfolioSystems,
  type PortfolioSelection,
  type PortfolioSystem,
} from "@/data/portfolioData";

// renderiza pagina principal
export default function Page() {
  const [selected, setSelected] = useState<PortfolioSelection | null>(null);

  // selecciona sistema desde navbar
  const selectSystem = (system: PortfolioSystem) => {
    setSelected({ type: "system", system });
  };

  return (
    <main className="portfolio-page">
      <Navbar systems={portfolioSystems} onSelectSystem={selectSystem} />

      <SpaceScene
        systems={portfolioSystems}
        selected={selected}
        onSelect={setSelected}
      />

      <InfoPanel
        selected={selected}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
    </main>
  );
}
