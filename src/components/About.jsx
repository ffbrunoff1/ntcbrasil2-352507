import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const aboutImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site-modern-architecture.jpg';

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
      title: 'Inovação Constante',
      description:
        'Adotamos as mais recentes tecnologias e métodos para garantir eficiência e resultados superiores.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      title: 'Qualidade Garantida',
      description:
        'Nosso compromisso é com a excelência, utilizando materiais de primeira linha e mão de obra qualificada.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-blue" />,
      title: 'Compromisso com o Cliente',
      description:
        'Transformamos visões em realidade, trabalhando em estreita colaboração para superar expectativas.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={sectionVariants}>
            <span className="text-brand-blue font-semibold">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-6">
              Transformando Visões em Realidade com Experiência e Qualidade
            </h2>
            <p className="text-brand-text text-lg mb-8">
              Na NTC Brasil, acreditamos que cada projeto é uma oportunidade de
              construir algo duradouro. Com uma equipe experiente e um portfólio
              de sucesso, nos dedicamos a entregar obras que não apenas atendem,
              mas excedem as expectativas em termos de qualidade, prazo e
              orçamento.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-brand-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-brand-text">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={sectionVariants} className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-brand-blue rounded-2xl transform rotate-3 z-0"></div>
            <img
              src={aboutImageUrl}
              alt="Equipe da NTC Brasil em uma obra moderna"
              className="w-full h-auto object-cover rounded-2xl shadow-strong relative z-10"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
