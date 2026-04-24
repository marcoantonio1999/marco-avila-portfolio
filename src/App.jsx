import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  DatabaseZap,
  GraduationCap,
  Mail,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import heroImage from './assets/hero-portfolio.png'
import './App.css'

const githubUrl = 'https://github.com/marcoantonio1999'

const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'IA aplicada',
    text: 'Modelos de ML, Deep Learning, visión computacional, OCR, LLMs, RAG y agentes para flujos empresariales.',
  },
  {
    icon: DatabaseZap,
    title: 'Data engineering',
    text: 'Pipelines, SQL, limpieza, transformación, APIs y dashboards ejecutivos para decisiones operativas.',
  },
  {
    icon: Code2,
    title: 'Full stack',
    text: 'React, Next.js, Python, Django, Flask, PHP, Perl, microservicios REST y productos web responsivos.',
  },
  {
    icon: Cloud,
    title: 'Cloud y MLOps',
    text: 'Despliegues en AWS, Azure y GCP con Docker, Git, automatización, monitoreo y versionamiento.',
  },
]

const featuredWork = [
  {
    company: 'HITSS',
    role: 'IA, integraciones y automatización enterprise',
    period: 'Experiencia clave',
    accent: 'Enterprise',
    summary:
      'Trabajo con soluciones de inteligencia artificial, automatización, integraciones y productos orientados a operación empresarial.',
    bullets: ['Arquitecturas con APIs y servicios cloud', 'Flujos de IA para negocio y soporte operativo', 'Enfoque en entrega, calidad y escalabilidad'],
  },
  {
    company: 'Lennken Group',
    role: 'Administrador de proyectos de IA y analista de datos',
    period: 'Oct 2023 - Dic 2025',
    accent: 'Seguros',
    summary:
      'Gestión end-to-end de IA y analítica para aseguradoras y servicios, desde requerimientos hasta puesta en producción.',
    bullets: ['Visión computacional para siniestros de autos', 'Chatbots y voicebots como Hola AXA y SiTAG', 'Agentes con n8n, APIs y modelos ligeros en móvil'],
  },
  {
    company: 'Mamut Capital',
    role: 'Desarrollador full stack',
    period: 'Dic 2024 - Dic 2025',
    accent: 'Fintech',
    summary:
      'Plataforma web de inversión en criptoactivos con lógica financiera, saldos, rendimientos, comisiones y conciliación.',
    bullets: ['Frontend y backend con PHP, JavaScript, SQL, React y Next.js', 'Integraciones bancarias, pagos, MXN, USD y USDT', 'Microservicios REST y procesos automatizados'],
  },
  {
    company: 'ADEA',
    role: 'DevOps en Inteligencia Artificial',
    period: 'Sep 2022 - Jun 2025',
    accent: 'Banca',
    summary:
      'IA para biometría, fraude documental, OCR, firmas digitales y APIs de integración en entornos financieros.',
    bullets: ['AWS SageMaker, SAP, WebMethods, Mulesoft y WSO2', 'Modelos para pruebas de vida y detección de robo de identidad', 'Microservicios con Python, Django, Flask y Docker'],
  },
]

const additionalExperience = [
  'BEDU: profesor experto en análisis de datos, Python, Machine Learning e inteligencia artificial.',
  'NAAT Technologies: innovación de proyectos, IA, banca, blockchain, OCR, biometría y firmas digitales.',
  'Blumonpay: desarrollo full stack mid para productos bancarios con React, Python, Selenium, Docker y Jenkins.',
  'Algebraix: desarrollo full stack para plataforma escolar con Perl, React Native, SQL y soporte por tickets.',
]

const projects = [
  {
    icon: Bot,
    title: 'Asistentes conversacionales',
    text: 'Chatbots, voicebots, prompts, memoria contextual, Twilio, paneles web y respuestas ajustadas por producto.',
  },
  {
    icon: ShieldCheck,
    title: 'Biometría y fraude',
    text: 'INE, pasaporte, licencias, tarjetas de circulación, firmas, OCR y reglas de negocio contra fraude.',
  },
  {
    icon: Workflow,
    title: 'Siniestros y operaciones',
    text: 'Pipelines para cotización, análisis de daños, registro automatizado y aceleración del flujo operativo.',
  },
]

const techStack = [
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'React',
  'Next.js',
  'React Native',
  'Django',
  'Flask',
  'TensorFlow',
  'PyTorch',
  'scikit-learn',
  'Azure OpenAI',
  'RAG',
  'LangChain',
  'LlamaIndex',
  'Docker',
  'AWS',
  'GCP',
  'Azure',
  'SAP',
  'Mulesoft',
  'WSO2',
  'Jenkins',
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
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Impacto</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <img className="hero-media" src={heroImage} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">AI Engineer · Data · Full Stack</p>
          <h1>Marco Ávila</h1>
          <p className="hero-copy">
            Science Developer enfocado en convertir inteligencia artificial, datos y software en productos empresariales:
            banca, seguros, fintech, edtech, biometría, automatización y experiencias conversacionales.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#experiencia">
              Ver experiencia
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="ghost-action" href="#contacto">
              <Mail size={18} aria-hidden="true" />
              Contactar
            </a>
          </div>
        </div>
        <div className="hero-metrics" aria-label="Resumen profesional">
          <span>5+ años construyendo IA y software</span>
          <span>Banca · Seguros · Fintech · Edtech</span>
          <span>ML · Cloud · APIs · Producto</span>
        </div>
      </section>

      <section className="section intro-section" aria-label="Especialidad profesional">
        <div className="section-heading">
          <p className="eyebrow">Perfil</p>
          <h2>Ingeniería práctica para productos de IA que llegan a producción.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article className="focus-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow">Experiencia</p>
          <h2>Proyectos con impacto en operación, datos y negocio.</h2>
        </div>
        <div className="experience-grid">
          {featuredWork.map((job) => (
            <article className="experience-card" key={job.company}>
              <div className="card-topline">
                <span>{job.accent}</span>
                <span>{job.period}</span>
              </div>
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <p>{job.summary}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="additional-strip">
          {additionalExperience.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section project-section" id="proyectos">
        <div className="section-heading">
          <p className="eyebrow">Impacto</p>
          <h2>Líneas de trabajo que conectan IA, datos e integraciones.</h2>
        </div>
        <div className="project-grid">
          {projects.map(({ icon: Icon, title, text }) => (
            <article className="project-card" key={title}>
              <Icon size={26} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>Herramientas para construir, integrar y desplegar.</h2>
        </div>
        <div className="stack-cloud" aria-label="Tecnologías">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div className="section-heading">
          <p className="eyebrow">Formación</p>
          <h2>Base académica y aprendizaje continuo.</h2>
        </div>
        <div className="education-layout">
          <article>
            <GraduationCap size={24} aria-hidden="true" />
            <h3>Académico</h3>
            <p>Administración de Empresas, UNAM. Ciencias de la Computación, UnADM. Telecomunicaciones, IPN.</p>
          </article>
          <article>
            <BriefcaseBusiness size={24} aria-hidden="true" />
            <h3>Cursos</h3>
            <p>University of Michigan, Tecnológico de Monterrey, Platzi, Universidad Austral y rutas de blockchain, JavaScript y Python.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Disponible para proyectos donde IA, datos y software tengan que operar en serio.</h2>
        </div>
        <div className="contact-actions">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Mail size={18} aria-hidden="true" />
            Contacto por GitHub
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Code2 size={18} aria-hidden="true" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/search/results/people/?keywords=Marco%20Antonio%20Ordu%C3%B1a%20%C3%81vila" target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
