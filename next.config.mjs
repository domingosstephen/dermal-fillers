/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as static export — works with GitHub Pages / Vercel / any static host
  output: 'export',

  // Trailing slash for clean URLs (index.html pattern)
  trailingSlash: true,

  // Disable image optimisation for static export compatibility
  images: {
    unoptimized: true,
  },

  // ESLint — don't fail build on warnings
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript — strict build checking
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
