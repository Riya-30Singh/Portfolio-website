import { FormEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Wrench,
  X,
} from 'lucide-react';

const github = 'https://github.com/Riya-30Singh';
const linkedin = 'https://www.linkedin.com/in/riya-singh-7434b1298';
const email = 'mailto:riyasingh80037@gmail.com';

const projects = [
  {
    index: '01',
    title: 'Smart Task Management System',
    kind: 'Web application',
    filters: ['Web', 'JavaScript'],
    description:
      'Built a responsive task management workspace with task creation, priority and status tracking, search, dashboard statistics and browser persistence.',
    proves: 'state-driven UI · filtering · LocalStorage persistence',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: [
      'Add and manage tasks',
      'Priority, status and due dates',
      'Search and dashboard statistics',
      'Theme switching and persistence',
    ],
    details: {
      Problem: 'Make everyday task planning easy to scan and maintain without requiring an account.',
      Approach: 'Designed a focused dashboard with clear task states, lightweight filtering and browser persistence.',
      Challenges: 'Keeping task edits, search results and dashboard counts synchronized across sessions.',
      Solution: 'Used structured task objects with LocalStorage persistence and derived dashboard values from the current collection.',
      Learning: 'Built confidence in state-driven UI, data persistence and responsive interaction design.',
    },
    href: 'https://github.com/Riya-30Singh/SmartTask-Management',
  },
  {
    index: '02',
    title: 'Quiz Master',
    kind: 'Interactive application',
    filters: ['Web', 'JavaScript'],
    description:
      'Developed an interactive quiz flow with categories, difficulty levels, timed questions, progress tracking and result analysis.',
    proves: 'event-driven logic · timers · feedback states',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: [
      'Categories and difficulty selection',
      'Countdown timer and navigation',
      'Progress, score and accuracy',
      'Answer review and theme switching',
    ],
    details: {
      Problem: 'Create a quiz flow that feels engaging while giving learners useful feedback after each attempt.',
      Approach: 'Separated quiz setup, question flow and result states so each step stays easy to understand.',
      Challenges: 'Managing timer behavior and preserving a reliable answer history as users navigate questions.',
      Solution: 'Tracked the active question and answer state centrally, then calculated results from the completed response set.',
      Learning: 'Practiced event-driven JavaScript, edge-case handling and designing feedback around user progress.',
    },
    href: 'https://github.com/Riya-30Singh/Quiz-Master',
  },
];

