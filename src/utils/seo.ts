const SITE_URL = 'https://sloanedev.vercel.app'
const AUTHOR = 'Samuel Dorkey'
const TWITTER_HANDLE = '@sloanejnr'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
  nofollow?: boolean
}

export const defaultSEO: SEOProps = {
  title: `${AUTHOR} — Software Developer`,
  description:
    'Software Developer based in Ghana, specialising in full stack web applications, mobile apps, and production-ready digital products built with Laravel, Nextjs, React, Astro, Supabase, and TypeScript.',
  image: '/og-image.png',
  url: SITE_URL,
  type: 'website',
  keywords: [
    'Samuel Dorkey',
    'software developer Ghana',
    'full stack developer Ghana',
    'React developer',
    'Astro developer',
    'TypeScript developer',
    'Supabase developer',
    'React Native developer',
    'frontend developer Ghana',
    'web developer Ghana',
    'Sloane Dev',
  ],
  author: AUTHOR,
  noindex: false,
  nofollow: false,
}

export function generateSEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
}: Partial<SEOProps> = defaultSEO) {
  const absoluteImage = image?.startsWith('http') ? image : `${SITE_URL}${image}`
  const absoluteUrl = url?.startsWith('http') ? url : `${SITE_URL}${url}`
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`

  return {
    title,
    description,

    // Canonical
    canonical: absoluteUrl,

    // Robots
    robots: robotsContent,
    googlebot: robotsContent,

    // Author
    author,
    creator: AUTHOR,
    publisher: AUTHOR,

    // Keywords
    keywords: keywords?.join(', '),

    // Open Graph
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: `${AUTHOR} — Software Developer`,
      locale: 'en_UK',
      type,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && type === 'article' && { authors: [author] }),
    },

    // Twitter / X
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [absoluteImage],
    },

    // Structured data — Person schema for portfolio
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR,
      url: SITE_URL,
      jobTitle: 'Software Developer',
      description,
      image: absoluteImage,
      sameAs: [
        'https://github.com/Sloane-J',
        'https://linkedin.com/in/yourusername',
      ],
      knowsAbout: [
        'Laravel',
        'Nextjs',
        'React',
        'Astro',
        'TypeScript',
        'Supabase',
        'PostgreSQL',
        'React Native',
        'Expo',
        'Tailwind CSS',
        'Node.js',
        'Cloudflare Pages',
        'Vercel',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GH',
      },
    },

    // Additional meta tags
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: '#0a0a0a',
        media: '(prefers-color-scheme: dark)',
      },
      {
        name: 'color-scheme',
        content: 'light dark',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        name: 'developer',
        content: AUTHOR,
      },
    ],

    // Link tags
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        href: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        href: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  }
}

// Helper for article/blog post pages
export function generateArticleSEO(props: SEOProps & {
  publishedTime: string
  modifiedTime?: string
  tags?: string[]
}) {
  return generateSEO({
    ...props,
    type: 'article',
    keywords: props.tags ?? props.keywords,
  })
}

// Helper for the homepage specifically
export function generateHomeSEO() {
  return generateSEO({
    title: `${AUTHOR} — Software Developer`,
    description:
      'Software Developer based in Ghana building full stack web apps, mobile applications, and production-ready digital products. Available for freelance projects.',
    url: SITE_URL,
    type: 'website',
  })
}