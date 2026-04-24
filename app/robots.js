export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://stellavia.vercel.app/sitemap.xml'
  };
}
