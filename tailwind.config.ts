import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addComponents }) => {
      addComponents({
        '.typo-s64-w400': {
          fontSize: '64px',
          fontWeight: '400',
        },
        '.typo-s56-w800': {
          fontSize: '56px',
          fontWeight: '800',
        },
        '.typo-s48-w800': {
          fontSize: '48px',
          fontWeight: '800',
        },
        '.typo-s48-w600': {
          fontSize: '48px',
          fontWeight: '600',
        },
        '.typo-s48-w500': {
          fontSize: '48px',
          fontWeight: '500',
        },
        '.typo-s48-w400': {
          fontSize: '48px',
          fontWeight: '400',
        },
        '.typo-s40-w700': {
          fontSize: '40px',
          fontWeight: '700',
        },
        '.typo-s36-w700': {
          fontSize: '36px',
          fontWeight: '700',
        },
        '.typo-s32-w700': {
          fontSize: '32px',
          fontWeight: '700',
        },
        '.typo-s32-w400': {
          fontSize: '32px',
          fontWeight: '400',
        },
        '.typo-s30-w700': {
          fontSize: '30px',
          fontWeight: '700',
        },
        '.typo-s28-w700': {
          fontSize: '28px',
          fontWeight: '700',
        },
        '.typo-s28-w600': {
          fontSize: '28px',
          fontWeight: '600',
        },
        '.typo-s26-w800': {
          fontSize: '26px',
          fontWeight: '800',
        },
        '.typo-s26-w700': {
          fontSize: '26px',
          fontWeight: '700',
        },
        '.typo-s24-w700': {
          fontSize: '24px',
          fontWeight: '700',
        },
        '.typo-s24-w600': {
          fontSize: '24px',
          fontWeight: '600',
        },
        '.typo-s24-w500': {
          fontSize: '24px',
          fontWeight: '500',
        },
        '.typo-s24-w400': {
          fontSize: '24px',
          fontWeight: '400',
        },
        '.typo-s20-w700': {
          fontSize: '20px',
          fontWeight: '700',
        },
        '.typo-s20-w600': {
          fontSize: '20px',
          fontWeight: '600',
        },
        '.typo-s20-w500': {
          fontSize: '20px',
          fontWeight: '500',
        },
        '.typo-s20-w400': {
          fontSize: '20px',
          fontWeight: '400',
        },
        '.typo-s18-w700': {
          fontSize: '18px',
          fontWeight: '700',
        },
        '.typo-s18-w600': {
          fontSize: '18px',
          fontWeight: '600',
        },
        '.typo-s18-w500': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.typo-s18-w400': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.typo-s16-w700': {
          fontSize: '16px',
          fontWeight: '700',
        },
        '.typo-s16-w600': {
          fontSize: '16px',
          fontWeight: '600',
        },
        '.typo-s16-w500': {
          fontSize: '16px',
          fontWeight: '500',
        },
        '.typo-s16-w400': {
          fontSize: '16px',
          fontWeight: '400',
        },
        '.typo-s15-w700': {
          fontSize: '15px',
          fontWeight: '700',
        },
        '.typo-s14-w700': {
          fontSize: '14px',
          fontWeight: '700',
        },
        '.typo-s14-w600': {
          fontSize: '14px',
          fontWeight: '600',
        },
        '.typo-s14-w500': {
          fontSize: '14px',
          fontWeight: '500',
        },
        '.typo-s14-w400': {
          fontSize: '14px',
          fontWeight: '400',
        },
        '.typo-s13-w600': {
          fontSize: '13px',
          fontWeight: '600',
        },
        '.typo-s13-w500': {
          fontSize: '13px',
          fontWeight: '500',
        },
        '.typo-s13-w400': {
          fontSize: '13px',
          fontWeight: '400',
        },
        '.typo-s12-w700': {
          fontSize: '12px',
          fontWeight: '700',
        },
        '.typo-s12-w600': {
          fontSize: '12px',
          fontWeight: '600',
        },
        '.typo-s12-w500': {
          fontSize: '12px',
          fontWeight: '500',
        },
        '.typo-s12-w400': {
          fontSize: '12px',
          fontWeight: '400',
        },
      })
    }),
  ],
} satisfies Config
