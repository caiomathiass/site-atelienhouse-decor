import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const categories = [
  {
    title: 'Cortinas leves e translúcidas',
    text: 'Tecidos que filtram a luz com leveza, criando ambientes claros e acolhedores.',
    image: '/images/curtain-sheer.png',
  },
  {
    title: 'Cortinas com bloqueio de luz',
    text: 'Maior privacidade e controle da luminosidade para descanso e conforto.',
    image: '/images/curtain-blackout.png',
  },
  {
    title: 'Cortinas em tecidos encorpados',
    text: 'Caimento marcante e presença, com acabamento sofisticado e elegante.',
    image: '/images/curtain-textured.png',
  },
  {
    title: 'Composições de tecidos',
    text: 'Camadas que combinam texturas e transparências para um resultado único.',
    image: '/images/curtain-composition.png',
  },
  {
    title: 'Diferentes cores e acabamentos',
    text: 'Uma curadoria de tons e detalhes para harmonizar com o seu projeto.',
    image: '/images/curtain-colors.png',
  },
]

export function CurtainsSection() {
  return (
    <section id="cortinas" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cortinas sob medida"
          title="Possibilidades em tecido para cada projeto"
          description="Trabalhamos exclusivamente com cortinas confeccionadas em tecido. Os tecidos variam conforme a disponibilidade de estoque — apresentamos estilos e categorias para orientar a sua escolha."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) * 100}
              as="article"
              className="group flex flex-col overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-xl font-medium text-foreground">{cat.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {cat.text}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={200}
            className="flex flex-col justify-center gap-4 border border-dashed border-accent/40 bg-accent/[0.04] p-8"
          >
            <p className="font-serif text-2xl font-medium leading-snug text-foreground">
              Não encontrou o que procura?
            </p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Conte-nos sobre o seu ambiente. Apresentamos as opções de tecidos, cores e
              acabamentos mais adequadas ao seu projeto.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
