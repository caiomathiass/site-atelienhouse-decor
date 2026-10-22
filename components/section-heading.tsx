
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
  id,
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-4 flex items-center gap-3 text-[0.7rem] font-light uppercase tracking-[0.3em]',
            isLight ? 'text-white/70' : 'text-accent',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'h-px w-8',
              isLight ? 'bg-white/50' : 'bg-accent',
            )}
          />
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={cn(
          'text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]',
          isLight ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-pretty text-base font-light leading-relaxed sm:text-lg',
            isLight ? 'text-white/80' : 'text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}