
import Image from 'next/image'

const tecidos = [
  {
    nome: 'Amostra de tecido 1',
    imagem: '/images/tecidos-1.jpg',
  },
  {
    nome: 'Amostra de tecido 2',
    imagem: '/images/tecidos-2.jpg',
  },
  {
    nome: 'Amostra de tecido 3',
    imagem: '/images/tecidos-3.jpg',
  },
]

export default function TecidosPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          Nosso catálogo
        </p>

        <h1 className="max-w-3xl font-serif text-4xl sm:text-6xl">
          Tecidos que transformam ambientes.
        </h1>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Conheça algumas opções de tecidos para cortinas sob medida.
          A disponibilidade de cores e texturas pode variar. Entre em
          contato para consultar as opções para seu projeto.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tecidos.map((tecido) => (
            <article key={tecido.imagem} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={tecido.imagem}
                  alt={tecido.nome}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-4 font-serif text-xl">{tecido.nome}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}