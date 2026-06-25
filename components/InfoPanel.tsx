"use client";

import type { CSSProperties } from "react";
import type {
  PortfolioItem,
  PortfolioMedia,
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

type PanelMediaProps = {
  media?: PortfolioMedia;
  title: string;
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
function PanelMedia({ media, title }: PanelMediaProps) {
  if (!media) return null;

  const mediaElement = media.type === "video" ? (
    <video
      className="info-media"
      src={publicPath(media.src)}
      poster={media.poster ? publicPath(media.poster) : undefined}
      controls
      preload="metadata"
      playsInline
    >
      Tu navegador no soporta video HTML5.
    </video>
  ) : (
    <img
      className="info-media"
      src={publicPath(media.src)}
      alt={media.alt}
    />
  );

  if (!media.href) return mediaElement;

  return (
    <a
      className="info-media-link"
      href={publicPath(media.href)}
      target={media.external ? "_blank" : undefined}
      rel={media.external ? "noreferrer" : undefined}
      download={media.download ? true : undefined}
      aria-label={`Abrir enlace de ${title}`}
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
        <PanelMedia media={system.media} title={system.title} />

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
      <PanelMedia media={item.media} title={item.title} />
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
