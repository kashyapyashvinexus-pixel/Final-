import { projects } from '@/data/projects';

export default function sitemap() {
  const base = 'https://stellavia.vercel.app';
  const staticPages = ['', '/about', '/projects', '/floor-plans', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));

  const projectPages = projects.flatMap((project) => ([
    {
      url: `${base}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${base}/brochure/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ]));

  return [...staticPages, ...projectPages];
}
