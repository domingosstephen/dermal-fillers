import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdomain.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
