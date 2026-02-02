import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const allUIUXProjects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'Web Design',
    description: 'A comprehensive admin panel with analytics, inventory management, and sales tracking.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Dashboard', 'Analytics', 'E-Commerce'],
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'Mobile App',
    description: 'Workout tracking app with social features, progress monitoring, and personalized plans.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjAyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'Health', 'Social'],
  },
  {
    id: 3,
    title: 'Banking App Redesign',
    category: 'UX Design',
    description: 'Simplifying complex financial flows with intuitive navigation and clear information architecture.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Finance', 'Mobile', 'UX'],
  },
  {
    id: 4,
    title: 'Food Delivery Platform',
    category: 'Web & Mobile',
    description: 'End-to-end food delivery experience with real-time tracking and seamless ordering.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjAyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Food', 'Delivery', 'Cross-platform'],
  },
  {
    id: 5,
    title: 'Travel Booking Website',
    category: 'Web Design',
    description: 'Beautiful travel booking platform with immersive visuals and smooth user journey.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Travel', 'Booking', 'Web'],
  },
  {
    id: 6,
    title: 'Task Management App',
    category: 'Mobile App',
    description: 'Productivity app with smart task organization, collaboration tools, and time tracking.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjAyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Productivity', 'Mobile', 'Collaboration'],
  },
  {
    id: 7,
    title: 'Real Estate Platform',
    category: 'Web Design',
    description: 'Modern real estate platform with virtual tours, advanced search, and property comparison.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Real Estate', 'Search', 'Web'],
  },
  {
    id: 8,
    title: 'Music Streaming App',
    category: 'Mobile App',
    description: 'Immersive music streaming experience with personalized playlists and social sharing.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NjAyMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Music', 'Streaming', 'Mobile'],
  },
  {
    id: 9,
    title: 'Healthcare Portal',
    category: 'Web Design',
    description: 'Patient portal with appointment scheduling, medical records, and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3Njk2NTgxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Healthcare', 'Portal', 'Web'],
  },
];

interface AllUIUXProjectsProps {
  onBack: () => void;
}

export function AllUIUXProjects({ onBack }: AllUIUXProjectsProps) {
  return (
    <section className="min-h-screen py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
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
              UI/UX Design
              <span className="text-[#B6FF00] block mt-2">Projects</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Creating seamless digital experiences through user research, interaction design, and visual excellence.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {allUIUXProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group rounded-3xl overflow-hidden h-[400px] ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1325] via-[#1A1325]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    className="px-6 py-3 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B6FF00]/30 rounded-3xl transition-all pointer-events-none" />
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-purple-500/20 border border-purple-500/30 text-purple-400"
                >
                  {project.category}
                </motion.span>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="flex items-center gap-2 text-[#B6FF00] font-semibold group"
                  whileHover={{ x: 5 }}
                >
                  View Full Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
