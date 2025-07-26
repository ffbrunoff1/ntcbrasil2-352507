import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-brand-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center px-4 py-1 mb-6 text-sm font-medium text-brand-blue bg-blue-100 rounded-full"
          >
            <Building className="w-4 h-4 mr-2" />
            Excelência em Construção
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tighter mb-4"
          >
            Bem-vindo à NTC Brasil
            <span className="block text-brand-blue">
              Construindo futuros sólidos!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-8"
          >
            Com vasta experiência e foco na qualidade, a NTC Brasil é sua
            parceira ideal no setor de construção, comprometida com a inovação
            em cada projeto.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center bg-brand-blue text-brand-white font-bold py-4 px-8 rounded-lg shadow-strong hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Fale com um especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto flex items-center justify-center bg-brand-white text-brand-dark font-bold py-4 px-8 rounded-lg border border-gray-200 shadow-subtle hover:bg-brand-gray transition-all duration-300 transform hover:-translate-y-1"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
