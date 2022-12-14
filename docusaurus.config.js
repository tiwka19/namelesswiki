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
  url: 'https://nameless.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tiwka19',
  projectName: 'namelesswiki',
scripts: [
    {
      src: 'matomo-tracking-code.js',
     },
  ],
plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
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
        title: 'Nameless AOSP',
        items: [
          {
            to: 'screenshots',
            label: 'Screenshots',
            position: 'left',
          },
          {
            to: 'faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            to: 'category/install',
            label: 'Install',
            position: 'left',
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/Nameless-AOSP',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://forum.xda-developers.com/t/rom-official-oos-cam-oneplus-8t-9r-12-1-0_r11-nameless-aosp-2022-07-23.4403295/',
            label: 'XDA',
            position: 'right',
          },
        ],
      },
        algolia: {
        appId: 'IKCYX27QE4',
        apiKey: '092118c8ec6d247b54e58abc339e5273',
        indexName: 'namelesswiki',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
