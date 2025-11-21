'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image src="/images/bg.png" alt="farm background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-5xl flex-col gap-8 rounded-[48px] bg-white/92 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-lg md:flex-row md:items-center md:p-12">
          <section className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ad75ba]">open beta</p>
            <h1 className="text-4xl font-black lowercase text-[#2f1c1b] md:text-5xl">
              doodled love keeps your farm alive
            </h1>
            <p className="text-base text-[#4f3c3b]">
              DoodleDuo is a tiny survival game for two people. Send drawings and love pings, earn plant energy, and keep a
              shared farm from collapsing. When all animals die, you start over together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://testflight.apple.com/join/9H3dkvdb"
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#e35070] to-[#ad75ba] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                download on testflight
              </Link>
              <a
                href="mailto:hey@doodleduo.app"
                className="inline-flex w-full items-center justify-center rounded-3xl border border-[#ad75ba]/40 px-8 py-4 text-sm font-semibold text-[#2f1c1b] hover:bg-white"
              >
                say hi to the team
              </a>
            </div>
            <ul className="text-sm text-[#695654]">
              <li className="py-1">• animals now have real HP bars + permadeath</li>
              <li className="py-1">• plants heal a % of the 24h timer (wheat unlocked immediately)</li>
              <li className="py-1">• tutorial locks each tab until couples learn it</li>
            </ul>
          </section>

          <section className="flex-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#fdd7e8] to-[#d7cbff] blur-3xl opacity-60" />
              <div className="relative rounded-[32px] bg-[#10121a] p-6 shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">preview</p>
                <Image
                  src="/images/2.png"
                  alt="app preview"
                  width={420}
                  height={300}
                  className="mx-auto mt-4 rounded-2xl object-contain"
                  priority
                />
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
                  {['keep animals fed', 'unlock cozy pets', 'send realtime doodles', 'reset together'].map((text) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl bg-white/5 p-3 text-center"
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
