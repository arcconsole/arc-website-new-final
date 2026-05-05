import { motion } from 'motion/react';
import { 
  Cpu, 
  Globe, 
  ChevronRight, 
  Play, 
  Calendar, 
  ArrowRight,
  Zap,
  Layers,
  Youtube
} from 'lucide-react';
import React, { useState, type ReactNode } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-arc-bg text-white overflow-x-hidden">

      {/* 1. WHY - Problem Statement / Manifesto */}
      <section id="manifesto" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeInWhenVisible>
            <div className="mono text-arc-lime mb-6">01 / Manifesto</div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9]">
              GAMING IS <br />
              <span className="text-zinc-600">BROKEN.</span>
            </h2>
            <div className="mt-12 space-y-4">
              {[
                "FRAGMENTED SYSTEMS",
                "PERFORMANCE GAP",
                "ACCESSIBILITY BARRIERS"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] text-zinc-500 font-semibold tracking-widest">
                  <div className="w-1 h-1 bg-arc-lime" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <div className="relative">
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-lg">
                The ecosystem is fragmented. Mobile lacks depth. Consoles lack freedom. We are here to rebuild the bridge between power and portability. The current state of gaming is built on silos. You're either tethered to a desk, locked in a living room, or limited by the hardware in your pocket. 
              </p>
              
              <div className="mt-16 relative h-48 w-full max-w-md rounded-2xl overflow-hidden glass border-white/5">
                <div className="absolute inset-0 grid-fragment opacity-40"></div>
                <div className="absolute bottom-4 left-6 mono text-[8px] text-zinc-500 tracking-normal opacity-60">System Diagnostics: Error 404_Unified_Logic</div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 2. HOW - Ecosystem */}
      <section id="hardware" className="py-24 md:py-48 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-24">
              <span className="mono text-arc-lime mb-4 block">02 / Architecture</span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">ECOSYSTEM FIRST.</h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Cpu className="w-5 h-5 text-arc-lime" />, 
                title: "HARDWARE", 
                desc: "ARC One Handheld Console tuned for hyper-performance."
              },
              { 
                icon: <Layers className="w-5 h-5 text-arc-violet" />, 
                title: "OWL OS", 
                desc: "Custom ultra-low latency gaming kernel built for instant play."
              },
              { 
                icon: <Globe className="w-5 h-5 text-arc-lime" />, 
                title: "SERVICES", 
                desc: "Cloud Play & Unified Identity services for seamless synchronization."
              }
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="group relative p-10 glass rounded-2xl overflow-hidden transition-all duration-500 border-white/5 hover:border-white/10">
                  <div className="relative z-10">
                    <div className="mb-8 p-3 w-fit rounded-lg bg-white/5 border border-white/5 group-hover:border-arc-lime/30 transition-all">
                      {item.icon}
                    </div>
                    <div className="mono text-arc-lime mb-2">{item.title}</div>
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT - Product Overview */}
      <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <FadeInWhenVisible>
              <div className="flex flex-col gap-6">
                <div className="mono text-arc-violet">03 / The Product</div>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1]">A NEW KIND OF <br/>PLATFORM.</h2>
                <div className="space-y-4 mt-4">
                  {[
                    "High-performance handheld console",
                    "Fully integrated ecosystem",
                    "Seamless gaming across devices"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 glass rounded flex items-center justify-center border-white/10">
                        <Zap size={12} className="text-arc-lime" />
                      </div>
                      <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <button className="group flex items-center gap-4 px-8 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Explore ARC ONE</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
          <div className="order-1 lg:order-2">
            <FadeInWhenVisible delay={0.2}>
              <div className="relative p-8 md:p-16">
                <div className="absolute inset-0 bg-arc-lime/5 rounded-full blur-[100px]" />
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                  <img 
                    src="https://picsum.photos/seed/arc-device/1000/1000" 
                    alt="ARC Console Close-up" 
                    className="relative z-10 w-full h-auto rounded-3xl mix-blend-screen"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* DEVLOGS */}
      <section id="devlogs" className="py-24 md:py-48 px-6 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="mono text-zinc-500 mb-6">04 / Inside ARC</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Inside ARC</h2>
                <p className="text-zinc-500 text-lg">Building the future of gaming, in public.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowRight size={20} className="rotate-180" />
                </button>
                <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </FadeInWhenVisible>

          <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-2 -mx-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="min-w-[320px] md:min-w-[450px] group cursor-pointer">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={`https://picsum.photos/seed/arc-vlog-${i}/900/500`} 
                      alt={`Dev Update #${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-arc-lime rounded-full flex items-center justify-center text-black">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-arc-lime transition-colors">Evolution of the Controller: Dev Update #0{i}</h3>
                  <p className="text-gray-500 font-light flex items-center gap-2">
                    <Youtube size={16} /> 12:45 • Mar 12, 2026
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 md:py-48 px-6">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black border border-white/5 shadow-2xl">
            <div className="text-xs font-bold mb-2 tracking-widest uppercase text-white">Stay in the Loop</div>
            <p className="text-zinc-500 text-xs mb-10 max-w-xs mx-auto leading-tight">
              Early access and behind-the-scenes content directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm mx-auto">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-zinc-800 border-none rounded-lg flex-1 px-4 py-3 text-[10px] outline-none ring-1 ring-white/5 focus:ring-arc-lime/50 text-white transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-white text-black text-[10px] font-bold px-6 py-3 rounded-lg hover:bg-arc-lime transition-all uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* BLOG / UPDATES */}
      <section id="blog" className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-widest text-arc-violet font-bold mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Latest from ARC</h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Engineering the Owl OS Core", 
              desc: "Deep dive into how we achieved sub-5ms input latency on a mobile platform.",
              date: "Apr 15, 2026"
            },
            { 
              title: "The Vision for Cloud Play", 
              desc: "Why we believe physical ownership and cloud streaming must coexist.",
              date: "Apr 02, 2026"
            },
            { 
              title: "Dev Update #1: Handheld Chassis", 
              desc: "An inside look at the high-strength alloys and thermal solutions in ARC #1.",
              date: "Mar 20, 2026"
            }
          ].map((post, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="group p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.02] hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium tracking-wider">
                  <Calendar size={14} /> {post.date}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-arc-lime transition-colors">{post.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-1">{post.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/arc-logo-white.png" alt="ARC" className="h-8 w-auto" />
                <span className="text-2xl font-extrabold tracking-tighter">ARC</span>
              </div>
              <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed">
                Rebuilding the bridge between power and portability. The definitive handheld gaming ecosystem.
              </p>
            </div>
            
            <div>
              <h4 className="mono text-white mb-6">Ecosystem</h4>
              <ul className="space-y-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
                <li><a href="#hardware" className="hover:text-arc-lime transition-colors">Hardware</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">Owl OS</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">Developers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mono text-white mb-6">Social</h4>
              <ul className="space-y-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-arc-lime transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-arc-lime transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
            <p className="mono text-[8px] text-zinc-600">© 2026 ARC TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mono text-[8px] text-zinc-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Archive</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
