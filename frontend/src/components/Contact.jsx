import { useState } from 'react'
import { sendContact } from '../services/api'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [viewingDocument, setViewingDocument] = useState(null)

  // Rutas de los documentos
  // Los archivos están en frontend/public/ y Vite los sirve desde la raíz
  // Codificar solo los caracteres especiales, manteniendo la barra inicial
  const cvFileName = 'Cristopher_Cv_En[3] (3).pdf'
  const certificadoFileName = 'Certificado egreso (2).pdf'
  const cvPath = '/' + encodeURIComponent(cvFileName).replace(/%2F/g, '/')
  const certificadoPath = '/' + encodeURIComponent(certificadoFileName).replace(/%2F/g, '/')

  const handleDownloadCV = () => {
    // Intentar descargar el archivo
    fetch(cvPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Archivo no encontrado')
        }
        return response.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Cristopher_Cv_En[3] (3).pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
      .catch(error => {
        console.error('Error al descargar CV:', error)
        alert('Error al descargar el CV. Por favor, verifica que el archivo existe en la carpeta public.')
      })
  }

  const handleViewCV = () => {
    setViewingDocument(cvPath)
  }

  const handleViewCertificado = () => {
    setViewingDocument(certificadoPath)
  }

  const handleDownloadCertificado = () => {
    // Intentar descargar el archivo
    fetch(certificadoPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Archivo no encontrado')
        }
        return response.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Certificado egreso (2).pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
      .catch(error => {
        console.error('Error al descargar certificado:', error)
        alert('Error al descargar el certificado. Por favor, verifica que el archivo existe en la carpeta public.')
      })
  }

  const closeViewer = () => {
    setViewingDocument(null)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await sendContact(formData)
      if (response.success) {
        setSubmitStatus({ type: 'success', message: response.message })
        setFormData({ nombre: '', email: '', mensaje: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        })
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Sección de CV */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 dark:text-white mb-4">
            ¿Te interesa contratarme?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Puedes descargar mi currículum actualizado en PDF haciendo clic en el botón.
          </p>
          <button
            onClick={handleDownloadCV}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            <span>📄</span>
            Descargar CV en PDF
          </button>
        </div>

        {/* Modal para ver documentos */}
        {viewingDocument && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeViewer}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={closeViewer}
                className="absolute top-4 right-4 z-10 text-white bg-black/80 hover:bg-black rounded-full p-2 transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={viewingDocument}
                className="w-full h-[90vh]"
                title="Documento"
              />
            </div>
          </div>
        )}

        <h2 className="section-title">Contacto</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">
              ¡Trabajemos juntos!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. 
              Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <span className="text-gray-700 dark:text-gray-300">cuevasn050@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span className="text-gray-700 dark:text-gray-300">+56 9 32092204</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-gray-700 dark:text-gray-300">Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <div className="flex gap-4">
                  <a href="https://github.com/crisncr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/cristopher-cuevas-070440242/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">LinkedIn</a>
                </div>
              </div>

              {/* CV y Certificado */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                  Documentos
                </h4>
                
                {/* CV */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📄</span>
                    </div>
                    <h5 className="text-base font-semibold text-primary-800 dark:text-white">
                      Currículum Vitae
                    </h5>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleViewCV}
                      className="flex-1 px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                    >
                      Ver CV
                    </button>
                    <button
                      onClick={handleDownloadCV}
                      className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Descargar CV
                    </button>
                  </div>
                </div>

                {/* Certificado de Egreso */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎓</span>
                    </div>
                    <h5 className="text-base font-semibold text-primary-800 dark:text-white">
                      Certificado de Egreso
                    </h5>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleViewCertificado}
                      className="flex-1 px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      Ver Certificado
                    </button>
                    <button
                      onClick={handleDownloadCertificado}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Descargar Certificado
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>
              {submitStatus && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </motion.div>

          {/* Agenda una reunión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-4">
              Agenda una Reunión
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ¿Te gustaría discutir un proyecto o colaboración? Agenda una reunión de 45 minutos por Zoom.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📅</span>
                  <span className="font-semibold dark:text-white">Consulta Gratuita</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">45 minutos • Por Zoom</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                  <li>• Análisis de tu proyecto</li>
                  <li>• Propuesta de solución</li>
                  <li>• Estimación de tiempo y costo</li>
                </ul>
                <a
                  href="https://calendly.com/cristocuevas5/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm inline-block text-center"
                >
                  Agendar Consulta
                </a>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📅</span>
                  <span className="font-semibold dark:text-white">Reunión de Proyecto</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">45 minutos • Por Zoom</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                  <li>• Revisión técnica detallada</li>
                  <li>• Planificación del proyecto</li>
                  <li>• Definición de entregables</li>
                </ul>
                <a
                  href="https://calendly.com/cristocuevas5/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-sm inline-block text-center"
                >
                  Agendar Reunión
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

