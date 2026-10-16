
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    label: 'Sala de estar',
    src: '/images/hero-living-room.png',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'Quarto',
    src: '/images/ambiente-quarto.png',
    className: '',
  },
  {
    label: 'Sala de jantar',
    src: '/images/ambiente-jantar.png',
    className: '',
  },
  {
    label: 'Sala de TV',
    src: '/images/ambiente-home-theater.png',
    className: '',
  },
  {
    label: 'Ambiente corporativo',
    src: '/images/ambiente-corporativo.png',
    className: '',
  },
]

export function ProjectsGallery() {
  return (
    <section id="projetos" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria de projetos"
          title="Projetos que contam histórias"
          description="Inspire-se em ambientes onde cada detalhe foi pensado para valorizar o espaço."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal
              key={project.label}
              delay={(index % 4) * 80}
              className={project.className}
            >
              <article className="group relative min-h-72 overflow-hidden bg-neutral-200 sm:h-full">
                <Image
                  src={project.src}
                  alt={`${project.label} com cortinas e decoração elegante`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-5 left-5 font-serif text-xl text-white">
                  {project.label}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

