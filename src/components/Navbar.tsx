interface NavbarProps {
  showJoinButton: boolean;
}

export default function Navbar({ showJoinButton }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <img src="/arc-logo-white.png" alt="ARC" className="h-8 w-auto" />
        <span className="text-xl font-extrabold tracking-tighter text-white">ARC</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
        <a href="#manifesto" className="hover:text-white transition-colors">Ecosystem</a>
        <a href="#hardware" className="hover:text-white transition-colors">Hardware</a>
        <a href="#devlogs" className="hover:text-white transition-colors">Devlogs</a>
        <a href="#blog" className="hover:text-white transition-colors">Community</a>
      </div>
      <a
        href="#waitlist"
        className={`px-5 py-2 glass rounded-full text-[10px] font-bold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300 ${
          showJoinButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        Join Waitlist
      </a>
    </nav>
  );
}
