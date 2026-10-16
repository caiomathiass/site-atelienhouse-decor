
import { ClipboardCheck, Ruler, Scissors, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    title: 'Conversa e consultoria',
    description:
      'Entendemos seu ambiente, suas necessidades e o estilo que você deseja criar.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Medição e escolha dos tecidos',
    description:
      'Orientamos na escolha dos tecidos, cores e acabamentos ideais para seu espaço.',
    icon: Ruler,
  },
  {
    number: '03',
    title: 'Confecção sob medida',
    description:
      'Cada cortina é confeccionada com atenção aos detalhes e ao caimento.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Instalação e acabamento',
    description:
      'Finalizamos o projeto para que sua cortina valorize o ambiente.',
    icon: Sparkles,
  },
]

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-accent">
            Como funciona
          </p>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl font-medium leading-tight text-foreground sm:text-5xl">
            Do primeiro contato à cortina instalada.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-light leading-relaxed text-muted-foreground">
            Um processo cuidadoso e personalizado para transformar seu ambiente
            com praticidade e sofisticação.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Reveal key={step.number} delay={index * 80}>
                <article className="h-full border-t border-border pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-accent">
                      {step.number}
                    </span>
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

