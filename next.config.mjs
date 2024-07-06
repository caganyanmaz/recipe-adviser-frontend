/** @type {import('next').NextConfig} */
const nextConfig = {
    images: 
    {
        remotePatterns: 
        [
            {
                protocol: 'http',
                hostname: 'images.media-allrecipes.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};


export default nextConfig;