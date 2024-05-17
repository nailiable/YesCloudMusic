import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'smooth',
      'transition-all duration-200 ease-in-out',
    ],
    [
      'btn',
      'px-5 py-2 rounded-md inline-block cursor-pointer outline-none disabled:opacity-50 disabled:cursor-not-allowed',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 hover:opacity-100 hover:text-teal-600 rounded-full',
    ],
    [
      'btn-gray',
      'bg-gray/10 hover:bg-gray/20 active:bg-gray/15',
    ],
    [
      'btn-hover-gray',
      'hover:bg-gray/10 active:bg-gray/15',
    ],
    [
      'btn-primary',
      'bg-red-500 text-white hover:bg-red-500 active:bg-red-500/80 disabled:cursor-default',
    ],
    [
      'btn-hover-primary',
      'hover:bg-red-500 hover:text-white active:text-white active:bg-red-500/80 disabled:cursor-default',
    ],
    [
      'scale',
      'smooth hover:transform-scale-102 active:transform-scale-98',
    ],
    [
      'm-safe',
      'mx5 lg:mx20 md:mx15',
    ],
    [
      'p-safe',
      'px5 lg:px20 md:px15',
    ],
    [
      'title-1',
      'text-4xl font-bold',
    ],
    [
      'title-2',
      'text-3xl font-bold',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
