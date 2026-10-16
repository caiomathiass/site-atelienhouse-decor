import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust-section'
import { CurtainsSection } from '@/components/curtains-section'
import { AmbientesSection } from '@/components/ambientes-section'
import { ProcessSection } from '@/components/process-section'
import { ArchitectsSection } from '@/components/architects-section'
import { CompaniesSection } from '@/components/companies-section'
import { ProjectsGallery } from '@/components/projects-gallery'
import { RegionsSection } from '@/components/regions-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { WHATSAPP_DISPLAY, INSTAGRAM_URL } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ateliê House Cortinas',
  description:
    'Ateliê especializado em cortinas de tecido sob medida desde 2017. Atendimento personalizado no Rio de Janeiro e Niterói.',
  areaServed: ['Rio de Janeiro', 'Niterói'],
  foundingDate: '2017',
  telephone: WHATSAPP_DISPLAY,
  sameAs: [INSTAGRAM_URL],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <CurtainsSection />
        <AmbientesSection />
        <ProcessSection />
        <ArchitectsSection />
        <CompaniesSection />
        <ProjectsGallery />
        <RegionsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
