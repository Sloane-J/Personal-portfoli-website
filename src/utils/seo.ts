interface SEOProps {
    title: string
    description: string
    image?: string
    url?: string
    type?: string
  }
  
  export const defaultSEO: SEOProps = {
    title: "Your Name - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    image: "/og-image.png", // Default OG image
    url: "https://yourwebsite.com",
    type: "website",
  }
  
  export function generateSEO({
    title = defaultSEO.title,
    description = defaultSEO.description,
    image = defaultSEO.image,
    url = defaultSEO.url,
    type = defaultSEO.type,
  }: Partial<SEOProps> = defaultSEO) {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        type,
        url,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      additionalMetaTags: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
    }
  }
  
  