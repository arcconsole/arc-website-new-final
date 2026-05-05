import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React, { useState, useRef } from 'react';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative bg-black text-[#a8a8a8] h-dvh overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/Sequence 01_2.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 md:bg-black/40" />


      {/* Hero Content - Positioned at bottom */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 md:pb-16 px-4">
        <div className="flex flex-col items-center text-white w-full max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-gilmer mb-2 md:mb-4"
          >
            Join the Waitlist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center text-[#a8a8a8] font-gilmer mb-4 text-lg md:text-2xl leading-tight md:leading-relaxed md:max-w-xl"
          >
            Be among the first to witness the next step in evolution. Receive first-hand updates. Stay tuned for the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full px-2 mt-2 md:px-0 md:mt-4"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full p-2 bg-black/25 rounded-lg md:backdrop-blur-sm md:p-3 md:bg-transparent"
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full md:flex-1 p-3 rounded-md bg-transparent text-white placeholder-white/60 border border-gray-400 md:bg-black/25 h-full mb-2 md:mb-0 outline-none focus:border-[#CCFF00]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:flex-1 bg-[#CCFF00] text-black font-semibold hover:brightness-110 rounded-xl py-3 md:py-4 md:text-base flex items-center justify-center gap-2 transition-all whitespace-nowrap disabled:opacity-60"
                >
                  {isSubmitting ? '...' : isSuccess ? 'Thanks!' : 'Join waitlist'}
                  {!isSubmitting && !isSuccess && <ArrowRight size={18} />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
