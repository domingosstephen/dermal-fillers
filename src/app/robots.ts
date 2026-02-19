import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/staging/', '/dev/'],
    },
    sitemap: 'https://www.yourdomain.com/sitemap.xml',
  };
}
