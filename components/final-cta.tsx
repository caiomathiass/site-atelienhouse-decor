import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/cta-curtains.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="mb-5 flex items-center justify-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.3em] text-white/75">
          <span className="h-px w-8 bg-accent" />
          Ateliê House Cortinas
          <span className="h-px w-8 bg-accent" />
        </p>
        <h2 className="text-balance font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          Seu ambiente merece uma cortina à altura.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-white/85">
          Fale com a Ateliê House Cortinas e solicite seu orçamento personalizado.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2.5 bg-accent px-9 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar orçamento pelo WhatsApp
        </a>
      </Reveal>
    </section>
  )
}
