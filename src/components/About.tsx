import { motion } from 'motion/react';
import { Lightbulb, Target, Users, Award } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '5+' },
  { icon: Target, label: 'Projects Completed', value: '120+' },
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: Lightbulb, label: 'Design Awards', value: '8' },
];

const philosophy = [
  {
    title: 'User-Centered',
    description: 'Every design decision is rooted in user research and empathy.',
    color: '#B6FF00',
  },
  {
    title: 'Pixel Perfect',
    description: 'Attention to detail transforms good design into exceptional experiences.',
    color: '#FF00B6',
  },
  {
    title: 'Innovation First',
    description: 'Pushing boundaries while maintaining usability and accessibility.',
    color: '#00FFB6',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Transforming Ideas into
            <span className="text-[#B6FF00]"> Visual Excellence</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#B6FF00]/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#B6FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#B6FF00]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#B6FF00]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[#B6FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all h-full">
                {/* Decorative Element */}
                <motion.div
                  className="w-16 h-1 rounded-full mb-6"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
                
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Design is not just what it looks like,
                <span className="text-[#B6FF00]"> it's how it works</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                With over 5 years of experience in graphic and UI/UX design, I've helped
                brands and startups create meaningful digital experiences that drive
                engagement and conversion.
              </p>
              <p className="text-white/70 leading-relaxed">
                My approach combines strategic thinking with creative execution, ensuring
                every project not only looks stunning but also achieves its business goals.
                I believe in the power of design to solve problems and tell stories.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { skill: 'UI/UX Design', level: 95 },
                { skill: 'Brand Identity', level: 90 },
                { skill: 'User Research', level: 85 },
                { skill: 'Prototyping', level: 92 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{item.skill}</span>
                    <span className="text-[#B6FF00]">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#B6FF00] to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
