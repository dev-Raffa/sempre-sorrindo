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
      }
    ];
  }
};

export default nextConfig;
