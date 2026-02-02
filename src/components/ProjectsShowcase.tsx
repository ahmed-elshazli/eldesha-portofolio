import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const graphicProjects = [
  {
    id: 1,
    title: 'Brand Identity - Modern Tech',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2OTY1ODEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#B6FF00',
  },
  {
    id: 2,
    title: 'Poster Series - Music Festival',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FF00B6',
  },
  {
    id: 3,
    title: 'Corporate Package Design',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2OTYwNzk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00FFB6',
  },
  {
    id: 4,
    title: 'Editorial Layout - Magazine',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FFB600',
  },
];

const uiuxProjects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'Web Design',
    description: 'A comprehensive admin panel with analytics and inventory management.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'Mobile App',
    description: 'Workout tracking with social features.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjAyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Banking App Redesign',
    category: 'UX Design',
    description: 'Simplifying complex financial flows.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProjectsShowcase({ onNavigateToGraphic, onNavigateToUIUX }: { onNavigateToGraphic: () => void; onNavigateToUIUX: () => void }) {
  const graphicRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: graphicRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Graphic Design Section */}
      <div className="mb-32" id="graphic">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
                  Visual Storytelling
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Graphic Design
                </h2>
              </div>
              <motion.button
                onClick={onNavigateToGraphic}
                whileHover={{ x: 5 }}
                className="hidden lg:flex items-center gap-2 text-white/70 hover:text-[#B6FF00] transition-colors group"
              >
                See All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div ref={graphicRef} className="overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 px-6 lg:px-12"
          >
            {graphicProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group flex-shrink-0 w-[350px] lg:w-[450px] h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-[#1A1325]/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <motion.span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
                    style={{
                      backgroundColor: `${project.color}20`,
                      borderColor: `${project.color}40`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="flex items-center gap-2 text-[#B6FF00] font-semibold"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 80px ${project.color}40`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile See All Button */}
        <div className="lg:hidden max-w-[1400px] mx-auto px-6 mt-8">
          <motion.button
            onClick={onNavigateToGraphic}
            whileHover={{ scale: 1.02 }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:border-[#B6FF00]/50 hover:text-[#B6FF00] transition-all group"
          >
            See All Graphic Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* UI/UX Section */}
      <div id="ui-ux" className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
                Digital Experiences
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                UI/UX Projects
              </h2>
            </div>
            <motion.button
              onClick={onNavigateToUIUX}
              whileHover={{ x: 5 }}
              className="hidden lg:flex items-center gap-2 text-white/70 hover:text-[#B6FF00] transition-colors group"
            >
              See All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured Large Project */}
          {uiuxProjects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:col-span-7 group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-[#1A1325]/40 to-transparent" />
                
                {/* Floating Mockup Effect */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  whileHover={{ y: -5 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-[#B6FF00]/20 border border-[#B6FF00]/30 text-[#B6FF00]">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-[#B6FF00] font-semibold"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[inset_0_0_80px_rgba(182,255,0,0.2)]" />
              </motion.div>
            ))}

          {/* Secondary Projects */}
          <div className="lg:col-span-5 space-y-6">
            {uiuxProjects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative h-[285px] rounded-3xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-[#1A1325]/60 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-purple-500/20 border border-purple-500/30 text-purple-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-white/60 mb-3">{project.description}</p>
                    <motion.div
                      className="flex items-center gap-2 text-[#B6FF00] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Glow border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B6FF00]/30 rounded-3xl transition-all pointer-events-none" />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Mobile See All Button */}
        <div className="lg:hidden mt-8">
          <motion.button
            onClick={onNavigateToUIUX}
            whileHover={{ scale: 1.02 }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:border-[#B6FF00]/50 hover:text-[#B6FF00] transition-all group"
          >
            See All UI/UX Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}