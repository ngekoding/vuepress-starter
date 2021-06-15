import { sidebar } from './configs'

module.exports = {
  base: '/',

  // site-level locales config
  locales: {
    '/': {
      lang: 'id-ID',
      title: 'Vuepress!',
      description: 'Hi, I am Vuepress site!',
    }
  },

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    
    // theme-level locales config
    locales: {
      '/': {
        // sidebar
        sidebar: sidebar.id
      }
    }
  },
}