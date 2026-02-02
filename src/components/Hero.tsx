import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Download } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // يمكنك استبدال هذا بملف CV الحقيقي
    const cvUrl = '/Mostafa_Masoud_CV.pdf'; // ضع ملف الـCV في المجلد public
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mostafa_Masoud_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#B6FF00]/20 to-purple-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-[#B6FF00]/20 blur-3xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/5 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#B6FF00]" />
              <span className="text-sm text-[#B6FF00]">Available for freelance</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Mostafa Masoud                <span className="block text-[#B6FF00] mt-2">Graphic & UI/UX  Designer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-white/70 leading-relaxed max-w-lg"
              >
                Crafting digital experiences that merge aesthetics with functionality. Every pixel tells a story, every interaction matters.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full overflow-hidden flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 blur-2xl bg-[#B6FF00] opacity-60 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>

              <motion.button
                onClick={downloadCV}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all backdrop-blur-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#B6FF00]/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-purple-500/30 rounded-full"
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#B6FF00] to-purple-600 opacity-50 blur-xl" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#B6FF00]/30">
                  <img
                    src="src/assets/desha.jpeg"
                    alt="Mostafa Masoud"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-transparent to-transparent opacity-40" />
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#1A1325]/90 backdrop-blur-xl border border-[#B6FF00]/30 rounded-full"
              >
                <p className="text-sm text-white/90">
                  <span className="text-[#B6FF00] font-semibold">5+ years</span> of design excellence
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}