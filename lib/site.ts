export const WHATSAPP_URL =
  'https://wa.me/5521974668142?text=Ol%C3%A1%21%20Conheci%20a%20Ateli%C3%AA%20House%20Cortinas%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20cortina%20sob%20medida.'

export const WHATSAPP_DISPLAY = '+55 21 97466-8142'
export const INSTAGRAM_HANDLE = '@ateliehousecortinas'
export const INSTAGRAM_URL = 'https://instagram.com/ateliehousecortinas'

export const NAV_LINKS = [
  { label: 'Cortinas', href: '#cortinas' },
  { label: 'Tecidos', href: '/tecidos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const pad = (n: number) => String(n).padStart(2, '0')

// Fotografias reais fornecidas — cortinas instaladas em ambiente.
export const CORTINA_IMAGES = Array.from(
  { length: 10 },
  (_, i) => `/images/cortinas/cortina-${pad(i + 1)}.jpg`,
)

// Fotografias reais fornecidas — texturas de tecido.
export const TECIDO_IMAGES = Array.from(
  { length: 4 },
  (_, i) => `/images/tecidos/tecido-${pad(i + 1)}.jpg`,
)
