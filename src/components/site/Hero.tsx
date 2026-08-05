import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users, BadgeCheck, Headphones } from "lucide-react";

const stats = [
  { icon: Rocket,      number: "20+", label: "Projects Delivered" },
  { icon: Users,       number: "15+", label: "Happy Clients"      },
  { icon: BadgeCheck,  number: "3+",  label: "Years Experience"   },
  { icon: Headphones,  number: "24/7",label: "Support"            },
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-screen overflow-hidden bg-[#050b18] text-white flex flex-col justify-between">

      {/* Background image */}
      <img
        src="/images/hero-building.jpg"
        alt=""
        width="1536"
        height="1024"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* Layered overlays — depth + left-to-right fade */}
      <div className="absolute inset-0 bg-linear-to-r from-[#050b18]/95 via-[#050b18]/70 to-[#050b18]/10" />
      <div className="absolute inset-0 bg-linear-to-t from-[#050b18] via-transparent to-[#050b18]/30" />

      {/* Atmospheric emerald glow — bottom-left */}
      <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.09] blur-[130px] pointer-events-none" />
      {/* Subtle amber glow — top-right */}
      <div className="absolute -top-10 right-1/4 h-[300px] w-[300px] rounded-full bg-amber-400/[0.04] blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-24 lg:py-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[.22em] text-emerald-300">
                Digital Solutions That Drive Growth
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-[2.2rem] sm:text-5xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight">
              We Build Digital
              <br />
              Experiences That
              <br />
              <span className="bg-linear-to-r from-emerald-400 via-emerald-300 to-yellow-300 bg-clip-text text-transparent">
                Move Your Business
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-md text-sm sm:text-base leading-7 text-zinc-300/90 lg:text-lg lg:leading-8 lg:max-w-lg">
              We design and develop modern websites, web applications, and digital
              solutions that help businesses grow and stay ahead of the competition.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact#schedule"
                className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-emerald-400 to-yellow-300 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-[#050b18] shadow-[0_8px_32px_-8px_rgba(52,211,153,0.5)] transition hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_rgba(52,211,153,0.6)]"
              >
                Start A Project
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats — premium glass tiles */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pb-10 lg:pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-start gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-4 py-3.5 backdrop-blur-md"
            >
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-1.5">
                <item.icon className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xl font-black leading-none text-white">{item.number}</p>
                <p className="mt-0.5 text-[10px] text-zinc-400 leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
