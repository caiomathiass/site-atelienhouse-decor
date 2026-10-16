import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const ambientes = [
  { title: 'Sala de estar', image: '/images/hero-living-room.png', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Quarto', image: '/images/ambiente-quarto.png', span: '' },
  { title: 'Sala de jantar', image: '/images/ambiente-jantar.png', span: '' },
  { title: 'Home theater', image: '/images/ambiente-home-theater.png', span: '' },
  { title: 'Ambientes corporativos', image: '/images/ambiente-corporativo.png', span: '' },
]

export function AmbientesSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cada ambiente, uma possibilidade"
          title="Soluções pensadas para cada espaço"
          description="Da sala ao ambiente corporativo, cada cortina é planejada para valorizar a arquitetura e a rotina de quem vive o espaço."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
          {ambientes.map((amb, i) => (
            <Reveal
              key={amb.title}
              delay={(i % 4) * 80}
              as="article"
              className={cn(
                'group relative overflow-hidden',
                amb.span,
              )}
            >
              <Image
                src={amb.image}
                alt={`Cortinas sob medida — ${amb.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 font-serif text-xl font-medium text-white drop-shadow-sm sm:text-2xl">
                {amb.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
