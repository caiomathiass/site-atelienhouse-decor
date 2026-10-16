import type { SVGProps } from 'react'
import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/site'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Ateliê especializado em cortinas de tecido sob medida. Atendimento personalizado para
              residências, empresas e arquitetos.
            </p>
            <p className="mt-4 text-[0.72rem] font-light uppercase tracking-[0.22em] text-taupe">
              Desde 2017 · Rio de Janeiro • Niterói
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground">
              Navegação
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-foreground">
              Contato
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-light text-muted-foreground transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-light text-muted-foreground transition-colors hover:text-accent"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs font-light text-muted-foreground">
            © {new Date().getFullYear()} Ateliê House Cortinas. Todos os direitos reservados.
          </p>
          <p className="text-xs font-light text-muted-foreground">Rio de Janeiro • Niterói</p>
        </div>
      </div>
    </footer>
  )
}
