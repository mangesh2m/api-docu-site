// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BrewBuddy API Docs', // Your site title
  tagline: 'Automate Your Coffee Experience', // Your site tagline for the homepage hero (will be used by MDX page title meta)
  url: 'https://mangesh2m.github.io', // Your GitHub Pages base URL (e.g., https://<USERNAME>.github.io)
  baseUrl: '/api-docu-site/', // The path to your site from the base URL (e.g., /<REPO_NAME>/)
  onBrokenLinks: 'throw', // Recommended: 'throw' for build errors on broken links
  onBrokenMarkdownLinks: 'warn', // Recommended: 'warn' for issues with markdown links
  favicon: 'img/favicon.ico', // Path to your favicon

  // GitHub Pages deployment config.
  organizationName: 'mangesh2m', // Your GitHub org/user name.
  projectName: 'api-docu-site', // Your repo name.

  // Enable client-side rendering for routing (default)
  // trailingSlash: false, // If you prefer /path instead of /path/

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // IMPORTANT MODIFICATION HERE:
          // Remove or comment out 'routeBasePath: '/''.
          // This allows src/pages/index.mdx to become the site's homepage.
          // routeBasePath: '/', // <-- THIS LINE IS REMOVED/COMMENTED OUT

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/mangesh2m/api-docu-site/tree/main/',

          // NEW ADDITION: Add remark-gfm for GitHub Flavored Markdown support
          // remarkPlugins: [require('remark-gfm')],
        },
        blog: false, // Set to false if you don't want a blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Used for social media previews

      // --- ADDED/MOVED SCROLLTOTOP HERE ---
      scrollToTop: true,

      navbar: {
        // title: 'Home', // Title next to the logo in the navbar
        logo: {
          alt: 'BrewBuddy Logo',
          src: 'img/brewbuddy-logo.png', // Path to your logo
        },
        items: [
          // This item links to your documentation section.
          // 'docId: 'getting-started' will correctly link to docs/getting-started.md
          {
            to: '/', // Home link
            label: 'Home',
            position: 'left',
            exact: true,
            // activeBasePath: '/',
          },
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'API Docs', // Label for the documentation link in the navbar
          },
          // You can add more navbar items here (e.g., external links, custom pages)
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mangesh2m/api-docu-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark', // 'dark' or 'light'
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview', // This label appears in the footer
                // MODIFICATION: Ensure this links to the correct doc path
                to: '/docs/getting-started',
              },
              {
                label: 'Authentication',
                to: '/docs/authentication', // Example: Link to your authentication doc
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mangesh2m/api-docu-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BrewBuddy. Built with Docusaurus.`,
      },
      // --- THESE PROPERTIES HAVE BEEN MOVED INSIDE THE themeConfig OBJECT ---
      prism: {
        theme: lightCodeTheme, // Code highlighting theme for light mode
        darkTheme: darkCodeTheme, // Code highlighting theme for dark mode
        additionalLanguages: ['bash', 'json'],
      },
      colorMode: {
        defaultMode: 'dark', // Default theme mode
        disableSwitch: true, // This will now correctly disable the theme toggle
        respectPrefersColorScheme: false, // Ignore OS preference
      },
      // --- END MOVED SECTIONS ---
    }), // This is the CORRECT closing for the themeConfig object
};

module.exports = config;