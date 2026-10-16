import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const regions = [
  'Recreio',
  'Barra da Tijuca',
  'São Conrado',
  'Leblon',
  'Ipanema',
  'Gávea',
  'Jardim Botânico',
  'Botafogo',
  'Copacabana',
  'Niterói',
]

export function RegionsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regiões atendidas"
          title="Atendimento em todo o Rio de Janeiro e Niterói."
          description="Estamos presentes em diversos bairros da cidade e região. Consulte o atendimento para o seu endereço."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {regions.map((region, i) => (
            <Reveal key={region} delay={i * 45}>
              <span className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm font-light text-foreground transition-colors hover:border-accent">
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                {region}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
