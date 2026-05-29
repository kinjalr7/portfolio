import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://portfolio-iota-lemon-l97i0onvsw.vercel.app/sitemap.xml',
  };
}
