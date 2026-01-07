import { useState, useEffect } from 'react'
import { getProjects } from '../services/api'
import { motion } from 'framer-motion'

const Timeline = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        // Ordenar por fecha (más reciente primero)
        // Convertir fechas como "Marzo 2025" a números para comparar
        const monthMap = {
          'enero': 1, 'febrero': 2, 'marzo': 3, 'abril': 4,
          'mayo': 5, 'junio': 6, 'julio': 7, 'agosto': 8,
          'septiembre': 9, 'octubre': 10, 'noviembre': 11, 'diciembre': 12
        }

        const sorted = data.sort((a, b) => {
          const parseDate = (dateStr) => {
            const parts = dateStr.toLowerCase().split(' ')
            const month = monthMap[parts[0]] || 0
            const year = parseInt(parts[1]) || 0
            return year * 12 + month
          }

          return parseDate(b.fecha) - parseDate(a.fecha)
        })
        setProjects(sorted)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    fetchProjects()
  }, [])

  const getStatusColor = (estado) => {
    return estado === 'Actual' ? 'bg-green-500' : 'bg-gray-500'
  }

  return (
    <section id="linea-tiempo" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Línea De Tiempo de Proyectos</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical principal */}
            <div className="block absolute left-10 md:left-16 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {projects.map((project, index) => {
              // Separar mes y año de la fecha
              const fechaParts = project.fecha.split(' ')
              const mes = fechaParts[0] || ''
              const año = fechaParts[1] || ''

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-8 pl-24 md:pl-40"
                >
                  {/* Cuadrado con fecha en la línea - Izquierda */}
                  <div className="absolute left-0 top-0 w-20 md:w-32">
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md border-2 border-primary-600 dark:border-primary-400 p-2 md:p-3 text-center">
                      <p className="text-primary-600 dark:text-primary-400 font-bold text-xs md:text-base leading-tight">
                        {mes}
                      </p>
                      <p className="text-primary-600 dark:text-primary-400 font-bold text-xs md:text-base leading-tight">
                        {año}
                      </p>
                    </div>
                  </div>

                  {/* Línea vertical desde el cuadrado */}
                  <div className="block absolute left-10 md:left-16 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

                  {/* Card del proyecto */}
                  <div className="card dark:bg-gray-700 dark:border-gray-600">
                    {/* Header: título y badge - responsive */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-primary-800 dark:text-white mb-2 break-words">
                          {project.nombre}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${getStatusColor(project.estado)}`}>
                        {project.estado}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">{project.descripcion}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 md:px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

