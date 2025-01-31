/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.clinicassempresorrindo.com.br',
  generateRobotsTxt: true,
  changefreq: 'weekly', // Frequência de atualização
  priority: 1, // Prioridade padrão das páginas
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/.next' }
    ]
  }
};
