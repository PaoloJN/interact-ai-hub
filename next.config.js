/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  experimental: {
    windowHistorySupport: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}
