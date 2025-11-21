'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#0d1015] px-4 py-10">
      <div className="absolute inset-0">
        <Image src="/images/bg.png" alt="farm background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 grid max-w-5xl grid-cols-1 gap-6 rounded-[40px] bg-white/92 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md lg:grid-cols-2">
        <section className="space-y-5 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ad75ba]">open beta</p>
          <h1 className="text-3xl font-black lowercase text-[#2f1c1b] md:text-4xl">doodleduo</h1>
          <p className="text-sm text-[#4f3c3b]">
            a shared survival game for two people. send doodles, earn plant energy, and keep tiny animals alive. when both
            pets die, the farm resets—so stay active together.
          </p>
          <Link
            href="https://testflight.apple.com/join/9H3dkvdb"
            target="_blank"
            className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#e35070] to-[#ad75ba] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            download on testflight
          </Link>
          <ul className="text-sm text-[#695654]">
            <li>• individual animal hp + permadeath</li>
            <li>• wheat available day zero, crops heal by percentage</li>
            <li>• guided tutorial locks tabs until learned</li>
          </ul>
        </section>

        <section className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#fdd7e8] to-[#d7cbff] blur-2xl opacity-50" />
            <div className="relative rounded-[28px] bg-[#10121a] p-5 shadow-2xl">
              <video
                src="/videopreview.MOV"
                className="w-full rounded-2xl border border-white/15 object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-white/70">
                {['feed & revive', 'unlock new pets', 'send realtime notes', 'reset as a duo'].map((text) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl bg-white/10 p-2 text-center"
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
