import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PageData {
  url: string;
  title: string;
  text: string;
  resume: string;
  imgUrl: string;
  publishDate?: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'src/content/noticias');

export async function getNews(): Promise<PageData[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR);
  const news: PageData[] = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    news.push({
      url: file.replace('.md', ''),
      title: data.title || '',
      resume: data.resume || '',
      imgUrl: data.imgUrl || '',
      publishDate: data.publishDate || undefined,
      text: content,
      order: typeof data.order === 'number' ? data.order : 9999
    } as PageData & { order?: number });
  }

  news.sort((a, b) => {
    const orderA = (a as PageData & { order?: number }).order ?? 9999;
    const orderB = (b as PageData & { order?: number }).order ?? 9999;
    return orderA - orderB;
  });

  return news;
}

export async function getPublishedNews(): Promise<PageData[]> {
  const allNews = await getNews();
  const now = new Date();

  return allNews.filter((post) => {
    if (!post.publishDate) return true;
    const pubDate = new Date(post.publishDate);
    return !isNaN(pubDate.getTime()) && pubDate <= now;
  });
}
