import React from 'react';
import './Profile.scss';
import abesh from './Common/Abesh.png';
import { MdOutlineAlternateEmail, MdPhone } from 'react-icons/md';
import {
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiMongodb, SiMysql, SiPostgresql, SiPostman, SiBootstrap, SiSass, SiFlask,
} from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

// Skills are grouped the way the resume groups them, so a recruiter reading
// both sees the same shape. `brand` drives the icon colour only.
const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: [
      { label: 'ReactJS', icon: <FaReact />, brand: '#61DAFB' },
      { label: 'JavaScript', icon: <IoLogoJavascript />, brand: '#F7DF1E' },
      { label: 'HTML', icon: <FaHtml5 />, brand: '#E44D26' },
      { label: 'CSS', icon: <FaCss3Alt />, brand: '#1572B6' },
      { label: 'SCSS', icon: <SiSass />, brand: '#CC6699' },
      { label: 'Bootstrap', icon: <SiBootstrap />, brand: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Python', icon: <FaPython />, brand: '#3776AB' },
      { label: 'Flask', icon: <SiFlask /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { label: 'MySQL', icon: <SiMysql />, brand: '#4479A1' },
      { label: 'PostgreSQL', icon: <SiPostgresql />, brand: '#4169E1' },
      { label: 'MongoDB', icon: <SiMongodb />, brand: '#47A248' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git / GitHub', icon: <FaGithub /> },
      { label: 'Postman', icon: <SiPostman />, brand: '#FF6C37' },
    ],
  },
];

const EXPERIENCE = [
  {
    title: 'Python Full Stack Developer Intern (Remote)',
    org: 'FemtoSoft Technologies, Chennai',
    date: '2026 — Present',
    sub: 'Logistics Consignment Dashboard',
    tags: ['ReactJS 18', 'Flask', 'MySQL 8', 'SCSS', 'ReportLab'],
    points: [
      'Built a full-stack freight consignment management system — 14 REST endpoints over a normalised 6-table MySQL schema, served to a React single-page frontend by a blueprint-structured Flask API.',
      'Implemented role-based access control for Admin, Manager, and Branch User roles using scrypt-hashed passwords and signed HTTP-only session cookies, with branch-level data scoping enforced in SQL on the server.',
      'Automated consignment number generation in BRANCH/FY/000123 format using atomic per-branch, per-financial-year sequence counters, and server-side freight calculation on chargeable weight (actual vs. volumetric).',
      'Added an audit trail capturing before/after snapshots of every create, update, and delete with a field-level diff viewer, plus one-click A4 PDF consignment notes generated via ReportLab.',
    ],
  },
  {
    title: 'Full Stack Developer (Freelance) — MindMate',
    org: 'Therapist Directory & Booking Platform',
    date: '2026 — Present',
    sub: 'Ongoing engagement',
    tags: ['ReactJS 19', 'Flask', 'JWT', 'SCSS', 'Bootstrap 5'],
    points: [
      'Building a mental-health therapist directory as a ReactJS single-page application backed by a blueprint-structured Flask REST API of 26 endpoints.',
      'Implemented JWT session authentication across three account types — client, clinician, and admin — with every protected endpoint re-checking the role server-side against the stored user record rather than trusting the token claim.',
      'Delivered an admin dashboard for platform-wide booking management and therapist application review, plus a separate clinician portal where each clinician sees only their own schedule, scoped from the authenticated token.',
      'Covered the auth, admin, and clinician flows with a Jest / React Testing Library suite, and built the interface on a design-token system with reduced-motion support.',
    ],
  },
  {
    title: 'Full Stack Developer (Freelance) — thangaiya.in',
    org: 'Client: Dr. Y. Johnson Thangaiya, Tamil scholar & author',
    date: '2026',
    sub: 'Live at thangaiya.in',
    tags: ['ReactJS', 'Flask', 'PostgreSQL', 'Razorpay'],
    points: [
      'Built and deployed a live Tamil-language ebook store as a ReactJS single-page application, serving a Tamil-reading customer base.',
      'Owned the project end to end — requirements, client-side routing, dynamic content rendering, PostgreSQL data storage, and Razorpay-powered checkout — through to live production deployment.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Email Sender Application',
    date: '2026',
    tags: ['ReactJS 19', 'Flask', 'Flask-Mail', 'SMTP', 'SCSS'],
    points: [
      'Built a compose-and-send email client — a controlled React form for recipient, subject, and body posting JSON to a CORS-enabled Flask REST endpoint.',
      'Integrated Flask-Mail over Gmail SMTP with TLS, with server-side validation returning a 400 on a missing recipient and surfacing SMTP failures as API errors.',
      'Handled the full request lifecycle in the UI — a loading state that disables the send button, success and error banners, and an automatic form reset once the message is delivered.',
    ],
  },
  {
    title: 'DevVault — Cloud Code-Snippet Vault',
    date: '2025',
    tags: ['ReactJS', 'Flask', 'MongoDB Atlas', 'SCSS', 'Bootstrap'],
    points: [
      'Built a cloud workspace for storing code snippets, organised per account into separate front-end, back-end and database areas.',
      'Implemented full create, read, update and delete operations with user authentication, served by Flask REST APIs over MongoDB Atlas.',
      'Built the interface on a shared design-token system, with a responsive React front end that works across mobile and desktop.',
    ],
  },
];

function Entry({ title, org, date, sub, tags, points }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3 className="entry-title">{title}</h3>
        {date && <span className="entry-date">{date}</span>}
      </div>
      {org && <p className="entry-sub">{org}</p>}
      {sub && <p className="entry-sub">{sub}</p>}
      <ul className="entry-list">
        {points.map(point => <li key={point}>{point}</li>)}
      </ul>
      {tags && (
        <div className="tags">
          {tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      )}
    </article>
  );
}

function Profile() {
  return (
    <div className="background">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#main">Abesh Kumar</a>
          <nav aria-label="Sections">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <div className="container">
          <section className="hero">
            <div>
              <span className="hero-eyebrow">
                <span className="dot" aria-hidden="true" />
                Open to Python full-stack roles
              </span>
              <h1>Abesh Kumar R</h1>
              <p className="hero-role">Python Full Stack Developer</p>
              <p className="hero-summary">
                MCA graduate currently interning on a production logistics consignment platform
                built with ReactJS, Flask, and MySQL, alongside freelance work including a live,
                client-facing product shipped end to end. Comfortable owning features across the
                stack — REST API design, relational and document data modelling, authentication
                and role-based access control.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="mailto:akabesh2000@gmail.com">Get in touch</a>
                <a
                  className="btn-secondary"
                  href="https://github.com/AKabesh746348"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
                <a
                  className="btn-secondary"
                  href="https://linkedin.com/in/abesh-kumar-441081279"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
              </div>
              <p className="hero-meta">
                Chennai, Tamil Nadu · Open to onsite roles in Chennai, Coimbatore and Bangalore
              </p>
            </div>
            <img className="hero-portrait" src={abesh} alt="Abesh Kumar R" />
          </section>

          <section className="section" id="experience">
            <div className="section-head">
              <h2>Experience</h2>
              <span className="section-note">Internship &amp; freelance</span>
            </div>
            {EXPERIENCE.map(item => <Entry key={item.title} {...item} />)}
          </section>

          <section className="section" id="projects">
            <div className="section-head">
              <h2>Projects</h2>
            </div>
            {PROJECTS.map(item => <Entry key={item.title} {...item} />)}
          </section>

          <section className="section" id="skills">
            <div className="section-head">
              <h2>Skills</h2>
            </div>
            <div className="skill-groups">
              {SKILL_GROUPS.map(group => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-row">
                    {group.items.map(item => (
                      <span className="skill" key={item.label}>
                        <span style={item.brand ? { '--brand': item.brand } : undefined}>
                          {item.icon}
                        </span>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="education">
            <div className="section-head">
              <h2>Education &amp; Training</h2>
            </div>
            <div className="split">
              <div className="entry">
                <div className="entry-head">
                  <h3 className="entry-title">Master of Computer Applications</h3>
                  <span className="entry-date">2022 — 2024</span>
                </div>
                <p className="entry-sub">Annamalai University, Chidambaram · First Class (7.17 / 10)</p>

                <div className="stack-divider" />

                <div className="entry-head">
                  <h3 className="entry-title">Bachelor of Computer Science</h3>
                  <span className="entry-date">2019 — 2022</span>
                </div>
                <p className="entry-sub">PRIST University, Thanjavur · First Class (7.8 / 10)</p>

                <div className="stack-divider" />

                {/* Languages live here rather than in a card of their own:
                    two short lines cannot fill a column beside Training. */}
                <div className="entry-head">
                  <h3 className="entry-title">Languages</h3>
                </div>
                <ul className="plain-list">
                  <li>English — professional working proficiency</li>
                  <li>Tamil — native</li>
                </ul>
              </div>

              <div className="entry">
                <div className="entry-head">
                  <h3 className="entry-title">Python Full Stack Web Developer Training</h3>
                  <span className="entry-date">2025 — 2026</span>
                </div>
                <p className="entry-sub">Greens Technologies, Anna Nagar, Chennai</p>
                <ul className="entry-list">
                  <li>Full SDLC: web components, REST API integration, MySQL and MongoDB, endpoint testing in Postman, and Git/GitHub.</li>
                </ul>

                <div className="stack-divider" />

                <div className="entry-head">
                  <h3 className="entry-title">Programming Foundations Certification</h3>
                </div>
                <p className="entry-sub">G-TEC Education (ISO Certified)</p>
                <ul className="entry-list">
                  <li>Foundations in Python, C, C++, Java SE and Java EE, covering object-oriented programming and multithreading.</li>
                </ul>
              </div>
            </div>

            {/* Full width with the items in two columns: four short lines in a
                half-width card left the other half empty. */}
            <div className="entry entry-spaced">
              <div className="entry-head">
                <h3 className="entry-title">Strengths</h3>
              </div>
              <ul className="plain-list plain-list-cols">
                <li>Problem-solving and full ownership of tasks through to delivery</li>
                <li>Quick to grasp requirements and contribute effectively</li>
                <li>Team collaboration with a continuous-learning mindset</li>
                <li>Attention to detail and time management under deadlines</li>
              </ul>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="section-head">
              <h2>Contact</h2>
              <span className="section-note">Usually replies within a day</span>
            </div>
            <div className="contact-grid">
              <a className="contact-item" href="mailto:akabesh2000@gmail.com">
                <MdOutlineAlternateEmail aria-hidden="true" />
                <span>akabesh2000@gmail.com</span>
              </a>
              <a className="contact-item" href="tel:+918248059974">
                <MdPhone aria-hidden="true" />
                <span>+91 82480 59974</span>
              </a>
              <a
                className="contact-item"
                href="https://linkedin.com/in/abesh-kumar-441081279"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin aria-hidden="true" />
                <span>linkedin.com/in/abesh-kumar-441081279</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Abesh Kumar R</span>
          <a href="https://github.com/AKabesh746348" target="_blank" rel="noopener noreferrer">
            github.com/AKabesh746348
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
