import axios from 'axios';
import fs from 'fs';

const sitemapUrl = 'https://lobinstores.com/sitemap.xml';

async function getUrls() {
  const response = await axios.get(sitemapUrl);
  const urls = response.data.match(/<loc>(.*?)<\/loc>/g).map((loc: string) => loc.replace(/<\/?loc>/g, ''));
  fs.writeFileSync('urls.json', JSON.stringify(urls, null, 2));
}

getUrls();
