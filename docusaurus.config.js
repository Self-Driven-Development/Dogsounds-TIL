/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dogsounds-TIL',
  tagline: 'Today I Learned',
  favicon: 'img/favicon.ico',
  url: 'https://self-driven-development.github.io',
  baseUrl: '/Dogsounds-TIL/',
  organizationName: 'Self-Driven-Development',
  projectName: 'Dogsounds-TIL',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        htmlLang: 'ko-KR',
      },
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/TIL',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Dogsounds-TIL',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/TIL/',
            label: 'TIL',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'self-driven-development',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Self-Driven-Development/Dogsounds-TIL',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} , Self-Driven-Development`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '55PPSXAP11',
        apiKey: 'bded4ade906245dfda8034bd40daeb7c',
        indexName: 'til',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
