module.exports = {
  title: '开发者中心',
  tagline: 'Play with ',
  url: 'https://cim.sz.com.cn/devcenter',
  baseUrl: '/devcenter/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'devcenter', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
    navbar: {
      title: 'Developer Center',
      logo: {
        alt: 'sz Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/cfmap/overview',
          activeBasePath: 'docs/cfmap',
          label: '地图开发',
          position: 'left',
        },
        {
          to: 'docs/geocms/overview',
          activeBasePath: 'docs/geocms',
          label: '平台开发',
          position: 'left',
        },
        { to: 'blog', label: '博客', position: 'left' },
        {
          href: 'https://www.sz.com.cn/',
          label: 'sz',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '地图开发',
              to: 'docs/cfmap/overview',
            },
            {
              label: '平台开发',
              to: 'docs/geocms/overview',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '微信',
              href: 'https://www.sz.com.cn/',
            },
            {
              label: 'QQ',
              href: 'https://www.sz.com.cn/',
            },
            {
              label: '微博',
              href: 'https://www.sz.com.cn/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} devcenter`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://code.sz.com.cn/tfs/CF-TEAM/%E8%8B%8F%E5%B7%9E%E5%9F%8E%E6%96%B9-%E5%9F%BA%E7%A1%80%E7%A0%94%E5%8F%91/_git/dev-center?path=%2F&version=GBmaster&_a=contents',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://code.sz.com.cn/tfs/CF-TEAM/%E8%8B%8F%E5%B7%9E%E5%9F%8E%E6%96%B9-%E5%9F%BA%E7%A1%80%E7%A0%94%E5%8F%91/_git/dev-center?path=%2Fblog&version=GBmaster&_a=contents',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
