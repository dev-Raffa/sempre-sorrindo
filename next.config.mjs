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
  }
};

export default nextConfig;
