import { motion } from 'motion/react';
import { Figma, Palette, Layers, Smartphone, Monitor, Sparkles } from 'lucide-react';

const tools = [
  { name: 'Figma', icon: Figma, category: 'Design', color: '#B6FF00' },
  { name: 'Adobe CC', icon: Palette, category: 'Creative Suite', color: '#FF00B6' },
  { name: 'Prototyping', icon: Layers, category: 'Interaction', color: '#00FFB6' },
  { name: 'Mobile Design', icon: Smartphone, category: 'Platform', color: '#FFB600' },
  { name: 'Web Design', icon: Monitor, category: 'Platform', color: '#B6FF00' },
  { name: 'Design Systems', icon: Sparkles, category: 'Strategy', color: '#FF00B6' },
];

const expertise = [
  'UI/UX Design',
  'Brand Identity',
  'User Research',
  'Wireframing',
  'Prototyping',
  'Visual Design',
  'Interaction Design',
  'Design Thinking',
  'Accessibility',
  'Responsive Design',
  'Motion Graphics',
  'Typography',
];

export function Skills() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
            Skills & Tools
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            My Creative
            <span className="text-[#B6FF00]"> Arsenal</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all text-center">
                  <motion.div
                    className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${tool.color}15` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: tool.color }} />
                  </motion.div>
                  <h3 className="text-white font-semibold mb-1">{tool.name}</h3>
                  <p className="text-xs text-white/50">{tool.category}</p>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                    style={{ backgroundColor: `${tool.color}20` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expertise Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:border-[#B6FF00]/50 hover:bg-[#B6FF00]/5 transition-all cursor-default group"
              >
                <span className="text-sm group-hover:text-[#B6FF00] transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-6 text-lg">
            Ready to bring your vision to life?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Collaborate</span>
            <div className="absolute inset-0 blur-2xl bg-[#B6FF00] opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
