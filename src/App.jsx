import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseZap,
  FileText,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  Rocket,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
} from 'lucide-react'
import heroImage from './assets/hero-portfolio.png'
import './App.css'

const githubUrl = 'https://github.com/marcoantonio1999'
const pagesUrl = 'https://marcoantonio1999.github.io/marco-avila-portfolio/'
const linkedInSearchUrl =
  'https://www.linkedin.com/search/results/people/?keywords=Marco%20Antonio%20Ordu%C3%B1a%20%C3%81vila'

const roleSignals = [
  'AI Engineer',
  'Data Engineer',
  'Full Stack Developer',
  'MLOps / Cloud Developer',
]

const proofPoints = [
  {
    value: '5+',
    label: 'años creando software, datos e IA',
  },
  {
    value: '8',
    label: 'experiencias documentadas en el portfolio',
  },
  {
    value: '4',
    label: 'perfiles cubiertos: IA, data, backend y frontend',
  },
]

const strengths = [
  {
    icon: BrainCircuit,
    title: 'IA que resuelve procesos',
    text: 'Diseño modelos, asistentes, OCR, visión computacional, RAG y agentes conectados con APIs y sistemas reales.',
  },
  {
    icon: DatabaseZap,
    title: 'Datos listos para operar',
    text: 'Construyo pipelines, consultas SQL, limpieza, transformación y reportes para equipos que necesitan decidir rápido.',
  },
  {
    icon: Code2,
    title: 'Producto full stack',
    text: 'Desarrollo interfaces, backends, microservicios y lógica de negocio con React, Next.js, Python, PHP y Perl.',
  },
  {
    icon: Cloud,
    title: 'Entrega en producción',
    text: 'Trabajo con Git, Docker, cloud, despliegues, automatización y prácticas de MLOps para mantener servicios vivos.',
  },
]

const caseStudies = [
  {
    icon: ShieldCheck,
    domain: 'Banca y biometría',
    title: 'Fraude documental, OCR y verificación de identidad',
    context:
      'En productos financieros y bancarios, participé en flujos para validar documentos oficiales, firmas y señales biométricas.',
    contributions: [
      'Integración de OCR, reglas de negocio y modelos de detección de fraude.',
      'APIs y microservicios con Python, Django, Flask y serialización de datos.',
      'Conexiones con SAP, WebMethods, Mulesoft, WSO2 y despliegues con AWS SageMaker.',
    ],
    outcome:
      'Mayor capacidad para automatizar revisión documental y reducir fricción en procesos de validación.',
  },
  {
    icon: Bot,
    domain: 'Seguros y operación',
    title: 'Asistentes, siniestros y automatización operativa',
    context:
      'En aseguradoras y servicios, trabajé en soluciones de IA para atención, análisis de siniestros y registro operativo.',
    contributions: [
      'Chatbots y voicebots, incluyendo experiencias como Hola AXA y bot de audio para SiTAG.',
      'Pipelines de visión computacional para análisis de daños y cotización de vehículos.',
      'Orquestación con n8n, APIs y modelos ligeros para flujos móviles de ajustadores.',
    ],
    outcome:
      'Procesos más rápidos para atención, captura y análisis, con IA conectada al flujo de negocio.',
  },
  {
    icon: LineChart,
    domain: 'Fintech e inversión',
    title: 'Plataforma web con lógica financiera y conciliación',
    context:
      'En Mamut Capital desarrollé funcionalidades frontend y backend para una plataforma de inversión en criptoactivos.',
    contributions: [
      'Cálculo de saldos, cortes diarios y mensuales, comisiones, rendimientos y fees.',
      'Integración con bancos, pasarelas de pago y conversiones entre MXN, USD, USDT y criptoactivos.',
      'Dashboards, reportes, microservicios REST, autenticación, paginación y manejo de errores.',
    ],
    outcome:
      'Una base operativa para productos financieros con datos, transacciones y procesos automatizados.',
  },
  {
    icon: Workflow,
    domain: 'Edtech y plataformas',
    title: 'Sistemas escolares, soporte y mejora continua',
    context:
      'En Algebraix trabajé sobre una plataforma usada por colegios para control académico, pagos, comunicación y reportes.',
    contributions: [
      'Mantenimiento full stack con Perl, React Native y SQL.',
      'Resolución de tickets, bugs y nuevas funcionalidades para administradores, docentes y padres.',
      'Ajuste de consultas y flujos para calificaciones, asistencias, pagos y estados de cuenta.',
    ],
    outcome:
      'Mejor operación diaria para usuarios administrativos y académicos con cambios sostenibles.',
  },
]

