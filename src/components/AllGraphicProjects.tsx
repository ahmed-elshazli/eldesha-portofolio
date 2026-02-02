import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const allGraphicProjects = [
  {
    id: 1,
    title: 'Brand Identity - Modern Tech',
    category: 'Branding',
    description: 'Complete brand identity system for a tech startup including logo, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2OTY1ODEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#B6FF00',
  },
  {
    id: 2,
    title: 'Poster Series - Music Festival',
    category: 'Print Design',
    description: 'Eye-catching poster series for annual music festival with bold typography and vibrant colors.',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FF00B6',
  },
  {
    id: 3,
    title: 'Corporate Package Design',
    category: 'Packaging',
    description: 'Luxury packaging design for premium corporate gifts with elegant finishing touches.',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2OTYwNzk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00FFB6',
  },
  {
    id: 4,
    title: 'Editorial Layout - Magazine',
    category: 'Editorial',
    description: 'Modern magazine layout design with creative typography and visual hierarchy.',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FFB600',
  },
  {
    id: 5,
    title: 'Logo Design - Coffee Shop',
    category: 'Branding',
    description: 'Warm and inviting logo design for artisan coffee shop with custom typography.',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2OTY1ODEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#B6FF00',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Digital Design',
    description: 'Cohesive social media visual campaign for product launch across all platforms.',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FF00B6',
  },
  {
    id: 7,
    title: 'Book Cover Design',
    category: 'Editorial',
    description: 'Captivating book cover design that tells the story before you open the book.',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwfGVufDF8fHx8MTc2OTYwNzk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00FFB6',
  },
  {
    id: 8,
    title: 'Event Branding',
    category: 'Branding',
    description: 'Complete event branding including signage, badges, and promotional materials.',
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2OTU3ODQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FFB600',
  },
  {
    id: 9,
    title: 'Product Label Design',
    category: 'Packaging',
    description: 'Modern product label design with attention to regulatory requirements and aesthetics.',
    image: 'https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2OTY1ODEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#B6FF00',
  },
];

interface AllGraphicProjectsProps {
  onBack: () => void;
}

export function AllGraphicProjects({ onBack }: AllGraphicProjectsProps) {
  return (
    <section className="min-h-screen py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-[#B6FF00] transition-colors mb-8 group"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          <div className="text-center">
            <span className="text-[#B6FF00] text-sm tracking-widest uppercase mb-2 block">
              Portfolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Graphic Design
              <span className="text-[#B6FF00] block mt-2">Projects</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A collection of visual storytelling through branding, print design, and digital graphics.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGraphicProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-[#1A1325]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
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
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-white/60 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <motion.div
                  className="flex items-center gap-2 text-[#B6FF00] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
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

              {/* Border on Hover */}
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-30 rounded-3xl transition-all pointer-events-none"
                style={{ borderColor: project.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
