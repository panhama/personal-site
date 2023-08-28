/** @type {import('next').NextConfig} */
// const nextConfig = {}

const path = require('path');

const nextConfig = {
  images: {
    domains: ['live.staticflickr.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@images'] = path.join(__dirname, 'public/img'); // Adjust the path accordingly
    config.resolve.alias['@components'] = path.join(__dirname, 'src/app/components'); // Adjust the path accordingly
    return config;
  },
};

module.exports = nextConfig;
