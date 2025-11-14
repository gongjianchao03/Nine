/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. 强制 Next.js 只输出静态 HTML 文件
    output: 'export',
  
    // 2. 配置部署的子路径（这是 GitHub Pages 必需的）
    // 请确保 '/Nine' 替换为您的仓库名称！
    basePath: '/Nine',
    assetPrefix: '/Nine/',
  
    // 3. (可选但推荐) 禁用 Next.js 的图片优化，
    // 否则 GitHub Pages 无法处理 Next.js 复杂的图片加载逻辑。
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;