
'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/95 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#inicio"
          aria-label="Ateliê House Cortinas — início"
          className="shrink-0"
        >
          <Logo
            className={cn(
              'transition-colors duration-500',
              scrolled ? 'text-foreground' : 'text-white',
            )}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-[0.78rem] font-light uppercase tracking-[0.16em] transition-colors hover:text-accent',
                    scrolled ? 'text-foreground/70' : 'text-white/90',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-foreground/80 bg-foreground px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-background transition-all duration-300 hover:border-accent hover:bg-accent md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-[#171513] px-6 pt-24 transition-all duration-500 lg:hidden',
          open
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Navegação móvel">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href} className="border-b border-border/60">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl text-foreground transition-colors hover:text-accent"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-accent-foreground"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar orçamento
        </a>
      </div>
    </header>
  )
}

