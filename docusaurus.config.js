// @ts-check
// Note: type annotations allow type checking and IDEs autocompletio
//command: cmd /C "set "GIT_USER=juanretamales" && yarn deploy"
// for debug: npx docusaurus start

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juan Retamales Site',
  tagline: 'Mi Web y Portafoleo Profesional',
  // url: 'https://juanretamales.github.io',
  url: 'https://www.juanretamales.cl' ,
  // baseUrl: '/my-website/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'juanretamales', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/juanretamales/my-website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          remarkPlugins: [require('mdx-mermaid')],
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/juanretamales/my-website/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutoriales',
          },
          {
            // type: 'doc',
            // docId: 'intro',
            to: '/proyects/Intro', 
            position: 'left',
            label: 'Proyectos',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/juanretamales/',
            label: 'GitHub',
            position: 'right',
          },
          {
            docId: 'curriculum',
            to: '/curriculum',
            position: 'left',
            label: 'Curriculum',
          },
          // {
          //   type: 'localeDropdown',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Portafoleo',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Redes Sociales',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/juanretamales/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/users/1695',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/juanretamales',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juan Retamales. Powered with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: ['docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Portafoleo',
        remarkPlugins: [require('mdx-mermaid')],
        path: 'proyects',
        routeBasePath: 'proyects',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 

    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ]
};

module.exports = config;
