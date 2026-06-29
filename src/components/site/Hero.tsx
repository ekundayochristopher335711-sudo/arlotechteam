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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0f3d27,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#07120c,#081710)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 py-24 lg:flex-row">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[.3em] text-green-300">
            <span className="mr-2 mt-0.5 inline-block h-2 w-2 rounded-full bg-green-400" />
            Digital Solutions That Drive Growth
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] lg:text-7xl">
            We Build Digital
            <br />
            Experiences That
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-300 bg-clip-text text-transparent">
              Move Your Business
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            We design and develop modern websites, web applications,
            and digital solutions that help businesses grow, connect
            with their audience, and stay ahead of the competition.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact#schedule"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Start A Project
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </Link>
            <Link
              to="/work"
              className="rounded-full border border-green-500/40 px-8 py-4 font-semibold text-green-400 transition hover:border-yellow-300 hover:bg-white/5"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="rounded-full border border-green-500/30 bg-green-500/10 p-3">
                  <item.icon size={20} className="text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{item.number}</h3>
                  <p className="text-sm text-zinc-400">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1"
        >
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full border border-green-500/20" />
          <div className="absolute right-10 top-0 h-[500px] w-[500px] rounded-full border border-yellow-300/10" />
          <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />

          <div className="relative overflow-hidden rounded-[42px] border border-white/10 shadow-[0_40px_120px_rgba(0,255,120,.15)]">
            <img
              src="/building.jpg"
              alt="Modern architecture"
              className="h-[650px] w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -left-8 bottom-10 rounded-3xl border border-green-500/20 bg-[#0b1d13]/90 p-6 backdrop-blur-xl"
          >
            <h3 className="text-lg font-bold">
              Building
              <br />
              Digital Futures
            </h3>
            <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-yellow-300">
              <Rocket className="text-black" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
