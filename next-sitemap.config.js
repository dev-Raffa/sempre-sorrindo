/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.clinicassempresorrindo.com.br',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/.next' }
    ]
  }
};
