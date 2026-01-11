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
    background: "#F5F5F5",
    surface: "#FFFFFF",
    accent: "#FEAB24",
    accentHover: "#E89A1F",
    textPrimary: "#0F172A",
    borderSubtle: "#E5E7EB",
    placeholder: "#E0E0E0",
  },

  /**
   * Spacing Scale (px) - ONLY these values
   */
  spacing: {
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
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 600,
    },
    body: {
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 400,
    },
    small: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 400,
    },
  },

  /**
   * Layout Constants
   */
  layout: {
    maxWidth: "1200px",
    horizontalPadding: "24px",
    headerHeight: "72px",
  },
} as const;
