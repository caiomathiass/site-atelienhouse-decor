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
    'Cortinas de tecido sob medida desde 2017, com atendimento personalizado para residências, empresas e arquitetos no Recreio dos Bandeirantes, Barra da Tijuca, Vargem Grande, Vargem Pequena, Jacarepaguá, Zona Sul do Rio de Janeiro e Niterói.',
  knowsAbout: [
    'Cortinas de tecido sob medida',
    'Cortinas blackout',
    'Tecidos para cortinas',
    'Decoração de interiores',
  ],
  areaServed: [
    'Recreio dos Bandeirantes, Rio de Janeiro, RJ',
    'Barra da Tijuca, Rio de Janeiro, RJ',
    'Vargem Grande, Rio de Janeiro, RJ',
    'Vargem Pequena, Rio de Janeiro, RJ',
    'Jacarepaguá, Rio de Janeiro, RJ',
    'Zona Sul, Rio de Janeiro, RJ',
    'Niterói, RJ',
  ],
  foundingDate: '2017',
  telephone: '+5521974668142',
  sameAs: [INSTAGRAM_URL],
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
