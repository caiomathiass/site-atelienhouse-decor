import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-living-room.png"
          alt="Sala de estar sofisticada com cortinas de tecido sob medida"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.32em] text-white/80">
            <span className="h-px w-8 bg-accent" />
            Ateliê especializado em cortinas sob medida · desde 2017
          </p>

          <h1 className="text-balance font-serif text-[2.6rem] font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Cortinas de tecido sob medida para transformar seus ambientes.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-white/85">
Projetos personalizados, tecidos selecionados e acabamentos cuidadosos para valorizar cada ambiente da sua casa ou empresa.          </p>

          <p className="mt-3 text-sm font-light uppercase tracking-[0.18em] text-white/70">
           Atendimento no Recreio, Barra da Tijuca, Zona Sul, outras regiões do Rio de Janeiro e Niterói.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento pelo WhatsApp
            </a>
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Conheça nossos projetos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
