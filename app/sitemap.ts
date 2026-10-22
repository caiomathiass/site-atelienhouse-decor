
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  // Não gerar URLs incorretas enquanto o domínio não estiver configurado.
  if (!siteUrl) {
    return []
  }

  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`

  return [
    {
      url: new URL('/', baseUrl).toString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/tecidos', baseUrl).toString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}