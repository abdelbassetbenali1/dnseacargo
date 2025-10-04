const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove deprecated appDir option as it's now default in Next.js 15
};

module.exports = withNextIntl(nextConfig);