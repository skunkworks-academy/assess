import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skunkworks Academy Assessments',
  tagline: 'Practical assessments, readiness reviews, and development roadmaps.',
  favicon: 'images/favicon-black.png',

  url: 'https://assess.skunkworksacademy.com',
  baseUrl: '/',
  organizationName: 'skunkworks-academy',
  projectName: 'assess',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#03033A'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'publisher', content: 'Skunkworks Academy'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'shortcut icon', type: 'image/png', href: '/images/favicon-black.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-black.png', media: '(prefers-color-scheme: light)'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-white.png', media: '(prefers-color-scheme: dark)'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/images/favicon-black.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/site.webmanifest'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'stylesheet', href: 'https://www.skunkworksacademy.com/assets/skunkworks-design-system.css?v=2026.09.08.3', 'data-skunkworks-design-system': 'canonical'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'stylesheet', href: 'https://www.skunkworksacademy.com/assets/academy-brand-theme.css?v=2026.09.08.3', 'data-skunkworks-brand-theme': 'canonical'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'stylesheet', href: 'https://www.skunkworksacademy.com/assets/academy-theme-conformance.css?v=2026.09.08.3', 'data-skunkworks-theme-conformance': 'canonical'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'stylesheet', href: 'https://www.skunkworksacademy.com/assets/skunkworks-accessibility.css?v=2026.08.16.1', 'data-skunkworks-accessibility': 'wcag-contrast'},
    },
    {
      tagName: 'script',
      attributes: {defer: true, src: 'https://www.skunkworksacademy.com/assets/skunkworks-ui.js?v=2026.09.08.3', 'data-skunkworks-ui': 'canonical'},
    },
    {
      tagName: 'script',
      attributes: {defer: true, src: 'https://www.skunkworksacademy.com/assets/skunkworks-footer.js?v=2026.09.08.4', 'data-skunkworks-global-footer': 'canonical'},
    },
    {
      tagName: 'script',
      attributes: {defer: true, src: 'https://www.skunkworksacademy.com/assets/academy-navigation-v11.js?v=2026.09.08.3', 'data-skunkworks-global-nav-runtime': 'v11'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Skunkworks Academy Assessments',
        alternateName: 'Skunkworks Academy Assess',
        url: 'https://assess.skunkworksacademy.com/',
        publisher: {
          '@type': 'EducationalOrganization',
          name: 'Skunkworks Academy',
          url: 'https://www.skunkworksacademy.com/',
          logo: 'https://assess.skunkworksacademy.com/images/favicon-black.png',
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/skunkworks-academy/assess/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Assess',
      logo: {
        alt: 'Skunkworks Academy',
        src: 'images/favicon-black.png',
        srcDark: 'images/favicon-white.png',
      },
      items: [
        {to: '/', label: 'Assessments', position: 'left'},
        {type: 'docSidebar', sidebarId: 'idrSidebar', position: 'left', label: 'IDR guide'},
        {to: '/docs/individual-plans', label: 'Participant portal', position: 'left'},
        {to: '/docs/resource-library', label: 'Resources', position: 'left'},
        {href: 'https://github.com/skunkworks-academy/assess', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Assess',
          items: [
            {label: 'Assessment pathways', to: '/'},
            {label: 'Getting started', to: '/docs/intro'},
            {label: 'Resource library', to: '/docs/resource-library'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'Skunkworks Academy', href: 'https://skunkworksacademy.com'},
            {label: 'Repository', href: 'https://github.com/skunkworks-academy/assess'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skunkworks Academy. Assess with purpose. Develop with evidence.`,
    },
    prism: {
      theme: {plain: {color: '#172033', backgroundColor: '#f8fafc'}, styles: []},
      darkTheme: {plain: {color: '#f8fafc', backgroundColor: '#172033'}, styles: []},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
