import { motion } from 'framer-motion'

// Componente de icono SVG profesional
const TechIcon = ({ name, children }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 mb-3 mx-auto">
      {children}
    </div>
  )
}

const Frameworks = () => {
  const frameworks = {
    frontend: [
      { 
        name: 'React', 
        category: 'Frontend', 
        color: 'purple',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
          </svg>
        )
      },
      { 
        name: 'Vue.js', 
        category: 'Frontend', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#4FC08D">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        )
      },
      { 
        name: 'Tailwind CSS', 
        category: 'CSS', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#38BDF8">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
          </svg>
        )
      },
      { 
        name: 'Next.js', 
        category: 'Framework', 
        color: 'pink',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#000000">
            <path d="M11.5714 4L18.8571 20H16.2857L14.1429 15.4286L9.85714 15.4286L7.71429 20H5.14286L11.5714 4ZM12.8571 7.71429L9.14286 14.2857H14.8571L12.8571 7.71429Z"/>
          </svg>
        )
      },
      { 
        name: 'Angular', 
        category: 'Frontend', 
        color: 'red',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#DD0031">
            <path d="M9.93 12.645h4.134L11.996 7.74zM11.996.01L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm5.134 19.23l-6.01 3.28-6.016-3.279-.857-7.32h13.745l-.862 7.32z"/>
          </svg>
        )
      },
      { 
        name: 'WebRTC', 
        category: 'Web', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#333333">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
          </svg>
        )
      },
      { 
        name: 'React Native', 
        category: 'Mobile', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#61DAFB">
            <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
          </svg>
        )
      },
    ],
    backend: [
      { 
        name: 'Node.js', 
        category: 'Backend', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#339933">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.191-0.047-0.272,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.105-0.116,2.105-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.14-0.14-0.242-0.282-0.242h-1.137c-0.141,0-0.258,0.109-0.282,0.242 c-0.216,1.533,1.031,3.332,4.655,3.332C17.501,17.007,19.099,15.91,19.099,13.993z"/>
          </svg>
        )
      },
      { 
        name: 'FastAPI', 
        category: 'Backend', 
        color: 'teal',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#009688">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.64 0-8.4 3.76-8.4 8.4s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4-3.76-8.4-8.4-8.4zm0 2.4c3.318 0 6 2.682 6 6s-2.682 6-6 6-6-2.682-6-6 2.682-6 6-6z"/>
            <path d="M12 8l-4 4h3v4h2v-4h3l-4-4z"/>
          </svg>
        )
      },
      { 
        name: 'Express.js', 
        category: 'Backend', 
        color: 'yellow',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#000000">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.2a.636.636 0 00-.926-.095l-2.127 1.545a.763.763 0 01-1.053-.093l-4.512-5.44a1.466 1.466 0 00-1.395-.755l-5.96.326a1.466 1.466 0 01-1.538-.98L.182 4.63a1.529 1.529 0 011.895-.72l3.45 4.2a.636.636 0 00.926.095l2.127-1.545a.763.763 0 011.053.093l4.512 5.44a1.466 1.466 0 001.395.755l5.96-.326a1.466 1.466 0 011.538.98l2.028 6.912z"/>
          </svg>
        )
      },
      { 
        name: 'Django', 
        category: 'Backend', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#092E20">
            <path d="M11.508 19.48c-.374 0-.748-.09-1.09-.27l-4.503-2.6c-.69-.4-1.12-1.12-1.12-1.93v-5.2c0-.81.43-1.53 1.12-1.93l4.503-2.6c.69-.4 1.55-.4 2.24 0l4.503 2.6c.69.4 1.12 1.12 1.12 1.93v5.2c0 .81-.43 1.53-1.12 1.93l-4.503 2.6c-.342.18-.716.27-1.09.27zm-4.503-3.93l4.503 2.6 4.503-2.6v-5.2l-4.503-2.6-4.503 2.6v5.2z"/>
          </svg>
        )
      },
      { 
        name: 'Spring Boot', 
        category: 'Backend', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#6DB33F">
            <path d="M23.693 11.982c-1.313-2.79-3.862-4.95-6.9-6.344-.378-.174-.863.138-.75.57.056.21.12.42.18.63.12.42.24.84.33 1.26.09.42.15.84.18 1.26.03.42.03.84 0 1.26-.03.42-.09.84-.18 1.26-.09.42-.21.84-.33 1.26-.06.21-.124.42-.18.63-.113.432.372.744.75.57 3.038-1.394 5.587-3.554 6.9-6.344.174-.378-.138-.863-.57-.75-.21.056-.42.12-.63.18-.42.12-.84.24-1.26.33-.42.09-.84.15-1.26.18-.42.03-.84.03-1.26 0-.42-.03-.84-.09-1.26-.18-.42-.09-.84-.21-1.26-.33-.21-.06-.42-.124-.63-.18-.432-.113-.744.372-.57.75 1.313 2.79 3.862 4.95 6.9 6.344.378.174.863-.138.75-.57-.056-.21-.12-.42-.18-.63-.12-.42-.24-.84-.33-1.26-.09-.42-.15-.84-.18-1.26-.03-.42-.03-.84 0-1.26.03-.42.09-.84.18-1.26.09-.42.21-.84.33-1.26.06-.21.124-.42.18-.63.113-.432-.372-.744-.75-.57-3.038 1.394-5.587 3.554-6.9 6.344-.174.378.138.863.57.75.21-.056.42-.12.63-.18.42-.12.84-.24 1.26-.33.42-.09.84-.15 1.26-.18.42-.03.84-.03 1.26 0 .42.03.84.09 1.26.18.42.09.84.21 1.26.33.21.06.42.124.63.18.432.113.744-.372.57-.75z"/>
          </svg>
        )
      },
      { 
        name: 'Laravel', 
        category: 'Backend', 
        color: 'red',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF2D20">
            <path d="M24 10.248l-9.315-9.315-1.872 1.872 7.443 7.443H0v2.64h20.256l-7.443 7.443 1.872 1.872L24 13.752V10.248z"/>
            <path d="M13.752 0L24 10.248l-1.872 1.872L11.88 1.872z"/>
            <path d="M10.248 24L0 13.752l1.872-1.872L12.12 22.128z"/>
          </svg>
        )
      },
    ],
    database: [
      { 
        name: 'MongoDB', 
        category: 'NoSQL', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#47A248">
            <path d="M17.193 9.392c0 1.084-.324 2.055-.863 2.894l-.001-.001a7.68 7.68 0 01-1.333 1.804c-.026.023-.053.05-.08.075a7.635 7.635 0 01-3.836 1.948 7.641 7.641 0 01-1.197.093c-.033 0-.066.003-.1.003-.033 0-.066-.003-.1-.003a7.641 7.641 0 01-1.197-.093 7.635 7.635 0 01-3.836-1.948c-.027-.025-.054-.052-.08-.075a7.68 7.68 0 01-1.333-1.804l-.001.001a5.626 5.626 0 01-.863-2.894m1.351-7.242C11.461 2.295 5.477 6.221 2.388 11.85a11.913 11.913 0 00-.856 1.833c-.026.08-.047.162-.07.243 0 .014-.003.028-.003.043v.012c0 .162.028.323.047.483.01.086.023.172.04.258.025.13.056.258.09.386.03.11.065.218.102.326.05.145.107.288.168.43.023.055.05.108.076.162.17.35.36.69.57 1.02.1.16.205.317.315.472.1.14.205.277.315.41.11.133.227.26.347.385.1.103.2.205.305.304.1.095.205.188.312.278.09.075.18.148.274.22.19.144.39.28.597.41.1.063.2.123.303.18.21.118.427.228.652.33.11.05.222.097.336.14.12.047.24.09.363.13.11.035.222.067.336.096.12.032.24.06.363.085.1.02.2.038.303.053.12.018.24.033.363.045.11.01.222.017.336.022.1.004.2.006.303.006.1 0 .2-.002.303-.006.114-.005.226-.012.336-.022.123-.012.243-.027.363-.045.103-.015.203-.033.303-.053.123-.025.243-.053.363-.085.114-.029.226-.061.336-.096.123-.04.243-.083.363-.13.114-.043.226-.09.336-.14.225-.102.442-.212.652-.33.103-.057.203-.117.303-.18.207-.13.407-.266.597-.41.094-.072.184-.145.274-.22.107-.09.212-.183.312-.278.105-.099.205-.201.305-.304.12-.125.237-.252.347-.385.11-.133.215-.27.315-.41.11-.155.215-.312.315-.472.21-.33.4-.67.57-1.02.026-.054.053-.107.076-.162.061-.142.118-.285.168-.43.037-.108.072-.216.102-.326.034-.128.065-.256.09-.386.017-.086.03-.172.04-.258.019-.16.047-.321.047-.483v-.012c0-.015-.003-.029-.003-.043-.023-.081-.044-.163-.07-.243a11.913 11.913 0 00-.856-1.833C18.523 6.221 12.539 2.295 5.842 2.15z"/>
          </svg>
        )
      },
      { 
        name: 'MySQL', 
        category: 'Database', 
        color: 'purple',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#4479A1">
            <path d="M16.405 5.501c-.194 0-.391.016-.587.048v-.481h.587c.329 0 .595-.266.595-.595s-.266-.595-.595-.595h-2.966c-.329 0-.595.266-.595.595v4.832c0 .329.266.595.595.595s.595-.266.595-.595v-2.354c.682-.188 1.399-.293 2.14-.293 3.314 0 6 2.686 6 6s-2.686 6-6 6c-1.294 0-2.49-.41-3.471-1.108-.28-.18-.642-.103-.822.178-.18.28-.103.642.178.822C11.34 21.545 12.864 22 14.405 22c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-5.595 8.595c.329 0 .595-.266.595-.595s-.266-.595-.595-.595H6.595c-.329 0-.595.266-.595.595v4.832c0 .329.266.595.595.595h4.215c.329 0 .595-.266.595-.595s-.266-.595-.595-.595H7.19v-3.642h3.62z"/>
          </svg>
        )
      },
      { 
        name: 'AWS', 
        category: 'Cloud', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF9900">
            <path d="M5.763 15.295l-1.157-3.2h-.048l-1.157 3.2H2.1l1.75-4.582h1.1L6.7 15.295H5.763zm2.335-1.024c0 .48.348.82.84.82.492 0 .84-.34.84-.82 0-.48-.348-.82-.84-.82-.492 0-.84.34-.84.82zm1.006 1.024h-.952V10.713h.952v4.558zm3.813 0h-.952v-3.276c0-.48-.024-.84-.696-.84-.696 0-.84.36-.84.84v3.276h-.96V10.713h.96v.624c.24-.48.72-.696 1.32-.696 1.008 0 1.488.624 1.488 1.752v2.64zm5.19 0c-.6 0-1.08-.24-1.44-.72l-.6.72h-1.032V10.713h.96v3.408c0 .6.24.96.72.96.48 0 .72-.24.72-.84v-3.528h.96v4.558h-.288zm3.336 0h-3.6V10.713h3.6v.84h-2.64v.96h2.4v.84h-2.4v1.038h2.64v.84z"/>
          </svg>
        )
      },
      { 
        name: 'PostgreSQL', 
        category: 'Database', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#336791">
            <path d="M23.5594 14.7227c-.3786 2.6855-1.8047 4.6289-4.2774 5.8301-2.4726 1.2012-5.3593 1.2012-7.832 0-2.4727-1.2012-4.2773-3.1446-4.2773-5.8301 0-2.6855 1.8046-4.6289 4.2773-5.8301 2.4727-1.2012 5.3594-1.2012 7.832 0 2.4727 1.2012 3.8988 3.1446 4.2774 5.8301zm-4.2774-1.8047c-.3786-1.8047-1.2012-3.1446-2.4727-3.8988-1.2715-.7542-2.6855-1.1303-4.2773-1.1303-1.5918 0-3.0058.3761-4.2773 1.1303-1.2715.7542-2.0941 2.0941-2.4727 3.8988-.3786 1.8047-.3786 3.6094 0 5.4141.3786 1.8047 1.2012 3.1446 2.4727 3.8988 1.2715.7542 2.6855 1.1303 4.2773 1.1303 1.5918 0 3.0058-.3761 4.2773-1.1303 1.2715-.7542 2.0941-2.0941 2.4727-3.8988.3786-1.8047.3786-3.6094 0-5.4141z"/>
          </svg>
        )
      },
      { 
        name: 'Redis', 
        category: 'Database', 
        color: 'red',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#DC382D">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
            <circle cx="12" cy="12" r="1.5" fill="#DC382D"/>
          </svg>
        )
      },
      { 
        name: 'Firebase', 
        category: 'Cloud', 
        color: 'orange',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FFCA28">
            <path d="M3.89 15.26L2.38 13.75C2.08 13.45 1.78 13.15 1.78 12.75C1.78 12.35 2.08 12.05 2.38 12.05L5.95 8.48L3.89 6.42C3.59 6.12 3.59 5.72 3.89 5.42L5.4 3.91C5.7 3.61 6.1 3.61 6.4 3.91L8.46 5.97L11.03 3.4C11.33 3.1 11.73 3.1 12.03 3.4L13.54 4.91C13.84 5.21 13.84 5.61 13.54 5.91L10.97 8.48L14.54 12.05C14.84 12.35 14.84 12.75 14.54 13.05L13.03 14.56C12.73 14.86 12.33 14.86 12.03 14.56L8.46 11L6.4 13.06C6.1 13.36 5.7 13.36 5.4 13.06L3.89 15.26Z"/>
          </svg>
        )
      },
    ],
    dataAnalysis: [
      { 
        name: 'Power BI', 
        category: 'BI', 
        color: 'yellow',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F2C811">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            <path d="M12 9l-2 4h4l-2-4z"/>
          </svg>
        )
      },
      { 
        name: 'Pandas', 
        category: 'Data Analysis', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#150458">
            <path d="M16.5 2.5c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm-9 0c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm9 9c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm-9 0c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z"/>
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
            <circle cx="14" cy="4" r="1" fill="#150458"/>
            <circle cx="10" cy="4" r="1" fill="#150458"/>
            <circle cx="14" cy="13" r="1" fill="#150458"/>
            <circle cx="10" cy="13" r="1" fill="#150458"/>
          </svg>
        )
      },
      { 
        name: 'Matplotlib', 
        category: 'Visualization', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#11557C">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            <circle cx="12" cy="12" r="2" fill="#11557C"/>
            <path d="M8 10l4 4 4-4M8 14l4-4 4 4"/>
          </svg>
        )
      },
      { 
        name: 'Google Colab', 
        category: 'Notebook', 
        color: 'orange',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F9AB00">
            <path d="M16.941 4.976a7.033 7.033 0 0 0-4.988 2.02l-.132.132c-.99-.99-2.4-1.584-3.96-1.584-1.56 0-2.97.594-3.96 1.584l-.132-.132a7.033 7.033 0 0 0-4.988-2.02v-.132h13.08v.132zm-9.96 3.96c.792 0 1.584.3 2.172.888l.132.132c.588-.588 1.38-.888 2.172-.888.792 0 1.584.3 2.172.888l.132-.132c.588-.588 1.38-.888 2.172-.888.792 0 1.584.3 2.172.888l.132.132c.588-.588 1.38-.888 2.172-.888v-.132H6.98v.132zm13.08 3.96c-.792 0-1.584-.3-2.172-.888l-.132-.132c-.588.588-1.38.888-2.172.888-.792 0-1.584-.3-2.172-.888l-.132.132c-.588.588-1.38.888-2.172.888-.792 0-1.584-.3-2.172-.888l-.132-.132c-.588.588-1.38.888-2.172.888v.132h13.08v-.132z"/>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            <circle cx="12" cy="12" r="1" fill="#F9AB00"/>
          </svg>
        )
      },
    ],
    devTools: [
      { 
        name: 'Docker', 
        category: 'DevOps', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#2496ED">
            <path d="M13.983 11.103h2.119a.186.186 0 00.186-.185V9.08a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.838c0 .102.083.185.185.185zm-4.482 0h2.12a.186.186 0 00.185-.185V9.08a.186.186 0 00-.186-.186H9.5a.186.186 0 00-.185.186v1.838c0 .102.082.185.185.185zm-4.483 0h2.12a.186.186 0 00.185-.185V9.08a.186.186 0 00-.186-.186H5.018a.186.186 0 00-.185.186v1.838c0 .102.082.185.185.185zm8.965-3.024H18.9a.93.93 0 01.93.93v1.255a.186.186 0 01-.186.185H4.35a.186.186 0 01-.185-.185V8.997a.93.93 0 01.93-.93h10.196zm-8.965 5.832h2.12a.186.186 0 00.186-.186v-1.838a.186.186 0 00-.186-.185H5.018a.186.186 0 00-.185.185v1.838c0 .102.082.185.185.185zm4.483 0h2.119a.186.186 0 00.186-.186v-1.838a.186.186 0 00-.186-.185H9.5a.186.186 0 00-.185.185v1.838c0 .102.082.185.185.185zm4.482 0h2.12a.186.186 0 00.185-.186v-1.838a.186.186 0 00-.186-.185h-2.12a.186.186 0 00-.185.185v1.838c0 .102.083.185.186.185zM4.35 6.728h15.3a2.324 2.324 0 012.321 2.322v5.607a2.324 2.324 0 01-2.321 2.322H4.35a2.324 2.324 0 01-2.322-2.322V9.05a2.324 2.324 0 012.322-2.322z"/>
          </svg>
        )
      },
      { 
        name: 'Android Studio', 
        category: 'IDE', 
        color: 'green',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#3DDC84">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993.0001.5511-.4485.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993 0 .5511-.4485.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C17.5902 8.2439 16.8533 7.9998 16.0533 7.9998c-1.6545 0-3.0147 1.3458-3.0147 3.0003s1.3602 3.0003 3.0147 3.0003c.8533 0 1.6202-.3735 2.1469-.9688l2.0223 3.5033a.4159.4159 0 00.5676.1521.4157.4157 0 00.1521-.5676l-1.9973-3.4594c.531-.9859.8407-2.1086.8407-3.3046 0-1.196-.3097-2.3187-.8407-3.3046M6.9774 7.9796l-2.0223-3.5033a.4156.4156 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4594C5.3097 8.6814 5 9.8041 5 11c0 1.196.3097 2.3187.8407 3.3046l-1.9973 3.4594a.416.416 0 00.1521.5676.4159.4159 0 00.5676-.1521l2.0223-3.5033C7.4098 15.6261 8.1467 15.87 8.9467 15.87c1.6545 0 3.0147-1.3458 3.0147-3.0003s-1.3602-3.0003-3.0147-3.0003c-.8533 0-1.6202.3735-2.1469.9688"/>
          </svg>
        )
      },
      { 
        name: 'XAMPP', 
        category: 'Stack', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FB7A24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            <path d="M12 6l-4 2v8l4 2 4-2V8l-4-2z"/>
          </svg>
        )
      },
      { 
        name: 'Vagrant', 
        category: 'DevOps', 
        color: 'blue',
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#1868F2">
            <path d="M3.5 12.5h17v1h-17zm0-3h17v1h-17zm0-3h17v1h-17z"/>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        )
      },
    ],
  }

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-100 dark:bg-purple-800/30 text-purple-700 dark:text-purple-200 border-purple-300 dark:border-purple-500/50',
      green: 'bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-200 border-green-300 dark:border-green-500/50',
      blue: 'bg-blue-100 dark:bg-blue-800/30 text-blue-700 dark:text-blue-200 border-blue-300 dark:border-blue-500/50',
      teal: 'bg-teal-100 dark:bg-teal-800/30 text-teal-700 dark:text-teal-200 border-teal-300 dark:border-teal-500/50',
      yellow: 'bg-yellow-100 dark:bg-yellow-800/30 text-yellow-700 dark:text-yellow-200 border-yellow-300 dark:border-yellow-500/50',
      pink: 'bg-pink-100 dark:bg-pink-800/30 text-pink-700 dark:text-pink-200 border-pink-300 dark:border-pink-500/50',
      orange: 'bg-orange-100 dark:bg-orange-800/30 text-orange-700 dark:text-orange-200 border-orange-300 dark:border-orange-500/50',
      red: 'bg-red-100 dark:bg-red-800/30 text-red-700 dark:text-red-200 border-red-300 dark:border-red-500/50',
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="frameworks" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frameworks y Tecnologías</h2>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Primera fila: Frontend, Backend, Base de Datos & Cloud */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card dark:bg-gray-700 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.frontend.map((fw, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(fw.color)} text-center hover:shadow-lg transition-shadow`}
                  >
                    <TechIcon name={fw.name}>{fw.icon}</TechIcon>
                    <div className="font-semibold mb-1">{fw.name}</div>
                    <div className="text-xs opacity-75">{fw.category}</div>
                  </div>
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
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.backend.map((fw, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(fw.color)} text-center hover:shadow-lg transition-shadow`}
                  >
                    <TechIcon name={fw.name}>{fw.icon}</TechIcon>
                    <div className="font-semibold mb-1">{fw.name}</div>
                    <div className="text-xs opacity-75">{fw.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database & Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card dark:bg-gray-700 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">Base de Datos & Cloud</h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.database.map((fw, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(fw.color)} text-center hover:shadow-lg transition-shadow`}
                  >
                    <TechIcon name={fw.name}>{fw.icon}</TechIcon>
                    <div className="font-semibold mb-1">{fw.name}</div>
                    <div className="text-xs opacity-75">{fw.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Segunda fila: Análisis de Datos y Herramientas de Desarrollo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Análisis de Datos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card dark:bg-gray-700 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">Análisis de Datos</h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.dataAnalysis.map((fw, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(fw.color)} text-center hover:shadow-lg transition-shadow`}
                  >
                    <TechIcon name={fw.name}>{fw.icon}</TechIcon>
                    <div className="font-semibold mb-1">{fw.name}</div>
                    <div className="text-xs opacity-75">{fw.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Herramientas de Desarrollo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card dark:bg-gray-700 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">Herramientas de Desarrollo</h3>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.devTools.map((fw, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(fw.color)} text-center hover:shadow-lg transition-shadow`}
                  >
                    <TechIcon name={fw.name}>{fw.icon}</TechIcon>
                    <div className="font-semibold mb-1">{fw.name}</div>
                    <div className="text-xs opacity-75">{fw.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Frameworks
