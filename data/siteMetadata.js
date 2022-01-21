const siteMetadata = {
  title: 'Undefined - Blog by Eunsu Kim',
  author: 'Eunsu Kim',
  headerTitle: 'Undefined - Blog by Eunsu Kim',
  description: 'A Blog by Eunsu Kim',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app', // TODO:
  siteRepo: 'https://github.com/eunsukimme/my-blog-v2',
  siteLogo: '/static/images/logo.png', // TODO:
  image: '/static/images/avatar.png', // TODO:
  socialBanner: '/static/images/twitter-card.png',
  email: 'eunsu.dev@gmail.com',
  github: 'https://github.com/eunsukimme',
  twitter: 'https://twitter.com/EunsuKim17',
  facebook: 'https://www.facebook.com/people/%EA%B9%80%EC%9D%80%EC%88%98/100003647254099/',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/eunsukimme/',
  locale: 'ko-KR',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    // plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // simpleAnalytics: false, // true or false
    // umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-QBRFDG7Y7P', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'preferred_color_scheme',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    // utterancesConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://utteranc.es/
    //   repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
    //   issueTerm: '', // supported options: pathname, url, title
    //   label: '', // label (optional): Comment 💬
    //   // theme example: github-light, github-dark, preferred-color-scheme
    //   // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
    //   theme: '',
    //   // theme when dark mode
    //   darkTheme: '',
    // },
    // disqusConfig: {
    //   // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    //   shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    // },
  },
}

module.exports = siteMetadata
