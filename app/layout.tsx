import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="bg-[#0b0e14]">
      <head>
        <meta charSet="utf-8" />
        <title>Lucky Bear Casino официальный сайт — Лаки Бир Казино вход и зеркало онлайн</title>
        <meta
          name="description"
          content="Официальный сайт Lucky Bear Casino и рабочее зеркало Лаки Бир Казино. Играть онлайн в слоты с бонусом до 360% на депозит и фриспинами. Быстрый вход, регистрация и моментальные выплаты."
        />
        <meta name="keywords" content="lucky bear casino, luckybear casino, luckybear casino зеркало, luckybear casino официальный сайт, lucky bear казино, лаки бир казино, лакибир казино, лаки бир казино зеркало, лаки бир казино онлайн, лаки бир казино официальный сайт, лакибир казино официальный сайт, лаки бир казино сайт" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luckybear36casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucky Bear Casino официальный сайт — Лаки Бир Казино вход и зеркало" />
        <meta
          property="og:description"
          content="Официальный сайт Lucky Bear Casino и рабочее зеркало Лаки Бир Казино. Играть онлайн в слоты с бонусом до 360% на депозит."
        />
        <meta property="og:url" content="https://luckybear36casino.vercel.app/" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta property="og:image" content="https://luckybear36casino.vercel.app/hero-girl.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucky Bear Casino официальный сайт — Лаки Бир Казино зеркало" />
        <meta
          name="twitter:description"
          content="Официальный сайт Lucky Bear Casino и зеркало Лаки Бир Казино. Бонус 360% на депозит и фриспины."
        />
        <meta name="twitter:image" content="https://luckybear36casino.vercel.app/hero-girl.png" />
        <meta name="theme-color" content="#0b0e14" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="bg-[#0b0e14] text-[#e1e7ec] antialiased selection:bg-[#1a73e8] selection:text-white">
        {children}
      </body>
    </html>
  )
}
