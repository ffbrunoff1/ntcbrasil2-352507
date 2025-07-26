import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753368642181_0.png';

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossa Expertise', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.footer
      className="bg-brand-dark text-brand-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Construindo futuros sólidos com experiência, qualidade e inovação
              em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                Navegação
              </h3>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                Contato
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-300 mr-2">End:</span>
                  <span>Rua Padre Lebret, 801, G05, Bloco 03</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-300 mr-2">Tel:</span>
                  <a
                    href="tel:+5544991040774"
                    className="hover:text-brand-white transition-colors duration-300"
                  >
                    +55 44 99104-0774
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-300 mr-2">
                    Email:
                  </span>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="hover:text-brand-white transition-colors duration-300 break-all"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
