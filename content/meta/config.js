const colors = require('../../src/styles/colors');

module.exports = {
  siteTitle: 'forxtu - a personal programming blog', // <title>
  shortSiteTitle: 'forxtu coding blog', // <title> ending for posts and pages
  siteDescription: 'FORXTU - a personal blog about programming',
  siteUrl: 'blog.forxtu.xyz',
  pathPrefix: '',
  siteImage: 'preview.jpg',
  siteLanguage: 'en',
  // author
  authorName: 'Dennis Merkulov',
  authorTwitterAccount: 'forxtu',
  // info
  infoTitle: 'FORXTU',
  infoTitleNote: 'programming',
  // manifest.json
  manifestName: 'forxtu - a programming blog',
  manifestShortName: 'PersonalBlog', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: 'standalone',
  // contact
  contactEmail: 'forxtu@gmail.com',
  // social
  authorSocialLinks: [
    { name: 'github', url: 'https://github.com/forxtu' },
    { name: 'twitter', url: 'https://twitter.com/forxtu' },
    { name: 'facebook', url: 'http://facebook.com/forxtu' }
  ]
};