const experience = [
  {
    company: 'Lennken Group',
    role: 'Administrador de proyectos de IA y analista de datos',
    period: 'Oct 2023 - Dic 2025',
    scope: 'Gestión end-to-end de proyectos de IA y analítica para seguros y servicios.',
  },
  {
    company: 'ADEA',
    role: 'DevOps en Inteligencia Artificial',
    period: 'Sep 2022 - Jun 2025',
    scope: 'Chatbots, asistentes de voz, OCR, RAG, agentes, cloud, Docker y despliegues de modelos.',
  },
  {
    company: 'Mamut Capital',
    role: 'Desarrollador full stack',
    period: 'Dic 2024 - Dic 2025',
    scope: 'Frontend, backend, SQL, APIs financieras, conciliación y automatización de saldos.',
  },
  {
    company: 'HITSS',
    role: 'Desarrollo e integración de soluciones empresariales',
    period: 'Experiencia enterprise',
    scope: 'Integraciones, automatización y productos orientados a operación empresarial.',
  },
  {
    company: 'Blumonpay',
    role: 'Desarrollador full stack mid',
    period: 'Sep 2022 - Sep 2023',
    scope: 'React, Python, microservicios, pruebas, Docker, Jenkins, Oracle SOA Suite y sistemas bancarios.',
  },
  {
    company: 'NAAT Technologies',
    role: 'Ingeniero de innovación de proyectos e IA',
    period: 'Sep 2020 - Sep 2022',
    scope: 'Biometría, blockchain, OCR, detección de firmas, pruebas de vida y fraude bancario.',
  },
  {
    company: 'BEDU',
    role: 'Profesor experto en análisis de datos y Machine Learning',
    period: 'Oct 2023 - Presente',
    scope: 'Formación en Python, análisis de datos, Machine Learning e inteligencia artificial.',
  },
  {
    company: 'Algebraix',
    role: 'Desarrollador full stack',
    period: 'Mar 2024 - Mar 2025',
    scope: 'Plataforma escolar, Perl, React Native, SQL, soporte por tickets y mejoras operativas.',
  },
]

const stackGroups = [
  {
    title: 'Lenguajes y producto',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'Perl', 'React', 'Next.js', 'React Native'],
  },
  {
    title: 'Backend, APIs y datos',
    items: ['Django', 'Flask', 'REST APIs', 'SQL', 'Kafka', 'Marshmallow', 'SAP', 'Mulesoft', 'WSO2'],
  },
  {
    title: 'IA, ML y automatización',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OCR', 'Computer Vision', 'RAG', 'Azure OpenAI', 'n8n', 'LangChain'],
  },
  {
    title: 'Cloud y operación',
    items: ['AWS', 'Azure', 'GCP', 'AWS SageMaker', 'Docker', 'Git', 'Jenkins', 'Scrum', 'Kanban'],
  },
]

const workStyle = [
  {
    icon: Target,
    title: 'Entiendo el problema antes del stack',
    text: 'Traduzco requerimientos técnicos y de negocio en entregables claros, con alcance, riesgos y prioridades.',
  },
  {
    icon: Layers3,
    title: 'Construyo por capas',
    text: 'Modelo datos, servicios, APIs e interfaz para que el producto sea mantenible y pueda crecer sin rehacerlo todo.',
  },
  {
    icon: UsersRound,
    title: 'Trabajo con equipos mixtos',
    text: 'Me comunico con stakeholders técnicos y no técnicos, doy seguimiento a KPIs y convierto tickets en mejoras reales.',
  },
  {
    icon: Rocket,
    title: 'Cierro el ciclo',
    text: 'No me quedo en prototipos: integro, despliego, documento y dejo los servicios listos para operar.',
  },
]

