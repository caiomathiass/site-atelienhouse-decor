import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'

const highlights = [
  'Execução sob medida fiel ao projeto',
  'Cuidado com o acabamento e o caimento',
  'Atendimento dedicado a arquitetos e designers',
]

export function ArchitectsSection() {
  return (
    <section id="arquitetos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1">
          <Image
            src="/images/arquitetos.png"
            alt="Instalação de cortina executada com precisão em projeto de arquitetura"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Para arquitetos
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Uma parceria à altura dos seus projetos.
          </h2>
          <p className="mt-6 text-pretty text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Trabalhamos ao lado de arquitetos e designers de interiores para dar vida a cada
            especificação. Da escolha do tecido ao acabamento final, cuidamos de cada detalhe para
            que o resultado esteja à altura do seu projeto.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                <span className="text-sm font-light">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Falar com a equipe
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
