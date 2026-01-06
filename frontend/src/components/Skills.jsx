import { useState, useEffect } from 'react'
import { getSkills } from '../services/api'
import { motion } from 'framer-motion'

const Skills = () => {
  const [skills, setSkills] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills()
        setSkills(data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      }
    }
    fetchSkills()
  }, [])

  if (!skills) return null

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">Frontend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Intermedio - Avanzado</p>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">Backend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Intermedio - Avanzado</p>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">Especialidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.especialidades.map((skill, index) => {
                const isAdvanced = ['IoT & Drones', 'Machine Learning', 'DevOps', 'Git', 'Azure DevOps', 'Agile Scrum'].includes(skill)
                return (
                  <span
                    key={index}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${
                      isAdvanced
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

