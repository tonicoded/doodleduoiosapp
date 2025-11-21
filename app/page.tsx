'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TEST_FLIGHT_URL = 'https://testflight.apple.com/join/9H3dkvdb'

const featureHighlights = [
  {
    icon: '🎨',
    title: 'Realtime doodles',
    description: 'Sketch together from any timezone and watch the canvas update stroke-for-stroke.',
  },
  {
    icon: '🌾',
    title: 'Shared cozy farm',
    description: 'Adopt animals, decorate your vibe, and grow crops with every heart you earn.',
  },
  {
    icon: '✨',
    title: 'Widgets + live hearts',
    description: 'Lock Screen widgets pulse with your partner’s doodles, pings, and moods.',
  },
  {
    icon: '🔥',
    title: 'Hardcore streaks',
    description: 'Daily nudges, shared goals, and gentle dares keep the love loop warm.',
  },
  {
    icon: '💌',
    title: 'Love pings',
    description: 'Tap to send voice kisses, animated stickers, or super-fast “thinking of yous”.',
  },
  {
    icon: '📅',
    title: 'Guided prompts',
    description: 'Never run out of things to draw—prompts arrive throughout the day.',
  },
]

const ritualMoments = [
  {
    icon: '🌤️',
    title: 'Wake up scribble',
    detail: 'Leave a tiny doodle before your partner even turns off their alarm.',
  },
  {
    icon: '🍱',
    title: 'Lunch love ping',
    detail: 'Send a dare, reward, or quick “thinking of you” audio bubble.',
  },
  {
    icon: '🌙',
    title: 'Night farm check-in',
    detail: 'Tuck in the animals, water the seedlings, and log today’s best moment.',
  },
]

const buddyAnimals = [
  {
    name: 'Chickpea',
    description: 'A mischievous chicken who reminds you when the streak is wobbling.',
    image: '/images/chicken.png',
    accent: 'from-[#fff5f0] to-[#ffe4ed]',
  },
  {
    name: 'Mallow',
    description: 'The softest pig, obsessed with confetti whenever you finish a dare.',
    image: '/images/pig.png',
    accent: 'from-[#fff7fb] to-[#f5e9ff]',
  },
  {
    name: 'Luna',
    description: 'A sheep that delivers calming prompts when life feels loud.',
    image: '/images/sheep.png',
    accent: 'from-[#f4fbff] to-[#eaf3ff]',
  },
  {
    name: 'Bolt',
    description: 'A loyal horse who speeds up farm upgrades during streak storms.',
    image: '/images/horse.png',
    accent: 'from-[#fffbea] to-[#ffeecb]',
  },
]

