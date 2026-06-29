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
    <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden bg-[#07120C] text-white flex flex-col justify-between">
      {/* Background image */}
      <img
        src="/building.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* Overlay — lighter on mobile so image shows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07120C]/90 via-[#07120C]/60 to-transparent lg:from-[#07120C] lg:via-[#07120C]/80 lg:to-[#07120C]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07120C]/90 via-transparent to-[#07120C]/30" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20 lg:py-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-[9px] sm:text-xs font-semibold uppercase tracking-[.2em] sm:tracking-[.25em] text-green-300">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Digital Solutions That Drive Growth
            </span>

            <h1 className="mt-5 text-[2rem] sm:text-5xl font-black leading-[1.1] lg:text-7xl">
              We Build Digital
              <br />
              Experiences That
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-300 bg-clip-text text-transparent">
                Move Your Business
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[13px] sm:text-base leading-6 sm:leading-7 text-zinc-300 lg:text-lg lg:leading-8 lg:max-w-lg">
              We design and develop modern websites, web applications,
              and digital solutions that help businesses grow, connect
              with their audience, and stay ahead of the competition.
            </p>

            <div className="mt-7 flex gap-3 sm:gap-4">
              <Link
                to="/contact#schedule"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 px-5 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Start A Project
                <ArrowRight className="transition group-hover:translate-x-1" size={16} />
              </Link>
              <Link
                to="/work"
                className="flex items-center rounded-full border border-green-500/40 px-5 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-green-400 transition hover:border-yellow-300 hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pb-8 lg:pb-16 w-full">
        <div className="grid grid-cols-4 gap-2 sm:gap-6 lg:gap-10 lg:max-w-2xl">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 sm:gap-3 lg:gap-4">
              <div className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 p-1.5 sm:p-2.5 lg:p-3">
                <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-300" />
              </div>
              <div>
                <h3 className="text-sm sm:text-xl lg:text-2xl font-bold leading-none">{item.number}</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-zinc-400 leading-tight mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
