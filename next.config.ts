/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    "paths": {
        "@/*": ["./src/*"]
    },
    images: {
        unoptimized: true, // ✅ Отключаем оптимизацию для статического экспорта
    },
    trailingSlash: true,
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['styles'],
    },
};

export default nextConfig;
