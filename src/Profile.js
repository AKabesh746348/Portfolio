import React from 'react'
import "./Profile.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import abesh from "./Common/Abesh.png"
import { MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGithub, FaLinkedin, FaGraduationCap, FaCode, FaBriefcase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMysql, SiPostgresql, SiPostman, SiBootstrap, SiSass, SiFlask } from "react-icons/si";
import { GitHubProjects } from "./PortfolioWidgets";

function Profile() {

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='background'>

        {/* HERO SECTION */}
        <div className='hero-section'>
          <h1 className='ak'>ABESH KUMAR</h1>
          <p className='subtitle'>PYTHON FULL STACK DEVELOPER</p>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <div className='image-container'>
                <img src={abesh} className='abesh' alt='abesh'></img>
                <span className='floating-badge badge-1'>&lt;/&gt;</span>
                <span className='floating-badge badge-2'>#</span>
                <span className='floating-badge badge-3'>\</span>
                <span className='floating-badge badge-4'>{'{ }'}</span>
                <span className='floating-badge badge-5'>[ ]</span>
              </div>
            </div>
            <div class="col-6">
              <div className='technical-skills-wrapper'>
                <h2 className='section-heading'>TECHNICAL SKILLS</h2>
                <div className='skills-grid'>
                  <div className='skill-icon' style={{ '--glow-color': '#E44D26' }}><FaHtml5 /><span>HTML</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#1572B6' }}><FaCss3Alt /><span>CSS</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#F7DF1E' }}><IoLogoJavascript /><span>JavaScript</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#61DAFB' }}><FaReact /><span>ReactJS</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#3776AB' }}><FaPython /><span>Python</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#FFFFFF' }}><SiFlask /><span>Flask</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#47A248' }}><SiMongodb /><span>MongoDB</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#4479A1' }}><SiMysql /><span>MySQL</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#4169E1' }}><SiPostgresql /><span>PostgreSQL</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#7952B3' }}><SiBootstrap /><span>Bootstrap</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#CC6699' }}><SiSass /><span>SCSS</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#FF6C37' }}><SiPostman /><span>Postman</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#ffffff' }}><FaGithub /><span>GitHub</span></div>
                </div>
              </div>
            </div>

            {/* PROFILE SECTION */}
            <div className='content-section'>
              <div className='glass-card'>
                <h2 className='section-heading'>PROFILE</h2>
                <p className='body-text'>
                  Python full-stack developer (MCA) currently interning on a production logistics dashboard built
                  with ReactJS, Flask, and MySQL, with a live client-facing product already shipped and in use.
                  Comfortable owning features end to end — REST API design, relational and document data
                  modelling, authentication and role-based access control — and writing clean, maintainable code.
                </p>
                <p className='body-text'>
                  Experienced building secure, responsive web applications, designing RESTful APIs, and managing
                  SQL/NoSQL databases. Seeking a junior Python full-stack role where I can contribute to real
                  projects and keep growing.
                </p>
              </div>
            </div>

            {/* EDUCATION & STRENGTHS */}
            <div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6">
                    <div className='glass-card'>
                      <h2 className='section-heading'><FaGraduationCap className='heading-icon' />EDUCATION</h2>
                      <h3 className='card-title'>Bachelor of Computer Science</h3>
                      <p className='body-text'>
                        Ponnaiyah Ramajayam Institute of Science &amp; Technology, Thanjavur, Tamil Nadu
                        (affiliated with PRIST University)
                      </p>
                      <div className='detail-chips'>
                        <span className='chip'>2019 - 2022</span>
                        <span className='chip'>GPA: 7.8</span>
                        <span className='chip highlight'>First-Class</span>
                      </div>

                      <div className='divider'></div>

                      <h3 className='card-title'>Master of Computer Applications (MCA)</h3>
                      <p className='body-text'>
                        Annamalai University, Chidambaram, Tamil Nadu
                      </p>
                      <div className='detail-chips'>
                        <span className='chip'>2022 - 2024</span>
                        <span className='chip'>GPA: 7.17</span>
                        <span className='chip highlight'>First-Class</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div className='glass-card'>
                      <h2 className='section-heading'>STRENGTHS</h2>
                      <ul className='skills-list'>
                        <li>Problem-solving and taking full ownership of tasks through to delivery</li>
                        <li>Quick to grasp requirements and contribute effectively</li>
                        <li>Team collaboration with a continuous-learning mindset</li>
                        <li>Attention to detail and strong time management under deadlines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERNSHIP EXPERIENCE */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'><FaBriefcase className='heading-icon' />INTERNSHIP EXPERIENCE</h2>
            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>Python Full Stack Developer Intern (Remote) — FemtoSoft Technologies, Chennai</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>ReactJS 18</span><span className='chip'>Flask</span><span className='chip'>MySQL 8</span><span className='chip'>SCSS</span><span className='chip'>ReportLab</span>
                </div>
              </div>
              <p className='card-subtitle'>Logistics Consignment Dashboard — 2026 to Present</p>
              <ul className='training-list'>
                <li>Built a full-stack freight consignment management system — 14 REST endpoints over a normalised 6-table MySQL schema, served to a React single-page frontend by a blueprint-structured Flask API</li>
                <li>Implemented role-based access control for Admin, Manager, and Branch User roles using scrypt-hashed passwords and signed HTTP-only session cookies, with branch-level data scoping enforced in SQL on the server</li>
                <li>Automated consignment number generation in BRANCH/FY/000123 format using atomic per-branch, per-financial-year sequence counters, and server-side freight calculation on chargeable weight (actual vs. volumetric)</li>
                <li>Added an audit trail capturing before/after snapshots of every create, update, and delete with a field-level diff viewer, plus one-click A4 PDF consignment notes generated via ReportLab</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FREELANCE EXPERIENCE */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'><FaBriefcase className='heading-icon' />FREELANCE EXPERIENCE</h2>
            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>Full Stack Developer (Freelance) — MindMate</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>ReactJS 19</span><span className='chip'>Flask</span><span className='chip'>JWT</span><span className='chip'>SCSS</span><span className='chip'>Bootstrap 5</span>
                </div>
              </div>
              <p className='card-subtitle'>Therapist Directory &amp; Booking Platform — 2026 to Present (ongoing)</p>
              <ul className='training-list'>
                <li>Building a mental-health therapist directory as a ReactJS single-page application backed by a blueprint-structured Flask REST API of 26 endpoints</li>
                <li>Implemented JWT session authentication across three account types — client, clinician, and admin — with every protected endpoint re-checking the role server-side against the stored user record rather than trusting the token claim</li>
                <li>Delivered an admin dashboard for platform-wide booking management and therapist application review, plus a separate clinician portal where each clinician sees only their own schedule, scoped from the authenticated token</li>
                <li>Designed a glassmorphism design system in SCSS over a re-themed Bootstrap 5.3, with reduced-motion support, and covered the auth, admin, and clinician flows with a Jest / React Testing Library suite</li>
              </ul>
            </div>

            <div className='divider'></div>

            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>Full Stack Developer (Freelance) — thangaiya.in</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>ReactJS</span><span className='chip'>Flask</span><span className='chip'>PostgreSQL</span><span className='chip'>Razorpay</span>
                </div>
              </div>
              <p className='card-subtitle'>Client: Dr. Y. Johnson Thangaiya, Tamil scholar &amp; author — 2026</p>
              <ul className='training-list'>
                <li>Built and deployed a live Tamil-language ebook store as a ReactJS single-page application, serving a Tamil-reading customer base</li>
                <li>Owned the project end to end — requirements, client-side routing, dynamic content rendering, PostgreSQL data storage, and Razorpay-powered checkout — through to live production deployment</li>
                <li>Delivered a responsive, production website currently live at thangaiya.in</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL TRAINING */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'>PROFESSIONAL TRAINING / CERTIFICATIONS</h2>

            <div className='training-block'>
              <h3 className='card-title'>Greens Technologies, Anna Nagar, Chennai</h3>
              <span className='chip highlight'>2025 — 2026</span>
              <p className='card-subtitle'>Python Full Stack Web Developer Training</p>
              <ul className='training-list'>
                <li>Hands-on training across the full SDLC: building web components and integrating custom RESTful APIs</li>
                <li>Worked with MySQL and MongoDB, tested endpoints with Postman, and used Git/GitHub for version control</li>
              </ul>
            </div>

            <div className='divider'></div>

            <div className='training-block'>
              <h3 className='card-title'>G-TEC EDUCATION</h3>
              <span className='chip'>ISO Certified Organization</span>
              <p className='card-subtitle'>Programming Foundations Certification</p>
              <ul className='training-list'>
                <li>Foundations in Python, C, C++, Java SE, and Java EE, covering object-oriented programming and multithreading</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'><FaCode className='heading-icon' />PROJECTS</h2>

            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>Cloud-Based Notepad Application</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>Flask</span><span className='chip'>MongoDB Atlas</span><span className='chip'>ReactJS</span><span className='chip'>SCSS</span><span className='chip'>Bootstrap</span>
                </div>
              </div>
              <span className='chip'>2025</span>
              <ul className='training-list'>
                <li>Built a full-stack note-taking app with create, read, update, and delete operations and secure user authentication</li>
                <li>Developed REST APIs for the backend and a responsive React interface that works across mobile and desktop</li>
              </ul>
            </div>

          </div>
        </div>

        {/* GITHUB PROJECTS */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'><FaGithub className='heading-icon' />GITHUB PROJECTS</h2>
            <GitHubProjects />
          </div>
        </div>

        {/* CONTACT */}
        <div className='content-section'>
          <div className='glass-card contact-card'>
            <h2 className='section-heading'>CONTACT</h2>
            <div className='contact-items'>
              <a href="mailto:akabesh2000@gmail.com" className='contact-item'>
                <MdOutlineAlternateEmail className='contact-icon' />
                <span>akabesh2000@gmail.com</span>
              </a>
              <a href="tel:+918248059974" className='contact-item'>
                <MdPhone className='contact-icon' />
                <span>+91 82480 59974</span>
              </a>
              <a href="https://linkedin.com/in/abesh-kumar-441081279" target="_blank" rel="noopener noreferrer" className='contact-item'>
                <FaLinkedin className='contact-icon' />
                <span>linkedin.com/in/abesh-kumar-441081279</span>
              </a>
            </div>
            <a href="https://github.com/AKabesh746348" target="_blank" rel="noopener noreferrer" className='github-cta'>
              <FaGithub className='github-cta-icon' />
              <span>Explore My Codebase</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
