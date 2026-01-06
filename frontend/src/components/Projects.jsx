import { useState, useEffect } from 'react'
import { getProjects } from '../services/api'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageModal = (project, imageIndex) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        console.log('Proyectos cargados:', data)
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    fetchProjects()
  }, [])

  // Listener para cerrar con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null)
        setCurrentImageIndex(0)
      }
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape)
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const nextImage = () => {
    if (selectedProject && selectedProject.imagenes) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.imagenes.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.imagenes) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.imagenes.length - 1 : prev - 1
      )
    }
  }

  const getTechColor = (index) => {
    const colors = [
      'bg-blue-100 text-blue-700',
      'bg-green-100 text-green-700',
      'bg-purple-100 text-purple-700',
      'bg-orange-100 text-orange-700',
      'bg-pink-100 text-pink-700',
      'bg-yellow-100 text-yellow-700'
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="space-y-24">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
              className="max-w-7xl mx-auto"
            >
              <div className={`flex flex-col ${projectIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                {/* Información del proyecto */}
                <div className="flex-1 lg:max-w-lg">
                  <h3 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-sans leading-tight">
                    {project.nombre}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed font-sans">
                    {project.descripcion}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold font-sans ${getTechColor(techIndex)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Características principales */}
                  <div>
                    <h4 className="text-xl font-bold text-primary-800 mb-4 font-sans">
                      Características principales:
                    </h4>
                    <ul className="space-y-2.5 text-gray-700 font-sans">
                      {project.caracteristicas.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-purple-600 mr-3 font-bold text-lg leading-none">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Imágenes del proyecto con diseño mejorado */}
                <div className="flex-1 w-full lg:max-w-2xl">
                  {project.imagenes && project.imagenes.length > 0 ? (
                    <div className="relative">
                      {/* Grid principal con diseño más llamativo */}
                      <div className="grid grid-cols-2 gap-4">
                        {project.imagenes.map((img, imgIndex) => {
                          // En Vite, los archivos en public se sirven desde la raíz
                          // Asegurar que la ruta comience con /
                          const imagePath = img.startsWith('/') ? img : `/${img}`
                          // Codificar espacios en la URL (reemplazar espacios con %20)
                          // Mantener las barras / intactas
                          const encodedImg = imagePath.replace(/ /g, '%20')
                          console.log('Cargando imagen - Original:', img, 'Path:', imagePath, 'Encoded:', encodedImg)
                          // Layout más variado y llamativo
                          const isLarge = imgIndex === 0 || imgIndex === 3
                          const spanClass = imgIndex === 0 ? 'col-span-2' : ''
                          
                          return (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.95, y: 20 }}
                              whileInView={{ opacity: 1, scale: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                              className={`${spanClass} group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer`}
                              onClick={() => openImageModal(project, imgIndex)}
                              style={{ 
                                transform: imgIndex % 3 === 1 ? 'rotate(-1deg)' : imgIndex % 3 === 2 ? 'rotate(1deg)' : 'rotate(0deg)',
                                lineHeight: 0,
                                margin: 0,
                                padding: 0
                              }}
                            >
                              {/* Contenedor de imagen - usa aspect-ratio para evitar espacios blancos */}
                              <div className="relative w-full overflow-hidden rounded-2xl" style={{ 
                                lineHeight: 0, 
                                backgroundColor: 'transparent',
                                display: 'block',
                                margin: 0,
                                padding: 0,
                                fontSize: 0,
                                aspectRatio: '16/9'
                              }}>
                                <img
                                  src={encodedImg}
                                  alt={`${project.nombre} - Imagen ${imgIndex + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 block"
                                  style={{ 
                                    objectFit: 'cover',
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    margin: 0,
                                    padding: 0,
                                    verticalAlign: 'top',
                                    lineHeight: 0,
                                    fontSize: 0
                                  }}
                                  onError={(e) => {
                                    console.error('Error cargando imagen:', encodedImg, 'Ruta original:', img)
                                    e.target.onerror = null
                                    e.target.style.display = 'none'
                                  }}
                                  onLoad={() => {
                                    console.log('Imagen cargada exitosamente:', encodedImg)
                                  }}
                                />
                                
                                {/* Overlay con gradiente solo en hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                  <div className="text-center">
                                    <span className="text-white text-sm font-bold font-sans px-4 py-2 bg-purple-600/90 rounded-full backdrop-blur-sm shadow-lg">
                                      Ver imagen
                                    </span>
                                  </div>
                                </div>
                                
                                {/* Borde sutil */}
                                <div className="absolute inset-0 border-2 border-gray-200/50 rounded-2xl pointer-events-none group-hover:border-purple-300/50 transition-colors"></div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      No hay imágenes disponibles
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de carrusel de imágenes mejorado */}
      <AnimatePresence>
        {selectedProject && selectedProject.imagenes && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar mejorado */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/80 hover:bg-black rounded-full p-3 shadow-2xl backdrop-blur-sm"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Imagen actual sin fondo oscuro visible */}
              <div className="relative bg-transparent rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-white rounded-2xl p-4">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    src={(() => {
                      const img = selectedProject.imagenes[currentImageIndex]
                      const imagePath = img.startsWith('/') ? img : `/${img}`
                      // Codificar espacios para URLs
                      return imagePath.replace(/ /g, '%20')
                    })()}
                    alt={`${selectedProject.nombre} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[85vh] object-contain mx-auto block rounded-lg"
                    style={{ 
                      display: 'block',
                      backgroundColor: 'transparent'
                    }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>

                {/* Botones de navegación mejorados */}
                {selectedProject.imagenes.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white rounded-full p-4 transition-all z-10 shadow-2xl backdrop-blur-sm hover:scale-110"
                      aria-label="Imagen anterior"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white rounded-full p-4 transition-all z-10 shadow-2xl backdrop-blur-sm hover:scale-110"
                      aria-label="Siguiente imagen"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicador de imagen actual mejorado */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-sm font-bold font-sans backdrop-blur-md shadow-2xl border border-white/20">
                  {currentImageIndex + 1} / {selectedProject.imagenes.length}
                </div>
              </div>

              {/* Título del proyecto */}
              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold text-white font-sans drop-shadow-lg">
                  {selectedProject.nombre}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
