const withNextIntl = require('next-intl/plugin')('./i18n.ts')
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*192.168.80.66',
                port: '8001',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '*localhost',
                port: '22440',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '*127.0.0.1',
                port: '9090',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '*api-test.altairre.ae',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '*api.altairre.ae',
                pathname: '/**',
            },
        ],
        minimumCacheTTL: 31536000,
    },
}

module.exports = withNextIntl(nextConfig)