const skills = [
  { title: 'Programming', icon: Code2, values: ['Java', 'C', 'C++'] },
  { title: 'Web development', icon: ExternalLink, values: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Database', icon: Database, values: ['SQL', 'DBMS'] },
  { title: 'Computer science', icon: GraduationCap, values: ['Data Structures', 'OOP', 'Problem Solving'] },
  { title: 'Tools', icon: Wrench, values: ['Git', 'GitHub', 'VS Code', 'MS Excel', 'PowerPoint', 'Word'] },
];

const filters = ['All', 'Web', 'JavaScript', 'C++'];
const sourceSite = 'https://website-source-viewer--riyasingh80037.replit.app';
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const internships = [
  {
    number: '01',
    organization: 'InAmigos Foundation',
    role: 'Intern · Web Development',
    duration: '31 May — 13 June 2026 · 15 days',
    work: 'Worked on web development and an NGO awareness website, focusing on clear content, useful page structure and a responsive experience.',
    skills: ['HTML', 'CSS', 'Responsive design', 'UI improvement'],
    credentials: [
      { label: 'Internship certificate', href: `${sourceSite}/credentials/inamigos-internship-certificate.pdf` },
      { label: 'Appreciation certificate', href: `${sourceSite}/credentials/inamigos-appreciation-certificate.pdf` },
      { label: 'Letter of recommendation', href: `${sourceSite}/credentials/inamigos-letter-of-recommendation.pdf` },
    ],
  },
  {
    number: '02',
    organization: 'Azisly.ai',
    role: 'Intern · Impact Sprint',
    duration: '15-day live project program · April 2026',
    work: 'Completed a live project program built around AI learning, practical research, professional presentations and creating polished UI screens.',
    skills: ['AI-based research', 'UI screens', 'Presentations', 'Corporate reports'],
    credentials: [
      { label: 'Offer letter', href: `${sourceSite}/credentials/azisly-offer-letter.pdf` },
      { label: 'Completion certificate', href: `${sourceSite}/credentials/azisly-completion-certificate.pdf` },
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const closeMenu = () => setMenuOpen(false);

  const visibleProjects = projects.filter((project) => filter === 'All' || project.filters.includes(filter));
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${String(data.get('name') || '')}`);
    const body = encodeURIComponent(`${String(data.get('message') || '')}\n\n${String(data.get('name') || '')} · ${String(data.get('email') || '')}`);
    window.location.href = `mailto:riyasingh80037@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Riya Singh, home">
          <span className="brand-mark">RS</span>
          <span>Riya Singh</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="main-navigation" className={`main-nav${menuOpen ? ' mobile-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <span className="nav-icon">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
          </span>
          <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span /> Open to software development opportunities</div>
            <div className="hero-kicker">Entry-level Software Developer · Java / SQL / Web</div>
            <h1 id="hero-title">Hi, I’m <em>Riya</em><br />Singh.</h1>
            <p className="hero-lede">MCA student building responsive applications with Java, SQL, JavaScript and strong software fundamentals.</p>
            <p className="hero-intro">I turn requirements into clear, useful software while growing through project work, internships and continuous learning.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">Review selected projects <ArrowUpRight size={14} /></a>
              <a className="secondary-button" href={resumeUrl} target="_blank" rel="noreferrer"><ArrowDown size={14} /> Download resume</a>
            </div>
            <div className="proof-rail" aria-label="Portfolio summary">
              <a href="#projects"><strong>2</strong><span>Projects</span></a>
              <a href="#experience"><strong>2</strong><span>Internships</span></a>
              <a href="#education"><strong>7.8</strong><span>BCA CGPA</span></a>
            </div>
            <div className="social-row">
              <a href={github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href={email}><Mail size={15} /> Email</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Java code introduction">
            <div className="visual-grid" aria-hidden="true" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>riya.java</small></div>
              <div className="editor-code code-lines" aria-hidden="true">
                <div className="code-line"><span className="line-no">01</span><span><i>class</i> Riya {'{'}</span></div>
                <div className="code-line"><span className="line-no">02</span><span>  <b>String</b> focus = <mark>&quot;build&quot;</mark>;</span></div>
                <div className="code-line"><span className="line-no">03</span><span>  <b>String</b> stack = <mark>&quot;learn&quot;</mark>;</span></div>
                <div className="code-line"><span className="line-no">04</span><span /></div>
                <div className="code-line"><span className="line-no">05</span><span>  <i>void</i> createImpact() {'{'}</span></div>
                <div className="code-line"><span className="line-no">06</span><span>    solveProblems();</span></div>
                <div className="code-line"><span className="line-no">07</span><span>    shipProjects();</span></div>
                <div className="code-line"><span className="line-no">08</span><span>  {'}'}</span></div>
                <div className="code-line"><span className="line-no">09</span><span>{'}'}</span></div>
              </div>
            </div>
            <div className="visual-caption"><span>01 / 04</span><span>Turning curiosity into code</span></div>
          </div>
        </section>

        <section className="content-section section-pad" id="about" aria-labelledby="about-heading">
          <span className="section-index">01</span>
          <div className="section-heading">
            <div className="eyebrow">A little about me</div>
            <h2 id="about-heading">Foundations first. Curiosity always.</h2>
            <p>A grounded start in software development, with room to keep growing.</p>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>I&apos;m an MCA student with a BCA background, developing strong foundations in Java, SQL, Data Structures, OOP and DBMS. I&apos;m especially interested in understanding how software works beneath the interface and how thoughtful engineering can make everyday tasks simpler.</p>
              <p>Through practical projects and continuous learning, I&apos;m building the habits that matter: breaking problems down, writing maintainable code, testing ideas and improving with every iteration.</p>
            </div>
            <div className="snapshot">
              <div className="snapshot-title">Quick snapshot <span /></div>
              {[
                ['Education', 'MCA · 2025–Present'],
                ['Primary language', 'Java'],
                ['Database', 'SQL'],
                ['Frontend', 'HTML · CSS · JavaScript'],
                ['Version control', 'Git & GitHub'],
                ['Career level', 'Fresher'],
              ].map(([label, value]) => (
                <div className="snapshot-row" key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section skills-section section-pad" id="skills" aria-labelledby="skills-heading">
          <span className="section-index">02</span>
          <div className="section-heading">
            <div className="eyebrow">Toolkit</div>
            <h2 id="skills-heading">Tools for the work ahead.</h2>
            <p>An honest, growing toolkit built around strong fundamentals.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, values }) => (
              <article className="skill-card" key={title}>
                <Icon size={19} className="skill-icon" />
                <h3>{title}</h3>
                <div className="skill-tags">{values.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
            </div>
        </section>

        <section className="content-section section-pad" id="projects" aria-labelledby="work-heading">
          <span className="section-index">03</span>
          <div className="section-heading">
            <div className="eyebrow">Selected work</div>
            <h2 id="work-heading">Proof, not promises.</h2>
            <p>The projects where I’ve practiced turning requirements into working experiences. Each card shows the skill it demonstrates and the evidence available today.</p>
          </div>
          <div className="project-controls">
            <div className="project-filters" role="tablist" aria-label="Filter projects by category">
              {filters.map((item) => (
                <button className={`project-filter${filter === item ? ' active' : ''}`} type="button" role="tab" aria-selected={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>
              ))}
            </div>
            <p className="project-count" aria-live="polite">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown</p>
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => {
              const isExpanded = expandedFeatures[project.index] ?? false;
              const additionalFeatures = project.features.slice(2);
              return (
                <article className="project-card" key={project.index}>
                  <div className="project-card-top">
                    <span className="project-number">{project.index}</span>
                    <span className="project-type">{project.kind}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-proof">Proves: {project.proves}</p>
                  <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <ul className="feature-list feature-list-visible">
                    {project.features.slice(0, 2).map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}
                  </ul>
                  {additionalFeatures.length > 0 && (
                    <>
                      <button
                        className="feature-toggle"
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`features-${project.index}`}
                        onClick={() => setExpandedFeatures((current) => ({ ...current, [project.index]: !isExpanded }))}
                      >
                        <span>{isExpanded ? 'Hide additional features' : `Show ${additionalFeatures.length} more features`}</span>
                        <ChevronDown size={15} className={isExpanded ? 'rotated' : ''} />
                      </button>
                      {isExpanded && (
                        <ul className="feature-list feature-list-more" id={`features-${project.index}`}>
                          {additionalFeatures.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}
                        </ul>
                      )}
                    </>
                  )}
                  <div className="project-actions">
                    <details className="case-study">
                      <summary className="text-button">View case study <ArrowUpRight size={13} /></summary>
                      <div className="case-study-content">
                        <p>{project.description}</p>
                        <p><strong>Proves:</strong> {project.proves}</p>
                        {Object.entries(project.details).map(([heading, detail]) => (
                          <p key={heading}><strong>{heading}:</strong> {detail}</p>
                        ))}
                      </div>
                    </details>
                    {project.href ? (
                      <a className="text-button" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                        View repository <ExternalLink size={12} />
                      </a>
                    ) : <span className="text-button is-disabled" aria-label="Repository link not provided">View repository</span>}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section section-pad" id="education" aria-labelledby="education-heading">
          <span className="section-index">04</span>
          <div className="section-heading">
            <div className="eyebrow">Education</div>
            <h2 id="education-heading">Learning in motion.</h2>
            <p>The academic path behind the practical work.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker">01</span>
              <span className="timeline-date">2025 — PRESENT</span>
              <div>
                <h3>Master of Computer Applications</h3>
                <p>MCA studies</p>
                <strong>Building deeper foundations in software development and computer science.</strong>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-marker">02</span>
              <span className="timeline-date">2025</span>
              <div>
                <h3>Bachelor of Computer Applications</h3>
                <p>World College of Technology and Management · MDU</p>
                <strong>CGPA: 7.8</strong>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-marker">03</span>
              <span className="timeline-date">CBSE</span>
              <div>
                <h3>Class XII</h3>
                <p>Senior secondary education</p>
                <strong>86%</strong>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-marker">04</span>
              <span className="timeline-date">CBSE</span>
              <div>
                <h3>Class X</h3>
                <p>Secondary education</p>
                <strong>79%</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section section-pad" id="experience" aria-labelledby="experience-heading">
          <span className="section-index">05</span>
          <div className="experience-card">
            <div className="section-heading">
              <div className="eyebrow">Internship / Experience</div>
              <h2 id="experience-heading">Learning by making.</h2>
              <p>Two distinct internship experiences with practical work, training and supporting credentials.</p>
            </div>
            <div className="exposure-list">
              {internships.map((internship) => (
                <article className="internship-entry" key={internship.organization}>
                  <div className="experience-entry-heading">
                    <span>{internship.number}</span>
                    <div>
                      <h3>{internship.organization}</h3>
                      <p className="experience-meta">{internship.role} · {internship.duration}</p>
                    </div>
                  </div>
                  <p><b>Work</b><br />{internship.work}</p>
                  <div className="experience-skills">
                    {internship.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <div className="credential-list">
                    <div className="credential-heading"><span>Credentials</span><p>Open supporting documents</p></div>
                    <div className="credential-actions">
                      {internship.credentials.map((credential) => (
                        <a className="credential-button" href={credential.href} target="_blank" rel="noreferrer" key={credential.href}>
                          <GraduationCap size={13} />
                          <span><b>{credential.label}</b><small>{internship.organization}</small></span>
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
              <div><span>03</span><p><b>Independent project work</b><br />Built responsive web and console applications while strengthening problem solving and implementation habits.</p></div>
              <div><span>04</span><p><b>Continuous learning</b><br />Exploring Java, databases, data structures and the practices that make software dependable.</p></div>
              <div className="editable-note"><GraduationCap size={13} /> Building evidence through projects, internships and continuous learning.</div>
            </div>
          </div>
        </section>

        <section className="content-section section-pad" id="contact" aria-labelledby="contact-heading">
          <span className="section-index">06</span>
          <div className="contact-grid">
            <div>
              <div className="section-heading">
                <div className="eyebrow">Let’s build something</div>
                <h2 id="contact-heading">A conversation could be the start of something useful.</h2>
                <p>I&apos;m currently open to entry-level Software Developer, Web Developer and Frontend Developer opportunities where I can learn, contribute and grow.</p>
              </div>
              <div className="contact-details">
                <div className="email-row">
                  <a href={email}><Mail size={17} /><span><small>Email</small>riyasingh80037@gmail.com</span></a>
                  <button className="copy-email" type="button" onClick={() => void navigator.clipboard?.writeText('riyasingh80037@gmail.com')} aria-label="Copy email address">
                    Copy <ArrowRight size={13} />
                  </button>
                </div>
                <a href={github} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GitHub</small>Riya-30Singh</span></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LinkedIn</small>Riya Singh</span></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendMessage}>
              <div className="form-heading"><Mail size={15} /> Send a note</div>
              <label htmlFor="contact-name">Name<input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" /></label>
              <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
              <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" required placeholder="Tell me a little about the opportunity..." /></label>
              <button className="primary-button" type="submit">Send message <ArrowUpRight size={14} /></button>
            </form>
          </div>
        </section>

        <section className="resume-cta section-pad" aria-label="Resume and contact links">
          <h2>Entry-level developer ready to learn, contribute and grow.<br />Want to know more?</h2>
          <div className="resume-actions">
            <a className="secondary-button" href={resumeUrl} target="_blank" rel="noreferrer"><ArrowDown size={14} /> Resume <ArrowUpRight size={13} /></a>
            <a className="primary-button" href={email}>Get in touch <ArrowUpRight size={14} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Made with Replit · Build for free</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;