// next.config.mjs
/** @type {import('next').NextConfig} */
const repoName = '/page' // nome do repositório no GitHub Pages

const nextConfig = {
  output: 'export',       // exporta arquivos estáticos
  trailingSlash: true,    // gera index.html dentro de pastas
  basePath: repoName,     // basePath = nome do repo
  assetPrefix: repoName,  // garante CSS/JS apontando para o caminho certo
}

export default nextConfig
