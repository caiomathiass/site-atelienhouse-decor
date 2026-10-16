import { CalendarRange, Hand, Ruler, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const indicators = [
  {
    icon: CalendarRange,
    title: 'Desde 2017',
    text: 'Experiência consolidada em cortinas sob medida.',
  },
  {
    icon: Hand,
    title: 'Atendimento personalizado',
    text: 'Acompanhamento próximo em cada etapa do projeto.',
  },
  {
    icon: Ruler,
    title: 'Cortinas sob medida',
    text: 'Confecção em tecido pensada para o seu ambiente.',
  },
  {
    icon: MapPin,
    title: 'Rio de Janeiro e Niterói',
    text: 'Atendimento em toda a cidade e região.',
  },
]

export function TrustSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mx-auto max-w-3xl text-balance text-center font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl lg:text-[2.35rem]">
            Desde 2017 transformando ambientes através de cortinas sob medida.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex flex-col items-start gap-4 bg-background p-8"
            >
              <item.icon className="h-7 w-7 text-accent" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-foreground">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
