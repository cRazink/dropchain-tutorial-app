/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination: 'http://localhost:5001/v1/:path*',
            },
        ];
    },
};

module.exports = nextConfig
