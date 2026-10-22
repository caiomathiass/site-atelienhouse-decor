
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const regions = [
  'Recreio dos Bandeirantes',
  'Barra da Tijuca',
  'Vargem Grande',
  'Vargem Pequena',
  'Jacarepaguá',
  'Zona Sul do Rio',
  'Niterói',
]

export function RegionsSection() {
  return (
    <section
      id="regioes-atendidas"
      aria-labelledby="regioes-heading"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regiões atendidas"
          title="Cortinas sob medida no Rio de Janeiro e Niterói."
          description="Atendemos residências, empresas e arquitetos no Recreio dos Bandeirantes, Barra da Tijuca, Vargem Grande, Vargem Pequena, Jacarepaguá, Zona Sul do Rio de Janeiro e Niterói. Entre em contato para consultar o atendimento no seu endereço."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {regions.map((region, i) => (
            <Reveal key={region} delay={i * 45}>
              <span className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm font-light text-foreground transition-colors hover:border-accent">
                <MapPin
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                {region}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}