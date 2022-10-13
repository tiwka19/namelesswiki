/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Nameless AOSP',

  // tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NamelessAOSP',
        logo: {
          alt: 'My Meta Project Logo',
          src: 'img/logo.svg',
        },
        items: [{
            to: 'screenshots',
            label: 'Screenshots',
            position: 'left'
          },
          {
            to: 'faq',
            label: 'FAQ',
            position: 'left'
          },
          {
            to: 'community',
            label: 'Community',
            position: 'left'
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'doc',
            label: 'Install',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: "8PSKKPV3OQ",
        apiKey: "cb15da6f35451f5fed2b4857aedb7841",
        indexName: "dev_undetectable-docs",
        contextualSearch: true,
      },
    }),
};

module.exports = config;