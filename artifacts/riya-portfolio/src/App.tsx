import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
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
    kind: 'Productivity · Front-end',
    description:
      'A practical task manager built around the everyday details: capture work, keep priorities visible, and retain tasks locally between visits.',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    href: 'https://github.com/Riya-30Singh/SmartTask-Management',
  },
  {
    index: '02',
    title: 'Quiz Master',
    kind: 'Interactive application',
    description:
      'A browser-based quiz experience with a clear question flow and local progress, built with the fundamentals of the web platform.',
    stack: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    href: 'https://github.com/Riya-30Singh/Quiz-Master',
  },
  {
    index: '03',
    title: 'Portfolio Website',
    kind: 'Personal website',
    description:
      'A responsive portfolio made to bring projects, experience, and learning into one thoughtful place.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    href: null,
  },
];

const skills = [
  { title: 'Languages', values: ['Java', 'C', 'C++', 'JavaScript'] },
  { title: 'Web', values: ['HTML', 'CSS'] },
  { title: 'Core concepts', values: ['Data structures', 'OOP', 'Problem solving'] },
  { title: 'Data', values: ['SQL', 'DBMS'] },
  { title: 'Tools', values: ['Git', 'GitHub', 'VS Code', 'MS Office'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
          data-testid="button-menu-toggle"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="main-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu} data-testid="link-nav-about">About</a>
          <a href="#skills" onClick={closeMenu} data-testid="link-nav-skills">Skills</a>
          <a href="#work" onClick={closeMenu} data-testid="link-nav-work">Selected work</a>
          <a href="#experience" onClick={closeMenu} data-testid="link-nav-experience">Experience</a>
          <a href="#education" onClick={closeMenu} data-testid="link-nav-education">Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Let&apos;s talk <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section className="container hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow" />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker reveal"><span className="status-dot" /> MCA student · Developer in progress</div>
              <h1 id="hero-title" className="reveal reveal-delay-1">Building with<br /><span>curiosity.</span></h1>
              <p className="hero-lead reveal reveal-delay-2">
                I&apos;m <strong>Riya Singh</strong> — an early-career developer focused on strong fundamentals,
                useful projects, and getting a little better with every build.
              </p>
              <div className="hero-actions reveal reveal-delay-3">
                <a className="button-primary" href="#work" data-testid="link-explore-work">Explore my work <ArrowDown size={14} /></a>
                <a className="text-link" href={github} target="_blank" rel="noreferrer" data-testid="link-github-hero"><Github size={15} /> GitHub profile <ArrowUpRight size={13} /></a>
              </div>
              <div className="hero-footnote">
                <span>Based in India</span>
                <span>Open to entry-level roles</span>
                <span>Currently learning &amp; building</span>
              </div>
            </div>

            <div className="editor-wrap reveal reveal-delay-2" aria-label="Decorative code editor showing a small JavaScript introduction">
              <div className="orbit-tag tag-one">curious_by_default = true</div>
              <div className="editor">
                <div className="editor-bar">
                  <span className="editor-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span>riya / introduction.js</span>
                  <Braces size={14} />
                </div>
                <div className="editor-code" aria-hidden="true">
                  <div className="code-line"><span className="line-no">01</span><span><span className="syntax-key">const</span> developer = {'{'}</span></div>
                  <div className="code-line"><span className="line-no">02</span><span>  name: <span className="syntax-string">&quot;Riya Singh&quot;</span>,</span></div>
                  <div className="code-line"><span className="line-no">03</span><span>  studying: <span className="syntax-string">&quot;MCA&quot;</span>,</span></div>
                  <div className="code-line"><span className="line-no">04</span><span>  focus: [</span></div>
                  <div className="code-line"><span className="line-no">05</span><span>    <span className="syntax-string">&quot;strong foundations&quot;</span>,</span></div>
                  <div className="code-line"><span className="line-no">06</span><span>    <span className="syntax-string">&quot;thoughtful projects&quot;</span>,</span></div>
                  <div className="code-line"><span className="line-no">07</span><span>    <span className="syntax-string">&quot;always learning&quot;</span></span></div>
                  <div className="code-line"><span className="line-no">08</span><span>  ],</span></div>
                  <div className="code-line"><span className="line-no">09</span><span>  status: <span className="syntax-string">&quot;open to opportunities&quot;</span>,</span></div>
                  <div className="code-line"><span className="line-no">10</span><span>  sayHello: <span className="syntax-fn">() =&gt;</span> <span className="syntax-string">&quot;let's build&quot;</span></span></div>
                  <div className="code-line"><span className="line-no">11</span><span>{'}'};</span></div>
                  <div className="code-line"><span className="line-no">12</span><span className="syntax-comment">// one useful thing at a time</span></div>
                  <div className="code-line"><span className="line-no">13</span><span className="syntax-plain">&gt; <span className="cursor" /></span></div>
                </div>
              </div>
              <span className="editor-caption">a little about how I think</span>
              <div className="orbit-tag tag-two">console.log(hello)</div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">01 / About</div>
              <h2 className="section-title" id="about-heading">Learning by<br /><em>making.</em></h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a computer applications student who enjoys turning what I learn into something
                people can actually use. My work so far spans small web applications, interactive
                experiences, and the building blocks behind them.
              </p>
              <p>
                I care about <strong>clear thinking, steady practice, and writing code I can explain.</strong>
                I&apos;m building a strong base in programming and web development while looking for an
                opportunity to learn alongside a team and contribute from day one.
              </p>
              <div className="stats-strip" aria-label="Education at a glance">
                <div className="stat"><strong>7.8</strong><span>BCA CGPA</span></div>
                <div className="stat"><strong>86%</strong><span>Class XII</span></div>
                <div className="stat"><strong>79%</strong><span>Class X</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="container skills-layout">
            <div>
              <div className="eyebrow">02 / Toolkit</div>
              <h2 className="section-title" id="skills-heading">Good basics.<br /><em>Growing daily.</em></h2>
              <p className="skills-note">A working toolkit built through coursework, practice, and projects — with the fundamentals always in focus.</p>
            </div>
            <div className="skill-groups">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.title} data-testid={`group-skills-${index}`}>
                  <div className="skill-group-head"><h3>{group.title}</h3><small>0{index + 1}</small></div>
                  <div className="chips">
                    {group.values.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">03 / Selected work</div>
                <h2 className="section-title" id="work-heading">Small builds.<br /><em>Real practice.</em></h2>
              </div>
              <p className="intro">Three projects that reflect how I learn: start with a clear problem, build with the tools I know, and keep improving the details.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.index} data-testid={`card-project-${project.index}`}>
                  <span className="project-index">{project.index}</span>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-kind">{project.kind}</div>
                  </div>
                  <div className="project-description">
                    {project.description}
                    <div className="project-tech">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`} data-testid={`link-project-${project.index}`}>
                      <ArrowUpRight size={19} />
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled" aria-label="Repository link not provided"><Code2 size={18} /></span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-heading">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">04 / Education</div>
                <h2 className="section-title" id="education-heading">The foundation<br /><em>under the work.</em></h2>
              </div>
              <p className="intro">A steady academic path in computer applications, backed by curiosity beyond the syllabus.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item" data-testid="education-mca">
                <div className="timeline-date">2025 — PRESENT</div>
                <div className="timeline-main">
                  <h3>Master of Computer Applications</h3>
                  <div className="timeline-place"><GraduationCap size={13} /> MCA · In progress</div>
                  <p>Currently pursuing postgraduate study in computer applications and building on a strong base in programming and software development.</p>
                </div>
              </article>
              <article className="timeline-item" data-testid="education-bca">
                <div className="timeline-date">COMPLETED 2025</div>
                <div className="timeline-main">
                  <h3>Bachelor of Computer Applications</h3>
                  <div className="timeline-place"><GraduationCap size={13} /> World College of Technology and Management · MDU</div>
                  <p>Undergraduate degree in computer applications, with a CGPA of 7.8.</p>
                  <div className="timeline-meta"><span>CGPA 7.8</span><span>Graduated 2025</span></div>
                </div>
              </article>
              <article className="timeline-item" data-testid="education-school">
                <div className="timeline-date">SCHOOL EDUCATION</div>
                <div className="timeline-main">
                  <h3>Senior &amp; Secondary School</h3>
                  <div className="timeline-place">Class XII · Class X</div>
                  <div className="timeline-meta"><span>XII · 86%</span><span>X · 79%</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">05 / Internship experience</div>
                <h2 className="section-title" id="experience-heading">Learning in<br /><em>the real world.</em></h2>
              </div>
              <p className="intro">Short, focused experiences that brought coursework closer to collaborative work and practical delivery.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item" data-testid="internship-inamigos">
                <div className="timeline-date">31 MAY — 13 JUNE 2026</div>
                <div className="timeline-main">
                  <h3>Web Development Intern</h3>
                  <div className="timeline-place">InAmigos Foundation</div>
                  <p>A focused web development internship, applying front-end foundations in a practical setting and learning through hands-on work.</p>
                  <div className="timeline-meta"><span>15 days</span><span>Web development</span></div>
                </div>
              </article>
              <article className="timeline-item" data-testid="internship-azisly">
                <div className="timeline-date">APRIL 2026</div>
                <div className="timeline-main">
                  <h3>Impact Sprint Intern</h3>
                  <div className="timeline-place">Azisly.ai</div>
                  <p>A short impact sprint focused on contributing to a defined challenge, working with purpose, and learning in a fast-moving environment.</p>
                  <div className="timeline-meta"><span>15-day Impact Sprint</span><span>April 2026</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-panel">
              <div>
                <div className="eyebrow">06 / Contact</div>
                <h2 className="contact-title" id="contact-heading">Let&apos;s build<br /><em>something useful.</em></h2>
                <p className="contact-blurb">I&apos;m open to entry-level opportunities, internships, and conversations with people who enjoy making thoughtful things.</p>
              </div>
              <div className="contact-actions">
                <a className="contact-link" href={email} data-testid="link-contact-email"><span><Mail size={15} /> riyasingh80037@gmail.com</span><ArrowUpRight size={15} /></a>
                <a className="contact-link" href={github} target="_blank" rel="noreferrer" data-testid="link-contact-github"><span><Github size={15} /> GitHub</span><ExternalLink size={14} /></a>
                <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer" data-testid="link-contact-linkedin"><span><ArrowRight size={15} /> LinkedIn</span><ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Riya Singh</span>
        <span>Made with curiosity &amp; a little bit of <a href="#home">code <ArrowUpRight size={11} /></a></span>
        <a href="#home" data-testid="link-back-to-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;