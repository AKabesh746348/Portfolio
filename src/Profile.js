import React from 'react'
import "./Profile.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import abesh from "./Common/Abesh.png"
import { MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGithub, FaGraduationCap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMysql, SiPostman, SiCplusplus } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";

function Profile() {

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='background'>

        {/* HERO SECTION */}
        <div className='hero-section'>
          <h1 className='ak'>ABESH KUMAR</h1>
          <p className='subtitle'>Python Full Stack Developer</p>
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
              <br /><br /><br /><br /><br /><br /><br />
              <h2 className='section-heading'>TECHNICAL SKILLS</h2>
              <div className='skills-grid'>
                <div className='skill-icon' style={{ '--glow-color': '#E44D26' }}><FaHtml5 /><span>HTML</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#1572B6' }}><FaCss3Alt /><span>CSS</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#F7DF1E' }}><IoLogoJavascript /><span>JavaScript</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#61DAFB' }}><FaReact /><span>ReactJS</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#3776AB' }}><FaPython /><span>Python</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#ED8B00' }}><FaJava /><span>Java</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#A8B9CC' }}><TbLetterC /><span>C</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#00599C' }}><SiCplusplus /><span>C++</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#47A248' }}><SiMongodb /><span>MongoDB</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#4479A1' }}><SiMysql /><span>MySQL</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#FF6C37' }}><SiPostman /><span>Postman</span></div>
                <div className='skill-icon' style={{ '--glow-color': '#ffffff' }}><FaGithub /><span>GitHub</span></div>
              </div>
            </div>

            {/* PROFILE SECTION */}
            <div className='content-section'>
              <div className='glass-card'>
                <h2 className='section-heading'>PROFILE</h2>
                <p className='body-text'>
                  Strong foundation in Python, Java (SE &amp; EE), C, and C++, with hands-on
                  experience in HTML, CSS, JavaScript, ReactJS, MongoDB, MySQL, Postman,
                  and GitHub. Learning full-stack development and eager to apply technical
                  skills in real projects. Quick learner, motivated to gain experience, work with
                  a team, and grow in software development.
                </p>
                <p className='body-text'>
                  Studied Computer Science fundamentals and core IT concepts.
                  Gained proficiency in Python, Java, C, and C++.
                  Developed practical software development skills through coursework
                  and projects. Acquired hands-on experience in programming and IT applications.
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
              <span className='chip highlight'>April – Present</span>
              <p className='card-subtitle'>Python Full Stack Web Developer (Frontend &amp; Backend Development)</p>
              <ul className='training-list'>
                <li>Gaining hands-on experience building E-commerce and portfolio web applications using Python (Flask), HTML, CSS, JavaScript, Bootstrap, and ReactJS</li>
                <li>Developing both frontend and backend components and integrating RESTful APIs</li>
                <li>Managing databases with MongoDB and MySQL</li>
                <li>Testing APIs using Postman and version control with GitHub</li>
                <li>Implementing responsive web design for multiple devices and screen sizes</li>
                <li>Acquiring practical experience with the full software development lifecycle (SDLC)</li>
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