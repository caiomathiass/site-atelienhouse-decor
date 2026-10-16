'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Como funciona o orçamento?',
    a: 'O primeiro contato pode ser feito pelo WhatsApp. Entendemos o seu ambiente e suas necessidades e, a partir disso, apresentamos as opções de tecidos, cores e acabamentos com o orçamento personalizado.',
  },
  {
    q: 'Vocês fazem atendimento presencial?',
    a: 'Sim. Realizamos atendimento presencial para avaliar o ambiente e apresentar as melhores possibilidades para o seu projeto.',
  },
  {
    q: 'A visita é gratuita?',
    a: 'A visita presencial tem taxa de R$50 caso não haja fechamento. Em caso de fechamento do pedido, a visita é gratuita.',
  },
  {
    q: 'A instalação da cortina é gratuita?',
    a: 'Sim, a instalação da cortina é gratuita. A instalação de trilhos ou varões, quando necessária, possui custo adicional.',
  },
  {
    q: 'Vocês atendem arquitetos?',
    a: 'Sim. Trabalhamos em parceria com arquitetos e designers de interiores, com execução sob medida fiel ao projeto e cuidado com o acabamento.',
  },
  {
    q: 'Vocês atendem empresas?',
    a: 'Sim. Oferecemos soluções sob medida para ambientes corporativos, como escritórios, recepções e espaços comerciais.',
  },
  {
    q: 'Em quais regiões vocês atendem?',
    a: 'Atendemos em todo o Rio de Janeiro e Niterói, incluindo Recreio, Barra da Tijuca, São Conrado, Leblon, Ipanema, Gávea, Jardim Botânico, Botafogo e Copacabana. Consulte o atendimento para o seu endereço.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Perguntas frequentes" title="Tudo o que você precisa saber" />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.q} delay={i * 40}>
                <div>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-serif text-lg font-medium text-foreground sm:text-xl">
                        {faq.q}
                      </span>
                      <Plus
                        className={cn(
                          'h-5 w-5 shrink-0 text-accent transition-transform duration-300',
                          isOpen && 'rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-8 text-sm font-light leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
