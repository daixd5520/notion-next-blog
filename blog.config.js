const BLOG = {
  title: 'DXD Blog',
  author: 'DXD',
  email: 'daixd5520@gmail.com',
  // ↓ THIS BLOG LINK, NOT YOUR SOCIAL LINK ↓
  link: 'https://daixd.xyz', // do not end with '/'
  description: 'This gonna be an awesome website.',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'light', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif'] - !!deprecated, do not modify this
  lightBackground: '#fffefc', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#1D1E20', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy this blog in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showSummary: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: true, // The automatically collapsed navigation bar
  prismjs_cdn: '', // default is cloudflare, if slow you can set 'https://npm.elemecdn.com/prismjs@1.29.0/components/'
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/DXindi14700',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '', // Remove the value or replace it with your own google site verification code
  },
  notionPageId:
    process.env.NOTION_PAGE_ID || 'd3a1074627994f1b8475de6a919cb09c', // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '', // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
