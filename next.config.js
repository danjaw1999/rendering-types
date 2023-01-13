/** @type {{images: {path: string[], loader: string, domains: string[]}, reactStrictMode: boolean, swcMinify: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: ["images.ctfassets.net"],
    domains: ["images.ctfassets.net"],
  },
}

module.exports = nextConfig
