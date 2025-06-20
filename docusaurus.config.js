// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'BrewBuddy API Docs',
  tagline: 'Documentation for the BrewBuddy Automatic Coffee Maker Machine',
  favicon: 'img/favicon.ico',

  url: 'https://mangesh2m.github.io', // 🔁 Replace with your actual site URL
  baseUrl: '/api-docu-site/',

  organizationName: 'mangesh2m', // Your GitHub username/org
  projectName: 'api-docu-site',  // Your GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // 👉 Makes docs the homepage
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // ❌ Disables blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',       // 🌙 Dark mode by default
        disableSwitch: false,      // Let user switch modes
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'BrewBuddy API',
        logo: {
          alt: 'BrewBuddy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/mangesh2m/api-docu-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mangesh2m/api-docu-site',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} BrewBuddy.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
