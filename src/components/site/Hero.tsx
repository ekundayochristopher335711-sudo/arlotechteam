import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Users,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const stats = [
  { icon: Rocket, number: "20+", label: "Projects Delivered" },
  { icon: Users, number: "15+", label: "Happy Clients" },
  { icon: BadgeCheck, number: "3+", label: "Years Experience" },
  { icon: Headphones, number: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07120C] text-white">
      {/* ── Desktop: full background image ── */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src="/building.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07120C] via-[#07120C]/85 to-[#07120C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07120C] via-transparent to-[#07120C]/50" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-8 lg:pt-40 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[.25em] text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Digital Solutions That Drive Growth
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.08] lg:text-7xl">
            We Build Digital
            <br />
            Experiences That
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-300 bg-clip-text text-transparent">
              Move Your Business
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-300/90 sm:text-base lg:text-lg lg:leading-8">
            We design and develop modern websites, web applications,
            and digital solutions that help businesses grow, connect
            with their audience, and stay ahead of the competition.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact#schedule"
              className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Start A Project
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </Link>
            <Link
              to="/work"
              className="flex items-center justify-center rounded-full border border-green-500/40 px-8 py-4 font-semibold text-green-400 transition hover:border-yellow-300 hover:bg-white/5"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile: image visible below text ── */}
      <div className="relative lg:hidden mx-6 mb-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,255,120,.1)]">
          <img
            src="/building.png"
            alt="Modern architecture"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:pb-28">
        <div className="grid grid-cols-4 gap-4 lg:gap-10 lg:max-w-2xl">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center gap-2 lg:gap-4">
              <div className="rounded-full border border-green-500/30 bg-green-500/10 p-2.5 lg:p-3">
                <item.icon size={18} className="text-green-300 lg:w-5 lg:h-5" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">{item.number}</h3>
                <p className="text-[10px] lg:text-xs text-zinc-400 leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
