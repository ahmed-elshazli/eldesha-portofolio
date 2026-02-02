import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const cvUrl = '/Mostafa_Masoud_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mostafa_Masoud_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A1325]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold tracking-tight cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-white">Mostafa</span>
            <span className="text-[#B6FF00]"> Masoud</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('/', '-'))}
                className="text-white/70 hover:text-[#B6FF00] transition-colors text-sm tracking-wide relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B6FF00] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={downloadCV}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span className="hidden xl:inline">CV</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-2.5 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Talk</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 blur-xl bg-[#B6FF00] opacity-50 group-hover:opacity-75 transition-opacity" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}