const education = [
  'Administración de Empresas, UNAM',
  'Ciencias de la Computación, UnADM',
  'Ingeniería en Telecomunicaciones, IPN',
  'University of Michigan: Python Data Structures y capstone de visualización de datos',
  'Cursos en JavaScript, Bootstrap, blockchain, Solidity y desarrollo web',
]

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>MA</span>
          Marco Ávila
        </a>
        <div className="nav-links">
          <a href="#perfil">Perfil</a>
          <a href="#casos">Casos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <img className="hero-media" src={heroImage} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">AI · Data · Full Stack · Cloud</p>
          <h1>Marco Ávila</h1>
          <p className="hero-lede">
            Desarrollador de IA, datos y software full stack para empresas que necesitan convertir procesos complejos
            en productos confiables.
          </p>
          <p className="hero-copy">
            He trabajado en banca, seguros, fintech, edtech y servicios empresariales, conectando modelos, APIs,
            automatización, dashboards y sistemas productivos.
          </p>
          <div className="role-strip" aria-label="Roles objetivo">
            {roleSignals.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#casos">
              Ver evidencia
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="ghost-action" href="#contacto">
              <Mail size={18} aria-hidden="true" />
              Contacto profesional
            </a>
          </div>
        </div>
        <div className="proof-bar" aria-label="Resumen profesional">
          {proofPoints.map((point) => (
            <div key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section profile-section" id="perfil">
        <div className="section-heading">
          <p className="eyebrow">Perfil profesional</p>
          <h2>Un perfil híbrido para equipos que necesitan construir, integrar y operar.</h2>
        </div>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article className="strength-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases-section" id="casos">
        <div className="section-heading">
          <p className="eyebrow">Casos de trabajo</p>
          <h2>Pruebas concretas de experiencia, no solo una lista de tecnologías.</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map(({ icon: Icon, domain, title, context, contributions, outcome }) => (
            <article className="case-card" key={title}>
              <div className="case-domain">
                <Icon size={22} aria-hidden="true" />
                <span>{domain}</span>
              </div>
              <h3>{title}</h3>
              <p>{context}</p>
              <ul>
                {contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="outcome">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{outcome}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow">Trayectoria</p>
          <h2>Experiencia transversal en productos regulados, operación y plataformas digitales.</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.role}`}>
              <div>
                <span>{job.period}</span>
                <h3>{job.company}</h3>
              </div>
              <div>
                <p className="role">{job.role}</p>
                <p>{job.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section workstyle-section">
        <div className="section-heading">
          <p className="eyebrow">Cómo trabajo</p>
          <h2>Proceso claro para convertir incertidumbre técnica en entregables.</h2>
        </div>
        <div className="workstyle-grid">
          {workStyle.map(({ icon: Icon, title, text }) => (
            <article className="workstyle-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Stack técnico</p>
          <h2>Tecnologías agrupadas por el tipo de problema que resuelven.</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="stack-cloud">
                {group.items.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div className="section-heading">
          <p className="eyebrow">Formación</p>
          <h2>Base académica, enseñanza y aprendizaje continuo.</h2>
        </div>
        <div className="education-panel">
          <div className="education-intro">
            <GraduationCap size={28} aria-hidden="true" />
            <h3>Formación multidisciplinaria</h3>
            <p>
              Combino administración, computación, telecomunicaciones y docencia para comunicar soluciones técnicas con
              contexto de negocio.
            </p>
          </div>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Disponible para equipos que necesiten IA aplicada, datos, integraciones y desarrollo full stack.</h2>
          <p>
            Perfil preparado para roles donde sea importante entregar producto, conectar sistemas y explicar decisiones
            técnicas con claridad.
          </p>
        </div>
        <div className="contact-actions">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Code2 size={18} aria-hidden="true" />
            GitHub personal
          </a>
          <a href={linkedInSearchUrl} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            Buscar en LinkedIn
          </a>
          <a href={pagesUrl} target="_blank" rel="noreferrer">
            <FileText size={18} aria-hidden="true" />
            Compartir este portfolio
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
