"use client";

import type { CSSProperties } from "react";
import type {
  PortfolioItem,
  PortfolioSelection,
  PortfolioSystem,
} from "@/data/portfolioData";

import { publicPath } from "@/lib/publicPath";

type InfoPanelProps = {
  selected: PortfolioSelection | null;
  onClose: () => void;
  onSelect: (selection: PortfolioSelection) => void;
};

type SystemItemButtonProps = {
  system: PortfolioSystem;
  item: PortfolioItem;
  onSelect: (selection: PortfolioSelection) => void;
};

type ItemMediaProps = {
  item: PortfolioItem;
};

// abre informacion del planeta
function SystemItemButton({ system, item, onSelect }: SystemItemButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect({ type: "item", system, item })}
    >
      {item.title}
    </button>
  );
}

// muestra recurso multimedia
function ItemMedia({ item }: ItemMediaProps) {
  if (!item.media) return null;

  const mediaElement = item.media.type === "video" ? (
    <video
      className="info-media"
      src={publicPath(item.media.src)}
      poster={item.media.poster ? publicPath(item.media.poster) : undefined}
      controls
    >
      Tu navegador no soporta video HTML5.
    </video>
  ) : (
    <img
      className="info-media"
      src={publicPath(item.media.src)}
      alt={item.media.alt}
    />
  );

  if (!item.media.href) return mediaElement;

  return (
    <a
      className="info-media-link"
      href={publicPath(item.media.href)}
      target={item.media.external ? "_blank" : undefined}
      rel={item.media.external ? "noreferrer" : undefined}
      download={item.media.download ? true : undefined}
      aria-label={`Abrir enlace de ${item.title}`}
    >
      {mediaElement}
    </a>
  );
}

// muestra panel informativo seleccionado
export default function InfoPanel({ selected, onClose, onSelect }: InfoPanelProps) {
  if (!selected) return null;

  if (selected.type === "system") {
    const { system } = selected;

    return (
      <aside
        className="info-panel"
        style={{ "--panel-accent": system.accent } as CSSProperties}
      >
        <button
          className="info-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar panel"
        >
          ×
        </button>

        <p className="info-kicker">{system.subtitle}</p>
        <h2>{system.title}</h2>
        <p>{system.description}</p>

        <div className="info-list">
          {system.items.map((item) => (
            <SystemItemButton
              key={item.id}
              system={system}
              item={item}
              onSelect={onSelect}
            />
          ))}
        </div>
      </aside>
    );
  }

  const { item } = selected;

  return (
    <aside
      className="info-panel"
      style={{ "--panel-accent": item.color } as CSSProperties}
    >
      <button
        className="info-close"
        type="button"
        onClick={onClose}
        aria-label="Cerrar panel"
      >
        ×
      </button>

      <p className="info-kicker">{item.eyebrow}</p>
      <h2>{item.title}</h2>
      <ItemMedia item={item} />
      <p>{item.description}</p>

      {item.details && item.details.length > 0 && (
        <ul className="info-bullets">
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}

      {item.actions && item.actions.length > 0 && (
        <div className="info-actions">
          {item.actions.map((action) => (
            <a
              key={action.label}
              className="info-action"
              href={publicPath(action.href)}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              download={action.download ? true : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}
