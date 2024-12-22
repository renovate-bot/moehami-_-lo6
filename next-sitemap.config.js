/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://lobinstores.com', // Replace with your domain
    generateRobotsTxt: true, // Generates robots.txt file
    sitemapSize: 7000,       // Optional: Maximum number of entries per sitemap
    exclude: ['/admin/*', '/api/*'], // Optional: Exclude specific paths
    changefreq: 'weekly',    // Optional: Frequency for pages
    priority: 0.7,           // Optional: Default priority
    transform: async (config, path) => {
      // Custom transformation for specific paths (optional)
      return {
        loc: path,            // Path
        changefreq: 'weekly', // Frequency
        priority: 0.7,        // Priority
        lastmod: new Date().toISOString(),
      };
    },
  };
  
  module.exports = config;
  