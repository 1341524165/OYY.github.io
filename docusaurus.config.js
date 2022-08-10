// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OYY Blog',
  tagline: 'Me the man handsome so much',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://tvax1.sinaimg.cn/large/b447be47ly1h4uq4udymbj20yq0yqe43.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OY',
        logo: {
          alt: 'My Site Logo',
          src: 'https://tva4.sinaimg.cn/large/b447be47ly1h4uqtlstu7j20ht0hcwgh.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/1341524165?tab=repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '寻址',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Cancan word?',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/678805690?spm_id_from=333.1007.0.0',
              },
              {
                label: 'Tiktok',
                href: 'https://www.douyin.com/user/MS4wLjABAAAA5Et9C0ibEj8klfJ5aMzsjqLtz2GbiIMvPJJhovVYiVg',
              },
            ],
          },
          {
            title: '国际接轨',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/1341524165',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fengyuanjunn/',
              },
              {
                html: `<img src="https://tva1.sinaimg.cn/large/b447be47gy1h4xemfoqbrj205q04x74d.jpg" alt="eb0fff0a382103533aa063be3e9d0c1" width="206" data-width="206" data-height="177">`,
              },
            ],
          },
        ],
        copyright: `@OYY  冯源濬`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;