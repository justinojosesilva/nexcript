/**
 * Nexcript Design Tokens
 * Definição centralizada de cores, espaçamento, tipografia e outros tokens de design
 * Dark-first theme com Electric Purple como cor primária
 */

export const nexcriptTokens = {
  // Brand Colors - Nexcript Approved
  brand: {
    primary: '#7C3AED',      // Electric Purple
    success: '#10B981',      // Emerald Logic
    warning: '#F59E0B',      // Amber Alert
    error: '#EF4444',        // Deep Red
  },
  background: {
    base: '#0D0D0D',        // Deep Obsidian
    surface: '#141414',     // Obsidian Surface
    card: '#1C1C1C',        // Elevated Obsidian
  },
  text: {
    primary: '#F5F5F4',     // Main White
    secondary: '#A8A29E',   // Muted Stone
    muted: '#57534E',       // Dark Stone
  },
  border: {
    subtle: 'rgba(124, 58, 237, 0.1)',  // Purple Glow
    default: '#2A2A2A',                 // Technical Gray
  },
} as const

export const nexcriptTokensWithScales = {
  // Core Brand Colors
  colors: {
    // Primary - Electric Purple
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2d1b4e',
    },
    // Semantic - Emerald (Success)
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      900: '#065f46',
    },
    // Semantic - Amber (Warning)
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      900: '#78350f',
    },
    // Semantic - Red (Error)
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      900: '#7f1d1d',
    },
    // Neutral - Grayscale
    neutral: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0d0d0d',
    },
  },

  // Spacing (Bootstrap-like 8px base unit)
  spacing: {
    '0': '0',
    '1': '0.25rem', // 4px
    '2': '0.5rem', // 8px
    '3': '0.75rem', // 12px
    '4': '1rem', // 16px
    '5': '1.25rem', // 20px
    '6': '1.5rem', // 24px
    '8': '2rem', // 32px
    '10': '2.5rem', // 40px
    '12': '3rem', // 48px
    '16': '4rem', // 64px
    '20': '5rem', // 80px
    '24': '6rem', // 96px
    '32': '8rem', // 128px
  },

  // Typography
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
    base: ['1rem', { lineHeight: '1.5rem' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }], // 48px
  },

  fontFamily: {
    // Brand font - Geometric and modern
    syne: 'var(--font-syne), system-ui, sans-serif',
    // Content font - Highly legible
    dmSans: 'var(--font-dm-sans), system-ui, sans-serif',
    // Code font
    jetbrainsMono: 'var(--font-jetbrains-mono), monospace',
    // Fallback
    sans: 'system-ui, -apple-system, sans-serif',
    mono: 'monospace',
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  // Shadows
  boxShadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  // Breakpoints (mobile-first)
  screens: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    hide: '-1',
    base: '0',
    dropdown: '10',
    sticky: '20',
    fixed: '30',
    backdrop: '40',
    modal: '50',
    popover: '60',
    tooltip: '70',
  },

  // Duration for transitions
  transitionDuration: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
} as const;

export type NexcriptTokens = typeof nexcriptTokens;
