import React from 'react'
import "./Profile.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import abesh from "./Common/Abesh.png"
import { MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGithub, FaGraduationCap, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMysql, SiPostman, SiCplusplus, SiFlask } from "react-icons/si";
import { GitHubProjects, AskMeBot } from "./PortfolioWidgets";


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
                  <div className='skill-icon' style={{ '--glow-color': '#ED8B00' }}><FaJava /><span>Java</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#FFFFFF' }}><SiFlask /><span>Flask</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#00599C' }}><SiCplusplus /><span>C++</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#47A248' }}><SiMongodb /><span>MongoDB</span></div>
                  <div className='skill-icon' style={{ '--glow-color': '#4479A1' }}><SiMysql /><span>MySQL</span></div>
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
                 Python Full Stack Developer with an MCA, trained in building web applications using Flask, ReactJS, and REST APIs. 
                 Comfortable working across the stack — from React interfaces to Flask services backed by MySQL and MongoDB. 
                 Quick to learn, take ownership of tasks, and ship working features. 
                 Seeking a junior developer role where I can contribute to real projects and keep growing.
                </p>
                <p className='body-text'>
                  Experienced building secure, responsive web applications, designing RESTful APIs,
                  and managing SQL/NoSQL databases. Proven capability to assume full task ownership,
                  learn rapidly, and deliver quality software. Seeking Python
                  Full Stack role to apply and grow these skills.
                </p>
              </div>
            </div>

            {/* EDUCATION & SKILLS */}
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
                      <h2 className='section-heading'>SKILLS</h2>
                      <ul className='skills-list'>
                        <li>Skilled at taking full ownership of tasks and achieving successful outcomes</li>
                        <li>Ability to quickly grasp project requirements and contribute effectively</li>
                        <li>Adaptable with continuous learning mindset to meet business needs</li>
                        <li>Capable of managing multiple tasks and meeting deadlines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL TRAINING */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'>PROFESSIONAL TRAINING / CERTIFICATIONS</h2>

            <div className='training-block'>
              <h3 className='card-title'>Greens Technologies, Anna Nagar, Chennai</h3>
              <span className='chip highlight'>April 2025 — Present</span>
              <p className='card-subtitle'>Python Full Stack </p>
              <ul className='training-list'>
                <li>Trained across the full software development lifecycle: building web components and integrating custom RESTful APIs</li>
                <li>Worked with MongoDB and MySQL, tested endpoints with Postman, and used GitHub for version control.</li>
              </ul>
            </div>

            <div className='divider'></div>

            <div className='training-block'>
              <h3 className='card-title'>G-TEC EDUCATION</h3>
              <span className='chip'>ISO Certified Organization</span>
              <ul className='training-list'>
                <li>Completed training in Python, Java (SE &amp; EE), C, and C++, gaining strong programming fundamentals</li>
                <li>Applied Python for rapid prototyping, data analysis, and automation</li>
                <li>Built foundation in Java for enterprise applications, including OOP, multithreading, and database connectivity</li>
                <li>Strengthened knowledge of C/C++ concepts like memory management and pointers</li>
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
                <h3 className='card-title'>Cloud-Based Notepad (DevVault)</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>Flask</span><span className='chip'>MongoDB</span><span className='chip'>MySQL</span><span className='chip'>ReactJS</span>
                </div>
              </div>
              <ul className='training-list'>
                <li>Developed a secure full-stack application for dynamic user-note handling (CRUD) with JWT authentication</li>
                <li>Engineered robust backend RESTful APIs with a seamless, responsive layout across mobile and desktop</li>
              </ul>
            </div>

            <div className='divider'></div>

            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>E-Commerce Web Application (ShopVerse)</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>Flask</span><span className='chip'>MySQL</span><span className='chip'>Razorpay</span><span className='chip'>Bootstrap</span>
                </div>
              </div>
              <ul className='training-list'>
                <li>Built a complete full-stack platform enabling product browsing, cart management, and simulated checkout with Razorpay integration</li>
                <li>Governed session tracking and relational data persistence with Flask and MySQL</li>
              </ul>
            </div>

            <div className='divider'></div>

            <div className='project-entry'>
              <div className='project-entry-header'>
                <h3 className='card-title'>Email Sender</h3>
                <div className='project-stack-chips'>
                  <span className='chip'>JavaScript</span><span className='chip'>HTML</span><span className='chip'>CSS</span>
                </div>
              </div>
              <ul className='training-list'>
                <li>Built a responsive frontend email-sending interface with form validation and dynamic feedback on submission status</li>
                <li>Implemented clean UI components with vanilla JavaScript for handling user input and API interactions</li>
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

        {/* ASK ME */}
        <div className='content-section'>
          <div className='glass-card wide'>
            <h2 className='section-heading'>ASK ME ANYTHING</h2>
            <p className='body-text' style={{ marginBottom: '20px' }}>
              Have a question about my background, skills, or projects? Ask the AI assistant below.
            </p>
            <AskMeBot />
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