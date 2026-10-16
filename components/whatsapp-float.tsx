'use client'

import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { cn } from '@/lib/utils'

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className={cn(
        'fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/20 transition-all duration-300 hover:brightness-110',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40" />
    </a>
  )
}
