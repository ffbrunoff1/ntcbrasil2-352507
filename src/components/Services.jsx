import React from 'react';
import { motion } from 'framer-motion';
import {
  HardHat,
  ClipboardList,
  Lightbulb,
  GanttChartSquare,
} from 'lucide-react';

export default function Services() {
  const expertiseAreas = [
    {
      icon: <GanttChartSquare className="w-10 h-10 text-brand-blue" />,
      title: 'Planejamento e Gestão',
      description:
        'Gerenciamento completo de projetos, desde a concepção até a entrega, garantindo o cumprimento de prazos e orçamentos.',
    },
    {
      icon: <HardHat className="w-10 h-10 text-brand-blue" />,
      title: 'Execução de Obras',
      description:
        'Construção de alta performance com foco em segurança, qualidade estrutural e acabamentos impecáveis.',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-brand-blue" />,
      title: 'Soluções Inovadoras',
      description:
        'Aplicação de tecnologias construtivas modernas para otimizar processos e entregar projetos mais sustentáveis e eficientes.',
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-brand-blue" />,
      title: 'Consultoria Especializada',
      description:
        'Oferecemos nosso conhecimento técnico para auxiliar em todas as fases do seu empreendimento, garantindo as melhores decisões.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-blue font-semibold">Nossa Atuação</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-4">
            Nossa Expertise ao Seu Dispor
          </h2>
          <p className="text-lg text-brand-text">
            Combinamos conhecimento técnico e paixão por construir para oferecer
            um leque de serviços que cobrem todas as necessidades do seu
            projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-brand-white border border-gray-100 rounded-2xl p-8 text-center shadow-subtle hover:shadow-strong hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="mx-auto bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {area.title}
              </h3>
              <p className="text-brand-text flex-grow">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
