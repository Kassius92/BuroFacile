export function articleSchema({ title, description, url, image, datePublished = '2026-03-01', dateModified = '2026-03-07' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `https://burosemplice.it/${image}`,
    url: `https://burosemplice.it${url}`,
    datePublished,
    dateModified,
    author: { '@type': 'Organization', name: 'BuroSemplice', url: 'https://burosemplice.it' },
    publisher: {
      '@type': 'Organization',
      name: 'BuroSemplice',
      logo: { '@type': 'ImageObject', url: 'https://burosemplice.it/favicon32x32.png' }
    },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a.replace(/<[^>]+>/g, ''),
      },
    })),
  };
}

export default function SchemaOrg({ schemas }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
