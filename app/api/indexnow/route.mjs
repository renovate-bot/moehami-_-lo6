import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const apiKey = '4841e083ed0547aca0f7265a7aa9bacf';
const indexNowUrl = 'https://api.indexnow.org/indexnow';

export async function POST(req: NextRequest) {
  const jsonFilePath = path.join(process.cwd(), 'urls.json');
  const urls = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  try {
    await axios.post(indexNowUrl, {
      host: 'lobinstores.com',
      key: apiKey,
      keyLocation: `https://lobinstores.com/${apiKey}.txt`,
      urlList: urls,
    });

    return NextResponse.json({ message: 'URLs submitted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit URLs' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST method to submit URLs' });
}
