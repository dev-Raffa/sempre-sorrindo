/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backup.clinicassempresorrindo.com.br',
        port: '',
        pathname: '/storage/app/uploads/**',
        search: ''
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/noticias/:id/:slug(.+)\\.html',
        destination: '/noticias/:slug',
        permanent: true
      },
      {
        source: '/home.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/pages/:slug(.+).html',
        destination: '/:slug',
        permanent: true
      },
      {
        source: '/pages/:slug/:innerSlug(.+)\\.html',
        destination: '/:slug/:innerSlug',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
