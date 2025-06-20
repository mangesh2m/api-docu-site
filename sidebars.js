// @ts-check

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsible: false,
      items: [
        'authentication',
        'brewing-commands',
        'maintenance',
        'troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
