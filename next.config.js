/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },

    images: {
        domains: [
            'jungjung261.blob.core.windows.net',
            'scontent.fhan14-1.fna.fbcdn.net',
            'scontent.xx.fbcdn.net',
            'scontent.fsgn5-8.fna.fbcdn.net',
        ],
    },
};

module.exports = nextConfig;
