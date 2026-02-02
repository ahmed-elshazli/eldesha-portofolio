import { motion } from 'motion/react';
import { Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';

const experiences = [
  {
    id: 1,
    year: '2024 - Present',
    role: 'Senior UI/UX Designer',
    company: 'Creative Studio Inc.',
    description: 'Leading design initiatives for major clients, creating comprehensive design systems, and mentoring junior designers.',
    achievements: [
      'Designed 15+ successful products',
      'Increased user engagement by 40%',
      'Built reusable design system',
    ],
    color: '#B6FF00',
    type: 'current',
  },
  {
    id: 2,
    year: '2022 - 2024',
    role: 'Graphic & Brand Designer',
    company: 'Digital Agency XYZ',
    description: 'Developed complete brand identities, marketing materials, and visual campaigns for startups and established businesses.',
    achievements: [
      'Created 30+ brand identities',
      'Won Best Design Award 2023',
      'Led team of 5 designers',
    ],
    color: '#FF00B6',
    type: 'past',
  },
  {
    id: 3,
    year: '2020 - 2022',
    role: 'Junior Designer',
    company: 'StartUp Design Hub',
    description: 'Started career focusing on UI design, illustrations, and social media graphics for various clients.',
    achievements: [
      'Completed 50+ projects',
      'Mastered Adobe Creative Suite',
      'Built strong portfolio',
    ],
    color: '#00FFB6',
    type: 'past',
  },
  {
    id: 4,
    year: '2019 - 2020',
    role: 'Freelance Designer',
    company: 'Self-Employed',
    description: 'Worked with diverse clients worldwide, building expertise in both graphic design and UI/UX.',
    achievements: [
      '100+ satisfied clients',
      '5-star average rating',
      'Diverse project portfolio',
    ],
    color: '#FFB600',
    type: 'past',
  },
];

const stats = [
  { label: 'Years Experience', value: '5+', icon: Calendar },
  { label: 'Projects Completed', value: '200+', icon: Briefcase },
  { label: 'Happy Clients', value: '150+', icon: Award },
  { label: 'Success Rate', value: '98%', icon: TrendingUp },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
            My Journey
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Professional
            <span className="text-[#B6FF00] block mt-2">Experience</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A creative journey spanning over 5 years, transforming ideas into impactful designs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:border-[#B6FF00]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#B6FF00]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#B6FF00]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#B6FF00]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Experience Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Decorative Corner Elements */}
                <div 
                  className="absolute -top-3 -left-3 w-20 h-20 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: exp.color }}
                />
                <div 
                  className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 h-full group-hover:border-white/20 transition-all overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Decorative Line */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-50"
                    style={{ 
                      background: `linear-gradient(90deg, ${exp.color} 0%, transparent 100%)` 
                    }}
                  />

                  {/* Icon & Year */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${exp.color}20` }}
                    >
                      <Briefcase className="w-7 h-7" style={{ color: exp.color }} />
                    </div>
                    
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                        exp.type === 'current'
                          ? 'bg-[#B6FF00]/20 border-[#B6FF00]/40 text-[#B6FF00]'
                          : 'bg-white/5 border-white/20 text-white/70'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{exp.year}</span>
                    </motion.div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: exp.color }}
                    />
                    <p
                      className="text-lg font-semibold"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6 min-h-[60px]">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                      <Award className="w-4 h-4 text-[#B6FF00]" />
                      <span className="font-semibold">Key Achievements:</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="text-white/60 text-sm flex items-start gap-3"
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${exp.color}15, transparent 70%)`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#B6FF00]/20 to-purple-600/20 backdrop-blur-xl border border-[#B6FF00]/30 rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-white/70 mb-6">
              With years of experience and a passion for design, I'm ready to bring your vision to life.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}