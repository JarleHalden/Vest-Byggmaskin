/**
 * Vest Bygg & Maskin AS - Design System
 * 
 * Design tokens as specified - LOCKED VALUES
 */

export const theme = {
  /**
   * Color System - Exact hex values as specified
   */
  colors: {
    background: "#F7F7F5",
    surface: "#FFFFFF",
    brand: "#F59E0B",
    brandHover: "#D97706",
    textPrimary: "#0F172A",
    textMuted: "#475569",
    borderSubtle: "#E2E8F0",
  },

  /**
   * Spacing Scale (px) - ONLY these values
   */
  spacing: {
    "2xs": 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
  },

  /**
   * Typography System
   */
  typography: {
    h1: {
      fontSize: "48px",
      lineHeight: "1.1",
      fontWeight: 700,
    },
    h2: {
      fontSize: "32px",
      lineHeight: "1.2",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      lineHeight: "1.4",
      fontWeight: 600,
    },
    body: {
      fontSize: "16px",
      lineHeight: "1.6",
      fontWeight: 400,
    },
    small: {
      fontSize: "14px",
      lineHeight: "1.5",
      fontWeight: 400,
    },
  },

  radius: {
    standard: "16px",
    image: "12px",
  },

  measure: "65ch",

  /**
   * Layout Constants
   */
  layout: {
    maxWidth: "1200px",
    horizontalPadding: "24px",
    headerHeight: "72px",
  },
} as const;
