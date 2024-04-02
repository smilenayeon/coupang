/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'images.unsplash.com'},
            {hostname:'images.remotePatterns'},
            {hostname:'firebasestorage.googleapis.com'},
        ]
    }
}

module.exports = nextConfig
