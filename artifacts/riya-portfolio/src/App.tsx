import { FormEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
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
      'Search and filter tasks',
      'Dashboard statistics',
    ],
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
      'Progress tracking',
      'Result analysis',
    ],
    href: 'https://github.com/Riya-30Singh/Quiz-Master',
  },
  {
    index: '03',
    title: 'Portfolio Website',
    kind: 'Personal site',
    filters: ['Web', 'Portfolio'],
    description:
      'Designed and developed a responsive portfolio that presents technical skills, projects, education, credentials and professional direction.',
    proves: 'React UI · responsive design · accessible navigation',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    features: [
      'Responsive layout',
      'Project-first presentation',
      'Accessible navigation',
      'Education and experience sections',
    ],
    href: null,
  },
];

const skills = [
  { title: 'Programming', values: ['Java', 'C', 'C++'] },
  { title: 'Web development', values: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Database', values: ['SQL', 'DBMS'] },
  { title: 'Computer science', values: ['Data Structures', 'OOP', 'Problem Solving'] },
  { title: 'Tools', values: ['Git', 'GitHub', 'VS Code', 'MS Excel', 'PowerPoint', 'Word'] },
];

const filters = ['All', 'Web', 'JavaScript', 'Portfolio'];
const sourceSite = 'https://website-source-viewer--riyasingh80037.replit.app';
const resumeUrl = `${sourceSite}/resume.pdf`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
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
      <header className="container topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Riya Singh, home">
          <span className="brand-mark">RS</span>
          <span>Riya Singh</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
        <nav id="main-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <span className="nav-social">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={9} /></a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={9} /></a>
          </span>
          <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume <ArrowUpRight size={8} /></a>
        </nav>
      </header>

      <main>
        <section className="container hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="status-dot" /> Open to software development opportunities</div>
              <div className="role-line">Entry-level Software Developer · Java / SQL / Web</div>
              <h1 id="hero-title">Hi, I’m <span>Riya</span><br />Singh.</h1>
              <p className="hero-lead">MCA student building responsive applications with Java, SQL, JavaScript and strong software fundamentals.</p>
              <p className="hero-body">I turn requirements into clear, useful software while growing through project work, internships and continuous learning.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">Review selected projects <ArrowUpRight size={9} /></a>
                <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer"><ArrowDown size={9} /> Download resume</a>
              </div>
              <div className="hero-summary" aria-label="Portfolio summary">
                <div className="summary-item"><strong>3</strong><span>Projects</span></div>
                <div className="summary-item"><strong>2</strong><span>Internships</span></div>
                <div className="summary-item"><strong>7.8</strong><span>BCA CGPA</span></div>
              </div>
              <div className="hero-socials">
                <a href={github} target="_blank" rel="noreferrer"><Github size={8} /> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={8} /> LinkedIn</a>
                <a href={email}><Mail size={8} /> Email</a>
              </div>
            </div>
            <div className="editor-wrap" aria-label="Java code introduction">
              <div className="editor">
                <div className="editor-bar">
                  <span className="editor-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span>riya.java</span>
                </div>
                <div className="editor-code" aria-hidden="true">
                  <div className="code-line"><span className="line-no">01</span><span><span className="syntax-key">class</span> Riya {'{'}</span></div>
                  <div className="code-line"><span className="line-no">02</span><span>  <span className="syntax-fn">String</span> focus = <span className="syntax-string">&quot;build&quot;</span>;</span></div>
                  <div className="code-line"><span className="line-no">03</span><span>  <span className="syntax-fn">String</span> stack = <span className="syntax-string">&quot;learn&quot;</span>;</span></div>
                  <div className="code-line"><span className="line-no">04</span><span /></div>
                  <div className="code-line"><span className="line-no">05</span><span>  <span className="syntax-fn">void</span> createImpact() {'{'}</span></div>
                  <div className="code-line"><span className="line-no">06</span><span>    solveProblems();</span></div>
                  <div className="code-line"><span className="line-no">07</span><span>    shipProjects();</span></div>
                  <div className="code-line"><span className="line-no">08</span><span>  {'}'}</span></div>
                  <div className="code-line"><span className="line-no">09</span><span>{'}'}</span></div>
                </div>
              </div>
              <div className="profile-badge">
                <img src="/profile-picture.jpg" alt="Riya Singh" />
                <span className="profile-meta"><small>PROFILE</small><strong>Riya Singh</strong></span>
              </div>
              <span className="editor-caption">Turning curiosity into code</span>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <span className="section-marker">01</span>
          <div className="container about-grid">
            <div>
              <div className="eyebrow">A little about me</div>
              <h2 className="section-title" id="about-heading">Foundations first.<br /><em>Curiosity always.</em></h2>
            </div>
            <div className="about-copy">
              <p className="about-intro">A grounded start in software development, with room to keep growing.</p>
              <p>I&apos;m an MCA student with a BCA background, developing strong foundations in Java, SQL, Data Structures, OOP and DBMS. I&apos;m especially interested in understanding how software works beneath the interface and how thoughtful engineering can make everyday tasks simpler.</p>
              <p>Through practical projects and continuous learning, I&apos;m building the habits that matter: breaking problems down, writing maintainable code, testing ideas and improving with every iteration.</p>
              <div className="quick-snapshot">
                <h3>Quick snapshot</h3>
                <dl>
                  <div><dt>Education</dt><dd>MCA · 2025–Present</dd></div>
                  <div><dt>Primary language</dt><dd>Java</dd></div>
                  <div><dt>Database</dt><dd>SQL</dd></div>
                  <div><dt>Frontend</dt><dd>HTML · CSS · JavaScript</dd></div>
                  <div><dt>Version control</dt><dd>Git &amp; GitHub</dd></div>
                  <div><dt>Career level</dt><dd>Fresher</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <span className="section-marker">02</span>
          <div className="container skills-layout">
            <div>
              <div className="eyebrow">Toolkit</div>
              <h2 className="section-title" id="skills-heading">Tools for the<br /><em>work ahead.</em></h2>
              <p className="skills-note">An honest, growing toolkit built around strong fundamentals.</p>
            </div>
            <div className="skill-groups">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-head"><h3>{group.title}</h3><small>0{index + 1}</small></div>
                  <div className="chips">{group.values.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <span className="section-marker">03</span>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Selected work</div>
                <h2 className="section-title" id="work-heading">Proof, not promises.</h2>
              </div>
              <p className="intro">The projects where I’ve practiced turning requirements into working experiences. Each card shows the skill it demonstrates and the evidence available today.</p>
            </div>
            <div className="project-toolbar">
              <div className="project-filters" aria-label="Filter projects">
                {filters.map((item) => (
                  <button className="filter-button" type="button" aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>
                ))}
              </div>
              <span className="project-count">{visibleProjects.length} projects shown</span>
            </div>
            <div className="project-list">
              {visibleProjects.map((project) => (
                <article className="project-row" key={project.index}>
                  <span className="project-index">{project.index}</span>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-kind">{project.kind}</div>
                  </div>
                  <div className="project-description">
                    {project.description}
                    <div className="project-proves"><strong>Proves:</strong> {project.proves}</div>
                    <div className="project-tech">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <ul className="project-features">
                      {project.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <details className="more-features">
                      <summary>Show 2 more features</summary>
                      <ul>{project.features.slice(2).map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    </details>
                  </div>
                  <div className="project-actions">
                    <details className="case-study">
                      <summary><Code2 size={9} /> View case study</summary>
                      <p>{project.description}</p>
                      <p><strong>Proves:</strong> {project.proves}</p>
                    </details>
                    {project.href ? (
                      <a className="project-action" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                        <Github size={9} /> View repository <ExternalLink size={8} />
                      </a>
                    ) : <span className="project-action" aria-label="Repository link not provided"><Github size={9} /> View repository</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-heading">
          <span className="section-marker">04</span>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Education</div>
                <h2 className="section-title" id="education-heading">Learning in<br /><em>motion.</em></h2>
              </div>
              <p className="intro">The academic path behind the practical work.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">01<br />2025 — PRESENT</div>
                <div className="timeline-main">
                  <h3>Master of Computer Applications</h3>
                  <div className="timeline-place"><GraduationCap size={10} /> MCA studies</div>
                  <p><strong>Building deeper foundations in software development and computer science.</strong></p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">02<br />2025</div>
                <div className="timeline-main">
                  <h3>Bachelor of Computer Applications</h3>
                  <div className="timeline-place"><GraduationCap size={10} /> World College of Technology and Management · MDU</div>
                  <p><strong>CGPA: 7.8</strong></p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">03<br />CBSE</div>
                <div className="timeline-main">
                  <h3>Class XII</h3>
                  <div className="timeline-place">Senior secondary education</div>
                  <p><strong>86%</strong></p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">04<br />CBSE</div>
                <div className="timeline-main">
                  <h3>Class X</h3>
                  <div className="timeline-place">Secondary education</div>
                  <p><strong>79%</strong></p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <span className="section-marker">05</span>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Internship / Experience</div>
                <h2 className="section-title" id="experience-heading">Learning by<br /><em>making.</em></h2>
              </div>
              <p className="intro">Two distinct internship experiences with practical work, training and supporting credentials.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">31 MAY — 13 JUNE 2026</div>
                <div className="timeline-main">
                  <h3>InAmigos Foundation</h3>
                  <div className="timeline-place">Intern · Web Development · 31 May — 13 June 2026 · 15 days</div>
                  <h4>Work</h4>
                  <p>Worked on web development and an NGO awareness website, focusing on clear content, useful page structure and a responsive experience.</p>
                  <div className="timeline-meta"><span>HTML</span><span>CSS</span><span>Responsive design</span><span>UI improvement</span></div>
                  <div className="credential-block">
                    <span>Credentials · Open supporting documents</span>
                    <div className="credential-links">
                      <a href={`${sourceSite}/credentials/inamigos-internship-certificate.pdf`} target="_blank" rel="noreferrer">Internship certificate</a>
                      <a href={`${sourceSite}/credentials/inamigos-appreciation-certificate.pdf`} target="_blank" rel="noreferrer">Appreciation certificate</a>
                      <a href={`${sourceSite}/credentials/inamigos-letter-of-recommendation.pdf`} target="_blank" rel="noreferrer">Letter of recommendation</a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">APRIL 2026</div>
                <div className="timeline-main">
                  <h3>Azisly.ai</h3>
                  <div className="timeline-place">Intern · Impact Sprint · 15-day live project program · April 2026</div>
                  <h4>Work</h4>
                  <p>Completed a live project program built around AI learning, practical research, professional presentations and creating polished UI screens.</p>
                  <div className="timeline-meta"><span>AI-based research</span><span>UI screens</span><span>Presentations</span><span>Corporate reports</span></div>
                  <div className="credential-block">
                    <span>Credentials · Open supporting documents</span>
                    <div className="credential-links">
                      <a href={`${sourceSite}/credentials/azisly-offer-letter.pdf`} target="_blank" rel="noreferrer">Offer letter</a>
                      <a href={`${sourceSite}/credentials/azisly-completion-certificate.pdf`} target="_blank" rel="noreferrer">Completion certificate</a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">03</div>
                <div className="timeline-main">
                  <h3>Independent project work</h3>
                  <p>Built responsive web and console applications while strengthening problem solving and implementation habits.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">04</div>
                <div className="timeline-main">
                  <h3>Continuous learning</h3>
                  <p>Exploring Java, databases, data structures and the practices that make software dependable.</p>
                </div>
              </article>
            </div>
            <p className="experience-summary">Building evidence through projects, internships and continuous learning.</p>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-heading">
          <span className="section-marker">06</span>
            <div className="container contact-panel">
            <div>
              <div className="eyebrow">Let’s build something</div>
              <h2 className="contact-title" id="contact-heading">A conversation could be<br /><em>the start of something useful.</em></h2>
              <p className="contact-blurb">I&apos;m currently open to entry-level Software Developer, Web Developer and Frontend Developer opportunities where I can learn, contribute and grow.</p>
              <div className="email-copy-row">
                <a className="email-address" href={email}>riyasingh80037@gmail.com</a>
                <button type="button" onClick={() => void navigator.clipboard?.writeText('riyasingh80037@gmail.com')}>Copy</button>
              </div>
              <form className="contact-form" onSubmit={sendMessage}>
                <h3>Send a note</h3>
                <label>Name<input name="name" required autoComplete="name" /></label>
                <label>Email<input name="email" type="email" required autoComplete="email" /></label>
                <label>Message<textarea name="message" required /></label>
                <button type="submit">Send message <ArrowUpRight size={9} /></button>
              </form>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href={email}><span><Mail size={10} /> riyasingh80037@gmail.com</span><ArrowUpRight size={10} /></a>
              <a className="contact-link" href={github} target="_blank" rel="noreferrer"><span><Github size={10} /> GitHub</span><ExternalLink size={9} /></a>
              <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer"><span><ArrowRight size={10} /> LinkedIn</span><ExternalLink size={9} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <div>
          <strong>Entry-level developer ready to learn, contribute and grow.</strong>
          <span>Want to know more?</span>
        </div>
        <div className="footer-links"><a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a><a href={email}>Get in touch</a></div>
        <span>Made with Replit · Build for free</span>
      </footer>
    </div>
  );
}

export default App;