const heroStats = [
  {
    label: 'beta builds shipped',
    value: '42',
    detail: 'updates since fall',
  },
  {
    label: 'live doodles / day',
    value: '24',
    detail: 'average between couples',
  },
  {
    label: 'farm mood',
    value: 'super cozy',
    detail: '🌱 gently thriving',
  },
]

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fff9f7] text-[#3a2c2b]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-70 farm-bg-mobile">
          <Image
            src="/images/bg.png"
            alt="Soft watercolor farm background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf4f5]/90 via-[#fff9f7]/95 to-white" />
        <div className="absolute -top-32 -right-10 w-[420px] h-[420px] rounded-full bg-[#ffd4e5]/40 blur-[120px]" />
        <div className="absolute -bottom-20 -left-12 w-[360px] h-[360px] rounded-full bg-[#e8d4ff]/40 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 lg:pt-24 lg:pb-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex flex-wrap items-center gap-3 text-sm lowercase font-semibold text-[#ad75ba]">
              <span className="px-4 py-1 rounded-full bg-white/80 shadow-sm border border-white/60">open beta</span>
              <a
                href={TEST_FLIGHT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#e35070] hover:underline"
              >
                join on testflight
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black lowercase leading-tight text-[#4c2f2c]">
                a playful farm for two hearts and one live doodleboard
              </h1>
              <p className="text-lg text-[#5d4946] lowercase max-w-xl">
                doodleduo keeps your relationship visible: scribble together in realtime, send love pings, and let a
                tiny farm grow as your rituals stay warm. join the iOS open beta and watch the farm bloom in real time.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#download"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e35070] to-[#ad75ba] text-white font-semibold lowercase shadow-lg hover:shadow-xl"
              >
                see how to join
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={TEST_FLIGHT_URL}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white/80 border border-white/60 text-[#e35070] font-semibold lowercase shadow-md hover:bg-white"
              >
                download via testflight
              </motion.a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-black text-[#653f3c]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-[#ad75ba]">{stat.label}</p>
                  <p className="text-xs text-[#7c5e5a]">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[36px] bg-white/90 border border-white/70 shadow-[0_25px_80px_rgba(0,0,0,0.15)] p-6 md:p-8 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, index) => (
                  <FloatingHeart key={index} index={index} delay={index * 0.25} />
                ))}
              </div>
              <div className="relative w-full h-[320px] sm:h-[360px]">
                <Image
                  src="/images/2.png"
                  alt="DoodleDuo board preview"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-contain drop-shadow-[0_20px_40px_rgba(99,64,59,0.35)]"
                />
              </div>
              <div className="relative mt-6 space-y-3">
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-[#ffeaf1] to-[#f3ecff]">
                  <div>
                    <p className="text-sm text-[#7c5e5a]">tonight&apos;s dare</p>
                    <p className="font-semibold lowercase text-[#4c2f2c]">draw your dream mini-date</p>
                  </div>
                  <span className="text-2xl">💗</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-[#fff7ed] to-[#fef0ff]">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#ad75ba]">streak</p>
                    <p className="text-lg font-black text-[#653f3c]">27 days</p>
                  </div>
                  <p className="text-sm text-[#7c5e5a]">farm growth +12%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ad75ba]">made for modern couples</p>
            <h2 className="text-3xl sm:text-4xl font-black lowercase text-[#4c2f2c]">
              the farm grows when you leave love in tiny ways
            </h2>
            <p className="text-base text-[#5d4946] lowercase">
              doodleduo is equal parts journaling, game, and shared sanctuary. you can draw, ping, dare, and nurture one
              living home screen together.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold lowercase text-[#4c2f2c]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#5d4946]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ad75ba]">daily rhythm</p>
            <h2 className="text-3xl font-black lowercase text-[#4c2f2c]">built for rituals, not doomscrolling</h2>
            <p className="text-base text-[#5d4946] lowercase">
              doodleduo slots into the edges of your day. a few minutes in the morning, a quick ping between meetings,
              and a tuck-in session at night is all it takes to keep the farm glowing.
            </p>
            <div className="space-y-4">
              {ritualMoments.map((moment) => (
                <div
                  key={moment.title}
                  className="flex items-start gap-4 rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm"
                >
                  <span className="text-3xl">{moment.icon}</span>
                  <div>
                    <h3 className="font-semibold lowercase text-[#4c2f2c]">{moment.title}</h3>
                    <p className="text-sm text-[#5d4946]">{moment.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] bg-white/95 border border-white/70 shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[#fff5f9] via-white to-[#f2f0ff]">
              <video
                src="/videopreview.MOV"
                controls
                playsInline
                poster="/images/bg.png"
                className="w-full h-full object-cover"
              >
                your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 backdrop-blur px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#ad75ba]">live board preview</p>
                  <p className="text-sm text-[#4c2f2c] lowercase">
                    doodles, pings, and streak boosts update instantly.
                  </p>
                </div>
                <span className="text-2xl">🎥</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-[40px] bg-gradient-to-br from-[#fde4ef] via-[#fef4f9] to-[#f2ecff] p-8 md:p-10 border border-white/60 shadow-inner">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-[#ad75ba]">farm mascots</p>
                <h2 className="text-3xl font-black lowercase text-[#4c2f2c]">these buddies keep you honest</h2>
                <p className="text-base text-[#5d4946] lowercase">
                  unlock new companions as your farm levels up. they each bring boosts, prompts, or little reminders so
                  you never ghost each other.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="self-start px-6 py-3 rounded-full bg-white/90 border border-white/70 shadow-md text-sm font-semibold lowercase text-[#653f3c]"
              >
                love grows with streaks 🔥
              </motion.div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {buddyAnimals.map((buddy) => (
                <div
                  key={buddy.name}
                  className={`flex items-center gap-4 rounded-3xl bg-gradient-to-r ${buddy.accent} border border-white/70 px-5 py-4`}
                >
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src={buddy.image}
                      alt={buddy.name}
                      fill
                      sizes="80px"
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg lowercase text-[#4c2f2c]">{buddy.name}</p>
                    <p className="text-sm text-[#5d4946]">{buddy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="max-w-4xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] bg-white/95 border border-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-10"
          >
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-[#ad75ba]">download + share</p>
              <h2 className="text-3xl font-black lowercase text-[#4c2f2c]">get doodleduo on your iphone today</h2>
              <p className="text-base text-[#5d4946] lowercase max-w-2xl mx-auto">
                install from TestFlight, invite your partner, and unlock the cozy farm in minutes. android + widget-only
                builds are underway—follow us on socials for drops.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={TEST_FLIGHT_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl bg-gradient-to-r from-[#e35070] to-[#ad75ba] px-8 py-4 text-center text-white font-semibold lowercase shadow-lg"
              >
                open testflight
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hello@doodleduo.app?subject=DoodleDuo%20Beta"
                className="rounded-3xl px-8 py-4 text-center bg-white border border-[#f3d3df] text-[#e35070] font-semibold lowercase shadow-md"
              >
                request a demo video
              </motion.a>
            </div>
            <p className="mt-6 text-center text-sm text-[#7c5e5a] lowercase">
              already installed? hop inside the app and share your invite code to bring friends along.
            </p>
          </motion.div>
        </section>

        <footer className="pb-10 text-center text-xs text-[#7c5e5a] px-6 lowercase">
          made with 💗 by doodleduo — keep sketching, keep growing.
        </footer>
      </div>
    </main>
  )
}

function FloatingHeart({ delay, index }: { delay: number; index: number }) {
  const colors = [
    'rgb(248, 158, 186)',
    'rgb(222, 125, 200)',
    'rgb(194, 135, 219)',
    'rgb(214, 168, 239)',
    'rgb(239, 175, 208)',
  ]

  const startX = [20, 45, 65, 85, 35][index] || 50
  const amplitude = [18, 22, 26, 18, 24][index] || 20

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.75, 0.75, 0],
        y: ['100%', '-20%'],
        x: [
          `${startX}%`,
          `${startX + amplitude / 2}%`,
          `${startX}%`,
          `${startX - amplitude / 2}%`,
          `${startX}%`,
        ],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ left: 0, bottom: 0 }}
    >
      <svg width="20" height="18" viewBox="0 0 20 18" fill={colors[index % colors.length]} className="opacity-75">
        <path d="M10 17.5C10 17.5 1 12 1 5.5C1 3.5 2.5 2 4.5 2C6.5 2 8.5 3.5 10 5.5C11.5 3.5 13.5 2 15.5 2C17.5 2 19 3.5 19 5.5C19 12 10 17.5 10 17.5Z" />
      </svg>
    </motion.div>
  )
}
