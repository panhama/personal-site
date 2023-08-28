/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@images'] = path.join(__dirname, 'public/img'); // Adjust the path accordingly
    config.resolve.alias['@components'] = path.join(__dirname, 'src/app/components'); // Adjust the path accordingly
    return config;
  },
};
