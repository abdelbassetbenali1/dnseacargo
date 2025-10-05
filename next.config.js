const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  // Remove redirects as next-intl middleware handles this automatically
};

module.exports = withNextIntl(nextConfig);