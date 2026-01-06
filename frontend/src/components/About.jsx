import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    "React & Node.js",
    "Python & Django",
    "JavaScript & TypeScript",
    "FastAPI & Express.js",
    "Sistemas Embebidos",
    "IoT & Drones",
    "Git & Azure DevOps",
    "Agile Scrum",
    "MongoDB & MySQL",
    "AWS & Cloud Computing",
    "Docker & Kubernetes",
    "CI/CD Pipelines"
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-primary-400 flex items-center justify-center text-6xl font-bold text-white shadow-xl">
                CC
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Soy un desarrollador full stack apasionado por la tecnología y la innovación. 
                Me especializo en crear aplicaciones web modernas, escalables y centradas en el usuario.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Con experiencia en el desarrollo de soluciones complejas, desde aplicaciones web hasta 
                sistemas embebidos e IoT, siempre busco la excelencia técnica y la innovación en cada proyecto.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Estoy abierto a nuevas oportunidades laborales que me permitan seguir creciendo profesionalmente 
                y aplicar mis conocimientos en desarrollo full stack, metodologías ágiles y tecnologías emergentes.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

