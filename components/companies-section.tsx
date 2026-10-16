import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'

export function CompaniesSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Para empresas
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
            Soluções sob medida para ambientes corporativos.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base font-light leading-relaxed text-primary-foreground/75">
            Cortinas de tecido que conciliam conforto, privacidade e sofisticação para escritórios,
            recepções e espaços comerciais.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 border-b border-primary-foreground/60 pb-1 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
          >
            Solicitar atendimento
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120} className="relative aspect-[16/11] overflow-hidden">
          <Image
            src="/images/ambiente-corporativo.png"
            alt="Ambiente corporativo com cortinas de tecido sob medida"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
