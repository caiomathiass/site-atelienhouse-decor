import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    label: 'Cortina para sala de jantar',
    src: '/images/cortina blackout sala de jantar.jpg',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'Cortina para quarto com bandô',
    src: '/images/cortina quarto com bando.jpg',
    className: '',
  },
  {
    label: 'Cortina para quarto',
    src: '/images/cortina quarto soton.jpg',
    className: '',
  },
  {
    label: 'Cortina para sala de estar',
    src: '/images/sala de estar blackout.jpg',
    className: '',
  },
  {
    label: 'Cortina de voil para sala',
    src: '/images/sala de estar vouil.jpg',
    className: '',
  },
  {
    label: 'Cortina de voil com acabamento curvo',
    src: '/images/sala de estar curva vouil.jpg',
    className: '',
  },
  {
    label: 'Cortina de voil para sala de jantar',
    src: '/images/sala de jantar vouil.jpg',
    className: '',
  },
  {
    label: 'Cortina para área externa',
    src: '/images/area externa mostrando a cortina.jpg',
    className: '',
  },
]

export function ProjectsGallery() {
  return (
    <section id="projetos" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projetos reais"
          title="Cortinas que transformam ambientes"
          description="Conheça alguns dos nossos trabalhos sob medida, com diferentes tecidos, acabamentos e estilos."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal
              key={project.src}
              delay={(index % 4) * 80}
              className={project.className}
            >
              <article className="group relative min-h-72 overflow-hidden bg-neutral-200 sm:h-full">
                <Image
                  src={project.src}
                  alt={project.label}
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