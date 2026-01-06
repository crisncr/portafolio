import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-800 dark:text-white mb-4">
            Cristopher Cuevas
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">
            Desarrollador Full Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. 
            Especializado en desarrollo web moderno y tecnologías emergentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="btn-primary"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-secondary"
            >
              Contactar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

