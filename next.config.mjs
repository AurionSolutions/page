// next.config.mjs
/** @type {import('next').NextConfig} */
const repoName = '/my-portf-main' // troque conforme necessário

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoName,
  assetPrefix: repoName,
  // outras opções...
}

export default nextConfig
