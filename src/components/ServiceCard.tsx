import type React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  image?: string; // Optional image path
  imageAlt?: string; // Optional alt text for image
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div
      className="rounded-xl shadow-sm transition-transform hover:-translate-y-1"
      style={{
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        backgroundColor: "#FFFFFF",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      {/* Title row with icon */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className="font-semibold"
          style={{
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: 600,
            color: "#0F172A",
          }}
        >
          {title}
        </h3>
        <Icon
          size={22}
          style={{ color: "#0F172A", flexShrink: 0 }}
        />
      </div>

      {/* Description */}
      <p
        className="mb-4"
        style={{
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: 400,
          color: "#0F172A",
        }}
      >
        {description}
      </p>

      {/* Image or placeholder */}
      <div
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: image ? "transparent" : "#E0E0E0",
          borderRadius: "8px",
          aspectRatio: "4/3",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
            style={{ borderRadius: "8px" }}
          />
        ) : (
          <span
            style={{
              fontSize: "14px",
              color: "#9CA3AF",
              fontWeight: 400,
            }}
          >
            BILDE
          </span>
        )}
      </div>
    </div>
  );
}
