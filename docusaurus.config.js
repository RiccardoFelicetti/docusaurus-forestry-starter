module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://RiccardoFelicetti.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'RiccardoFelicetti', // Usually your GitHub org/user name.
  projectName: 'docusaurus-forestry-starter', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
          //commented for docs only
        // {
        //   to: 'docs/',
        //   activeBasePath: '/',
        //   label: 'Docs',
        //   position: 'left',
        // },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              //changed for docs only ---->previus "/docs" and "/docs/doc2"
              label: 'Style Guide',
              to: '/',
            },
            {
              label: 'Second Doc',
              to: '/doc2',
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
              //commented for docs only
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/'
          //commented for docs only
          //sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/',

        },
        //set false for docs only
         blog: false, //{
          // showReadingTime: true,
          //  // Please change this to your repo.
          // editUrl:
          //   'https://github.com/DirtyF/docusaurus-forestry-starter/edit/master/website/blog/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
