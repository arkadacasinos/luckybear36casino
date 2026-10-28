import Image from 'next/image'

const REF_URL = 'https://combonorth.space/aeaofj2k27'

export default function Page() {
  return (
    <div className="lb-k3m9-root min-h-screen bg-[#0b0e14] text-[#e1e7ec] flex flex-col font-sans">
      {/* Mobile Drawer target anchor trick */}
      <div id="sidebar-menu" className="lb-k3m9-drawer-target hidden target:block fixed inset-0 z-50 lg:hidden">
        <a href="#!" className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-default" aria-label="Закрыть меню" />
        <aside className="fixed top-0 left-0 bottom-0 w-72 bg-[#0e131b] border-r border-[#1a2332] p-5 flex flex-col justify-between z-10 shadow-2xl overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1a2332]">
              <a href={REF_URL} className="flex items-center gap-2 text-white font-bold text-lg tracking-wider">
                <Image src="/bear-mascot.png" alt="Lucky Bear Mascot" width={32} height={32} className="rounded-full" />
                <span className="text-[#3b82f6]">LUCKY</span>BEAR
              </a>
              <a href="#!" className="text-gray-400 hover:text-white text-2xl font-bold p-1 leading-none" aria-label="Закрыть">
                &times;
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 p-1 bg-[#151c27] rounded-xl border border-[#1f2937]">
              <a href={REF_URL} className="py-2 text-center text-xs font-semibold rounded-lg bg-[#2563eb] text-white">
                Казино
              </a>
              <a href={REF_URL} className="py-2 text-center text-xs font-semibold rounded-lg text-gray-400 hover:text-white">
                Спорт
              </a>
            </div>

            <nav className="space-y-1">
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1a2434] text-[#60a5fa] text-sm font-medium">
                <span className="text-base">🏠</span> Главная
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">🍒</span> Слоты
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">⚡</span> Быстрые игры
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">🔥</span> Популярные
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">🎁</span> Покупка бонуса
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">✨</span> Новинки
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#151c27] hover:text-white text-sm font-medium">
                <span className="text-base">📺</span> Live-игры
              </a>
            </nav>

            <div className="pt-4 border-t border-[#1a2332] space-y-1">
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white">
                <span>🤝</span> Пригласить
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white">
                <span>🏆</span> Бонусы
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white">
                <span>💳</span> Пополнить
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white">
                <span>👤</span> Профиль
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1a2332] flex items-center justify-between text-xs text-gray-400">
            <div className="flex gap-2">
              <a href={REF_URL} className="w-7 h-7 rounded-full bg-[#1b2331] flex items-center justify-center hover:text-white">VK</a>
              <a href={REF_URL} className="w-7 h-7 rounded-full bg-[#1b2331] flex items-center justify-center hover:text-white">TG</a>
            </div>
            <span className="px-2 py-1 bg-[#1b2331] rounded text-[11px] text-gray-300">RU</span>
          </div>
        </aside>
      </div>

      {/* TOPBAR */}
      <header className="lb-k3m9-header sticky top-0 z-30 bg-[#0c1017] border-b border-[#18212e] px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <a
            href="#sidebar-menu"
            className="lg:hidden p-2 rounded-lg bg-[#141b25] border border-[#212c3d] text-gray-300 hover:text-white"
            aria-label="Открыть навигацию"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-xl tracking-wider">
            <Image src="/bear-mascot.png" alt="Lucky Bear Logo" width={30} height={30} className="rounded-full object-cover shrink-0" />
            <span className="text-[#3b82f6]">LUCKY</span><span className="text-white">BEAR</span>
          </a>
        </div>

        {/* Top nav links (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-gray-300">
          <a href={REF_URL} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131923] hover:bg-[#1b2432] border border-[#1e2736]">
            <span>🎁</span> Призовой пул
          </a>
          <a href={REF_URL} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131923] hover:bg-[#1b2432] border border-[#1e2736]">
            <span>⏱️</span> История
          </a>
          <a href={REF_URL} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131923] hover:bg-[#1b2432] border border-[#1e2736]">
            <span>🤍</span> Избранное
          </a>
          <a href={REF_URL} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#131923] hover:bg-[#1b2432] border border-[#1e2736]">
            <span>🎟️</span> Промокод
          </a>
        </div>

        {/* Auth CTA button */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={REF_URL}
            className="lb-k3m9-btn-auth px-3 sm:px-5 py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all text-center whitespace-nowrap"
          >
            <span className="hidden sm:inline">Зарегистрировать / Войти</span>
            <span className="sm:hidden">Вход / Регистрация</span>
          </a>
        </div>
      </header>

      {/* MAIN LAYOUT WRAPPER (Sidebar + Content) */}
      <div className="lb-k3m9-body-wrapper flex flex-1 w-full max-w-[1600px] mx-auto">
        {/* DESKTOP SIDEBAR */}
        <aside className="lb-k3m9-aside hidden lg:flex flex-col justify-between w-60 bg-[#0e131b] border-r border-[#171f2b] p-4 shrink-0">
          <div className="space-y-4">
            {/* Toggle Casino / Sport */}
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#141b24] rounded-xl border border-[#1d2735]">
              <a href={REF_URL} className="py-2 text-center text-xs font-bold rounded-lg bg-[#2563eb] text-white shadow-sm">
                Казино
              </a>
              <a href={REF_URL} className="py-2 text-center text-xs font-semibold rounded-lg text-gray-400 hover:text-white">
                Спорт
              </a>
            </div>

            {/* Nav icons */}
            <nav className="space-y-1">
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#1b2535] text-[#60a5fa] text-xs font-semibold">
                <span>🏠</span> Главная
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>🍒</span> Слоты
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>⚡</span> Быстрые игры
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>🔥</span> Популярные
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>🎁</span> Покупка бонуса
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>✨</span> Новинки
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-400 hover:bg-[#141b24] hover:text-white text-xs font-medium">
                <span>📺</span> Live-игры
              </a>
            </nav>

            <div className="pt-3 border-t border-[#1a2332] space-y-1">
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-1.5 text-xs text-gray-400 hover:text-white">
                <span>🤝</span> Пригласить
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-1.5 text-xs text-gray-400 hover:text-white">
                <span>🏆</span> Бонусы
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-1.5 text-xs text-gray-400 hover:text-white">
                <span>💳</span> Пополнить
              </a>
              <a href={REF_URL} className="flex items-center gap-3 px-3 py-1.5 text-xs text-gray-400 hover:text-white">
                <span>👤</span> Профиль
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#171f2b] flex items-center justify-between text-xs text-gray-400">
            <div className="flex gap-2">
              <a href={REF_URL} className="w-7 h-7 rounded-full bg-[#161e2b] flex items-center justify-center hover:text-white text-[10px] font-bold">VK</a>
              <a href={REF_URL} className="w-7 h-7 rounded-full bg-[#161e2b] flex items-center justify-center hover:text-white text-[10px] font-bold">TG</a>
              <a href={REF_URL} className="w-7 h-7 rounded-full bg-[#161e2b] flex items-center justify-center hover:text-white text-[10px] font-bold">IG</a>
            </div>
            <span className="px-2 py-0.5 bg-[#161e2b] rounded text-[11px] text-gray-300 font-mono">RU</span>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lb-k3m9-main flex-1 p-3 sm:p-5 lg:p-6 overflow-hidden flex flex-col gap-6">
          {/* ================= FIRST SCREEN (HERO & CARDS) ================= */}
          <section className="lb-k3m9-hero grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* BIG PROMO BANNER (col-span-8) */}
            <div className="lb-k3m9-banner-main lg:col-span-8 relative rounded-2xl bg-gradient-to-r from-[#0d1624] via-[#111f33] to-[#0a111c] border border-[#1d2a3f] overflow-hidden p-5 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[360px]">
              <div className="relative z-10 max-w-xs sm:max-w-md space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-[#60a5fa] text-[11px] sm:text-xs font-semibold tracking-wide uppercase border border-blue-500/30">
                  Приветственный пакет
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                  Бонус до{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb] drop-shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                    360%
                  </span>
                  <br />
                  за депозит!
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pr-8 sm:pr-0">
                  Активируй щедрый подарок в Lucky Bear Casino и начни выигрывать в лучших лицензионных слотах уже сегодня!
                </p>
                <div className="pt-2">
                  <a
                    href={REF_URL}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/40 transition-all transform hover:-translate-y-0.5"
                  >
                    Забрать 360% бонус
                  </a>
                </div>
              </div>

              {/* Girl image illustration */}
              <div className="absolute right-0 bottom-0 top-auto sm:top-0 w-44 sm:w-7/12 pointer-events-none opacity-80 sm:opacity-100 flex items-end justify-end">
                <Image
                  src="/hero-girl.png"
                  alt="Lucky Bear Casino Девушка с кубком победы"
                  width={600}
                  height={600}
                  priority
                  className="object-contain object-bottom max-h-[200px] sm:max-h-[380px] w-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* RIGHT COLUMN (2 STACKED CARDS, col-span-4) */}
            <div className="lb-k3m9-banner-sub lg:col-span-4 flex flex-col gap-4">
              {/* TOP CARD: Lucky Bonus 5,000,000 ₽ */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl bg-gradient-to-br from-[#121a26] to-[#0c1119] border border-[#1f2b3e] p-5 flex flex-col justify-between overflow-hidden min-h-[160px] sm:min-h-[170px] hover:border-blue-500/50 transition-all"
              >
                <div className="relative z-10 max-w-[65%]">
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    Ежедневно разыгрывается более
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] mt-1">
                    5,000,000 руб
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">Акция Lucky Bonus</div>
                </div>
                <div className="absolute right-1 bottom-1 top-1 w-2/5 flex items-center justify-center">
                  <Image
                    src="/hero-promo-bonus.png"
                    alt="Подарочные боксы и монеты"
                    width={200}
                    height={200}
                    className="object-contain max-h-[130px] group-hover:scale-105 transition-transform"
                  />
                </div>
              </a>

              {/* BOTTOM CARD: FS wait for you */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl bg-gradient-to-br from-[#121a26] to-[#0c1119] border border-[#1f2b3e] p-5 flex flex-col justify-between overflow-hidden min-h-[160px] sm:min-h-[170px] hover:border-blue-500/50 transition-all"
              >
                <div className="relative z-10 max-w-[60%] space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white">Твои FS уже ждут</div>
                  <div className="text-[11px] text-gray-400 leading-tight">
                    Просто пополни счёт — и получи бесплатные FS
                  </div>
                  <div className="pt-2">
                    <span className="inline-block px-4 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-bold shadow-md shadow-blue-600/30">
                      Получить FS
                    </span>
                  </div>
                </div>
                <div className="absolute right-1 bottom-0 top-0 w-5/12 flex items-end justify-center">
                  <Image
                    src="/hero-promo-fs.png"
                    alt="Фриспины в Lucky Bear"
                    width={220}
                    height={220}
                    className="object-contain max-h-[145px] object-bottom group-hover:scale-105 transition-transform"
                  />
                </div>
              </a>
            </div>
          </section>

          {/* ================= CATEGORY CHIPS & SEARCH BAR ================= */}
          <section className="lb-k3m9-categories flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="lb-x7q9-scroller flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2563eb] text-white text-xs font-semibold shrink-0">
                <span>🟦</span> Все
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>🍒</span> Слоты
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>⚡</span> Быстрые игры
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>🔥</span> Популярные
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>🎁</span> Покупка Бонуса
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>✨</span> Новинки
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141b25] hover:bg-[#1a2330] text-gray-300 text-xs font-medium shrink-0 border border-[#1d2838]">
                <span>📺</span> Live
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href={REF_URL} className="p-2.5 rounded-xl bg-[#141b25] border border-[#1d2838] text-gray-400 hover:text-white" aria-label="Поиск">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141b25] border border-[#1d2838] text-xs text-gray-300 hover:text-white">
                <span>Провайдеры</span>
                <span className="text-[10px]">▼</span>
              </a>
            </div>
          </section>

          {/* ================= SLOTS ROW ================= */}
          <section className="lb-k3m9-slots space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🍒</span> Слоты
              </h3>
              <a href={REF_URL} className="text-xs text-gray-400 hover:text-blue-400">
                Все &gt;
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {/* Slot 1: Gemstones Gold */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-gemstones.png" alt="Gemstones Gold slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">GEMSTONES GOLD</div>
                  <div className="text-[9px] text-amber-400 font-semibold">PGSOFT</div>
                </div>
              </a>

              {/* Slot 2: Crown Coins */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-crown.png" alt="Crown Coins slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">CROWN COINS</div>
                  <div className="text-[9px] text-red-400 font-semibold">ENDORPHINA</div>
                </div>
              </a>

              {/* Slot 3: 3 Coin Peacock */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-peacock.png" alt="3 Coin Peacock slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">3 COIN PEACOCK</div>
                  <div className="text-[9px] text-cyan-400 font-semibold">3OAKS</div>
                </div>
              </a>

              {/* Slot 4: Wild Bounty Showdown */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-cowgirl.png" alt="Wild Bounty Showdown slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">WILD BOUNTY</div>
                  <div className="text-[9px] text-amber-400 font-semibold">PGSOFT</div>
                </div>
              </a>

              {/* Slot 5: Wild Bandito */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-bandito.png" alt="Wild Bandito slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">WILD BANDITO</div>
                  <div className="text-[9px] text-purple-400 font-semibold">PGSOFT</div>
                </div>
              </a>

              {/* Slot 6: Fortune Garuda 1000 */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-garuda.png" alt="Fortune Garuda 1000 slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">FORTUNE GARUDA</div>
                  <div className="text-[9px] text-yellow-400 font-semibold">PRAGMATIC</div>
                </div>
              </a>

              {/* Slot 7: Anubis Wrath */}
              <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#131a24] border border-[#1d2736] hover:border-blue-500/60 transition-all aspect-[4/5] flex flex-col justify-end">
                <Image src="/slot-anubis.png" alt="Anubis Wrath slot" fill sizes="(max-width: 768px) 50vw, 15vw" className="object-cover group-hover:scale-105 transition-transform" />
                <div className="relative z-10 p-2 bg-gradient-to-t from-black via-black/60 to-transparent text-center">
                  <div className="text-[11px] font-bold text-white truncate">ANUBIS WRATH</div>
                  <div className="text-[9px] text-blue-400 font-semibold">PGSOFT</div>
                </div>
              </a>
            </div>
          </section>

          {/* ================= SEO ARTICLE CONTENT (300-400 WORDS WITH ALL KEYWORDS) ================= */}
          <article className="lb-k3m9-article mt-8 pt-8 border-t border-[#18212e] space-y-8 max-w-5xl">
            <section id="official-portal" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#2563eb] rounded-full inline-block" />
                Lucky Bear Casino и Luckybear Casino: официальный сайт азартного клуба
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Добро пожаловать на проверенную игровую площадку <strong>Lucky Bear Casino</strong>.
                Для каждого любителя ярких эмоций и щедрых джекпотов бренд <strong>Luckybear Casino</strong> стал
                синонимом надежности и честных выигрышей. Наш <strong>Luckybear Casino официальный сайт</strong> разработан
                с учетом актуальных требований к безопасности, обеспечивая мгновенную загрузку лицензионных аппаратов,
                защиту личных данных и оперативный вывод выигрышей на карты и криптовалютные кошельки. Если вы ищете
                премиальный гемблинг с лучшими провайдерами мира, то современный <strong>Luckybear Casino официальный</strong> портал
                предлагает коллекцию из более чем 4000 автоматов с высоким процентом отдачи RTP.
              </p>
            </section>

            <section id="mirror-access" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#2563eb] rounded-full inline-block" />
                Luckybear Casino зеркало и Лаки Бир Казино зеркало для бесперебойного входа
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Периодические сетевые ограничения не помешают вам наслаждаться любимыми слотами, поскольку рабочее{' '}
                <strong>Luckybear Casino зеркало</strong> доступно круглосуточно. Альтернативный адрес полностью
                дублирует функционал главной страницы, позволяя активировать бонусы, участвовать в турнирах и
                заказывать выплаты без задержек. Используя проверенное <strong>Лаки Бир Казино зеркало</strong>,
                игроки получают прямой защищенный доступ к своему балансу и истории ставок. Синхронизация данных
                происходит в режиме реального времени, поэтому переход на дублирующий домен полностью безопасен и
                комфортен как с компьютера, так и с мобильного телефона.
              </p>
            </section>

            <section id="online-overview" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#2563eb] rounded-full inline-block" />
                Лаки Бир Казино онлайн: играть на официальном сайте Lucky Bear Казино
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Популярное <strong>Лаки Бир Казино</strong> дарит каждому гостю впечатляющий стартовый бонус до 360% на первые
                депозиты, а также щедрые пакеты бесплатных вращений. Запуская <strong>Лаки Бир Казино онлайн</strong>,
                вы открываете доступ к сертифицированным аппаратам от таких гигантов индустрии, как Pragmatic Play,
                PG Soft, 3Oaks и Endorphina. Удобная навигация позволяет мгновенно фильтровать игры по категориям,
                выбирать популярные настольные дисциплины или запускать трансляции с реальными крупье в Live-режиме.
                Посетив <strong>Lucky Bear Казино</strong>, каждый участник оценит прозрачные правила программы лояльности,
                постоянный кэшбэк и ежедневные розыгрыши многомиллионного призового фонда Lucky Bonus.
              </p>
            </section>

            <section id="official-service" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 bg-[#2563eb] rounded-full inline-block" />
                Лаки Бир Казино официальный сайт и клуб Лакибир Казино: быстрый вход на Лаки Бир Казино сайт
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Авторитетный <strong>Лаки Бир Казино официальный сайт</strong> создан для пользователей, ценящих безупречный
                сервис, прозрачные правила и круглосуточную поддержку. Если вам привычнее название <strong>Лакибир Казино</strong> или{' '}
                <strong>Лакибир Казино официальный сайт</strong>, вы окажетесь на единой сертифицированной платформе с тысячами слотов. Наш
                оригинальный <strong>Лаки Бир Казино официальный</strong> ресурс гарантирует честный расчет выигрышей с
                помощью генератора случайных чисел, прошедшего независимый международный аудит eCOGRA. Выбирайте надежный{' '}
                <strong>Лаки Бир Казино сайт</strong>, также известный как <strong>Luckybear Casino официальный сайт</strong>, регистрируйтесь в один клик и получайте максимальное удовольствие
                от каждой игровой сессии. Наш проверенный <strong>Лаки Бир Казино сайт</strong> обеспечивает мгновенный вывод средств на карты и криптокошельки.
              </p>
            </section>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#121824] border border-[#1d2737]">
                <div className="text-[#3b82f6] text-xl font-bold">360% Бонус</div>
                <div className="text-xs text-gray-400 mt-1">Приветственный подарок за первое пополнение счёта</div>
              </div>
              <div className="p-4 rounded-xl bg-[#121824] border border-[#1d2737]">
                <div className="text-[#3b82f6] text-xl font-bold">24/7 Зеркало</div>
                <div className="text-xs text-gray-400 mt-1">Бесперебойный вход и стабильная игра без блокировок</div>
              </div>
              <div className="p-4 rounded-xl bg-[#121824] border border-[#1d2737]">
                <div className="text-[#3b82f6] text-xl font-bold">Быстрые выплаты</div>
                <div className="text-xs text-gray-400 mt-1">Вывод выигрышей на карты и криптовалюту за пару минут</div>
              </div>
            </div>

            {/* CTA inside article */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#17253d] to-[#0f1726] border border-[#233550] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-white">Готовы начать игру в Lucky Bear Casino?</div>
                <div className="text-xs text-gray-400 mt-1">Получите бонус до 360% и фриспины сразу после быстрой регистрации.</div>
              </div>
              <a
                href={REF_URL}
                className="px-6 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-bold shadow-lg shadow-blue-600/40 whitespace-nowrap"
              >
                Перейти к регистрации
              </a>
            </div>
          </article>
        </main>
      </div>

      {/* ================= FOOTER & HASHTAGS ================= */}
      <footer className="lb-k3m9-footer border-t border-[#18212e] bg-[#090d13] py-8 px-4 sm:px-8 mt-12">
        <div className="max-w-[1600px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#141b25]">
            <a href={REF_URL} className="flex items-center gap-2 text-white font-extrabold text-lg">
              <Image src="/bear-mascot.png" alt="Lucky Bear Footer" width={28} height={28} className="rounded-full" />
              <span className="text-[#3b82f6]">LUCKY</span>BEAR CASINO
            </a>
            <div className="text-xs text-gray-400 text-center sm:text-right">
              © 2026 Lucky Bear Casino. Все права защищены. 18+
            </div>
          </div>

          {/* Keyword Hashtags linked to internal sections as per requirements */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Тематическая навигация и теги:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#official-portal" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #lucky_bear_casino
              </a>
              <a href="#official-portal" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #luckybear_casino
              </a>
              <a href="#mirror-access" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #luckybear_casino_зеркало
              </a>
              <a href="#official-portal" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #luckybear_casino_официальный
              </a>
              <a href="#official-portal" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #luckybear_casino_официальный_сайт
              </a>
              <a href="#online-overview" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #lucky_bear_казино
              </a>
              <a href="#online-overview" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино
              </a>
              <a href="#official-service" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лакибир_казино
              </a>
              <a href="#mirror-access" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино_зеркало
              </a>
              <a href="#online-overview" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино_онлайн
              </a>
              <a href="#official-service" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино_официальный
              </a>
              <a href="#official-service" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино_официальный_сайт
              </a>
              <a href="#official-service" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лакибир_казино_официальный_сайт
              </a>
              <a href="#official-service" className="px-2.5 py-1 rounded-md bg-[#121824] text-gray-400 hover:text-[#60a5fa] hover:bg-[#182233] transition-colors">
                #лаки_бир_казино_сайт
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
