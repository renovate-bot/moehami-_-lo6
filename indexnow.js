const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const apiKey = '4841e083ed0547aca0f7265a7aa9bacf';
const indexNowUrl = 'https://api.indexnow.org/indexnow';
const sitemapUrl = 'https://lobinstores.com/sitemap.xml';
const keyLocation = `https://lobinstores.com/${apiKey}.txt`;

// Fetch URLs from the sitemap
async function getUrls() {
  try {
    const response = await axios.get(sitemapUrl);
    const urls = response.data.match(/<loc>(.*?)<\/loc>/g).map((loc) => loc.replace(/<\/?loc>/g, ''));
    return urls;
  } catch (error) {
    console.error('Failed to fetch URLs from sitemap:', error);
    return [];
  }
}

// Submit URLs to IndexNow
async function submitUrls(urls) {
  try {
    await axios.post(indexNowUrl, {
      host: 'lobinstores.com',
      key: apiKey,
      keyLocation: keyLocation,
      urlList: urls,
    });
    console.log('URLs submitted successfully');
  } catch (error) {
    console.error('Failed to submit URLs:', error);
  }
}

// Main function to execute the job
async function main() {
  const urls = await getUrls();
  if (urls.length > 0) {
    await submitUrls(urls);
  } else {
    console.log('No URLs to submit');
  }
}

// Run the main function
main();
