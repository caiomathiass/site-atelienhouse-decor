import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex flex-col leading-none', className)}>
      <span className="font-serif text-[1.35rem] font-medium tracking-[0.02em] sm:text-[1.5rem]">
        Ateliê House
      </span>
      <span className="mt-0.5 text-[0.62rem] font-light uppercase tracking-[0.42em] text-accent">
        Cortinas
      </span>
    </span>
  )
}
