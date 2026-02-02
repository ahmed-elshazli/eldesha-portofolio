import { motion } from 'motion/react';
import { Mail, Linkedin, Facebook, Send, Phone } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:mostafa@example.com', color: '#B6FF00' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0077B5' },
  { icon: Facebook, label: 'Facebook', href: '#', color: '#1877F2' },
  { 
    icon: ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.07 6.35H15v-1.41h5.07v1.41zM19 16.05c0 2.2-1.79 3.95-4.02 3.95-2.22 0-4.02-1.75-4.02-3.95V8h4.02c2.23 0 4.02 1.75 4.02 3.95v4.1zm-6.03-6.52v4.9h2.01c1.21 0 2.01-.88 2.01-2.01V9.53h-4.02zm-7.2 5.36c-.57 0-1.01-.44-1.01-1.01 0-.58.44-1.02 1.01-1.02s1.01.44 1.01 1.02c0 .57-.44 1.01-1.01 1.01zm1.01 0h1v.01c0 1.07.87 1.94 1.94 1.94.81 0 1.5-.5 1.79-1.21H9.99c-.29.38-.75.61-1.27.61-1.1 0-2.01-.91-2.01-2.01s.91-2.01 2.01-2.01c.52 0 .98.23 1.27.61h1.53c-.29-.71-.98-1.21-1.79-1.21-1.07 0-1.94.87-1.94 1.94v.01h-1zm-1.01-5.36c-.57 0-1.01-.44-1.01-1.01s.44-1.02 1.01-1.02 1.01.44 1.01 1.02-.44 1.01-1.01 1.01z"/>
      </svg>
    ), 
    label: 'Behance', 
    href: '#', 
    color: '#1769FF' 
  },
  { 
    icon: ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
      <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ), 
    label: 'WhatsApp', 
    href: 'https://wa.me/201234567890', // استبدل بالرقم الحقيقي
    color: '#25D366' 
  },
];

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B6FF00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Let's Create Something
            <span className="text-[#B6FF00] block mt-2">Amazing Together</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and
            let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all ${
                    focusedField === 'name'
                      ? 'border-[#B6FF00] shadow-[0_0_20px_rgba(182,255,0,0.2)]'
                      : 'border-white/10'
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email Address
                </label>
                <motion.input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all ${
                    focusedField === 'email'
                      ? 'border-[#B6FF00] shadow-[0_0_20px_rgba(182,255,0,0.2)]'
                      : 'border-white/10'
                  }`}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all resize-none ${
                    focusedField === 'message'
                      ? 'border-[#B6FF00] shadow-[0_0_20px_rgba(182,255,0,0.2)]'
                      : 'border-white/10'
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full relative px-8 py-4 bg-[#B6FF00] text-[#1A1325] font-semibold rounded-full overflow-hidden group flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-5 h-5 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 blur-2xl bg-[#B6FF00] opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                I'm always excited to collaborate on new projects and discuss creative
                ideas. Whether you need a complete brand identity, a stunning website, or
                a mobile app design, I'm here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-[#B6FF00]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#B6FF00]" />
                  </div>
                  <span>mostafa@example.com</span>
                </div>
                <a 
                  href="https://wa.me/201234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <span>+20 123 456 7890</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-[#B6FF00]/10 flex items-center justify-center">
                    <span className="text-[#B6FF00] font-semibold">📍</span>
                  </div>
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: social.color }} />
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-[#B6FF00]/20 to-purple-600/20 backdrop-blur-xl border border-[#B6FF00]/30 rounded-2xl p-6 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-[#B6FF00] rounded-full mx-auto mb-3"
              />
              <p className="text-white font-semibold">
                Currently available for freelance projects
              </p>
              <p className="text-white/60 text-sm mt-2">
                Response time: Within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <p className="text-white/40 text-sm">
          © 2026 Mostafa Masoud. All rights reserved. Designed with 💚 and creativity.
        </p>
      </motion.div>
    </section>
  );
}