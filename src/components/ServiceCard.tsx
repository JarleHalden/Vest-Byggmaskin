import type React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  image?: string; // Optional image path
  imageAlt?: string; // Optional alt text for image
  imagePosition?: "top" | "center" | "bottom";
  linkLabel?: string;
  linkHref?: string;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  imageAlt,
  imagePosition = "center",
  linkLabel,
  linkHref,
}: ServiceCardProps) {
  const objectPositionClass =
    imagePosition === "top"
      ? "object-top"
      : imagePosition === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <div className="service-card">
      {/* Title row with icon */}
      <div className="flex items-center justify-between">
        <h3 className="service-card-title">{title}</h3>
        <Icon size={22} style={{ color: "var(--color-text)", flexShrink: 0 }} />
      </div>

      {/* Description */}
      <p className="service-card-description line-clamp-3 body-text">
        {description}
      </p>

      <div className="flex-1" />

      {/* Image or placeholder */}
      <div className="service-card-media">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className={`h-full w-full object-cover ${objectPositionClass}`}
          />
        ) : (
          <span className="small-text" style={{ color: "var(--color-muted)" }}>
            BILDE
          </span>
        )}
      </div>

      {linkLabel && linkHref ? (
        <a
          className="mt-4 text-sm font-semibold"
          href={linkHref}
          style={{ color: "var(--color-brand)" }}
        >
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}
