/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/",
      destination: "/terminal.html",
    },
  ],
  images: {
	domains: ['https://example.com',
			'avatars.githubusercontent.com']
},
}

const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  experimental: { esmExternals: true },
  images: {
	domains: ['https://example.com',
			'avatars.githubusercontent.com']
  }
});

