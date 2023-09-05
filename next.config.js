/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        formats: [],
        domains: [ 'res.cloudinary.com' ],
    },


}

module.exports = nextConfig