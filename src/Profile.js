import React from 'react'
import "./Profile.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import abesh from "./Common/Abesh.png"


function Profile() {
    
  return (
    <div>
    <div className='background'><br/>
      <h2 className='ak'>ABESH KUMAR R</h2>
      <h2 className='python'>Python Full Stack Developer</h2>


<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      <img src={abesh} className='abesh' alt='abesh'></img>

    </div>
    <div class="col-6">
      <br/><br/><br/><br/><br/><br/><br/><h2 className='tech'>TECHNICAL SKILLS</h2>
      <h5 className='front'>Frontend: HTML, CSS, JavaScript,
ReactJS<br/>
Backend & Databases: Python, Java (SE
& EE), C, C++, MongoDB, MySQL<br/>
Tools & Platforms: Postman, GitHub<br/>
Software Development: SDLC, Code
Quality & Performance</h5>
    </div>

<div className='b2'>


<h2 className='prof'>PROFILE </h2>
      <h5 className='sum'>Strong foundation in Python, Java (SE & EE), C, and C++, with hands-on
experience in HTML, CSS, JavaScript, ReactJS, MongoDB, MySQL, Postman,
and GitHub. Learning full-stack development and eager to apply technical
skills in real projects. Quick learner, motivated to gain experience, work with
a team, and grow in software development.Studied Computer Science fundamentals and core IT concepts.
 Gained proficiency in Python, Java, C, and C++.
 Developed practical software development skills through coursework
and projects.
 Acquired hands-on experience in programming and IT applications.</h5>


</div>

<div>


<div class="container-fluid">
          <div class="row">
            <div class="col-6">
               <h2 className='edu'>EDUCATION</h2><br/>
              <h3 className='bsc'>Bachelor of Computer Science</h3><br/>
              <h4 className='prist'>Ponnaiyah Ramajayam Institute of
Science & Technology, Thanjavur, Tamil
Nadu (affiliated with PRIST University)<br/>
2019 - 2022<br/>
Grade Point Average (GPA) of 7.8<br/>
Securing a First-Class distinction</h4>
            </div>
            <div class="col-6">
             <h2 className='ski'> SKILLS</h2><br/>
             <h5 className='skills'>*  Skilled at taking full ownership of
tasks and <br/>achieving successful
outcomes<br/><br/>
*  Ability to quickly grasp project
requirements <br/> and contribute
effectively<br/><br/>
*  Adaptable with continuous
learning mindset to meet
business needs<br/><br/>
*  Capable of managing multiple
tasks and meeting deadlines</h5>
            </div>
          </div>
        </div>

  
</div>

  </div>
</div>

<h2 className='pt'>PROFESSIONAL TRAINING/CERTIFICATIONS</h2><br/><br/>

<h2 className='greens'> Greens Technologies, Anna Nagar, Chennai | April – Present<br/>
Python Full Stack Web Developer (Frontend & Backend Development)</h2>

<h3 className='green'>• Gaining hands-on experience building E-commerce and portfolio web
applications using <br/>Python (Flask), HTML, CSS, JavaScript, Bootstrap, and
ReactJS<br/><br/>
• Developing both frontend and backend components and integrating
RESTful APIs<br/><br/>
• Managing databases with MongoDB and MySQL<br/><br/>
• Testing APIs using Postman and version control with GitHub<br/><br/>
• Implementing responsive web design for multiple devices and screen
sizes<br/><br/>
• Acquiring practical experience with the full software development
lifecycle (SDLC)</h3>


<div>


<h2 className='gtec'>G-TEC EDUCATION | An ISO certified organization</h2><br/><br/>

<h3 className='gte'>• Completed training in Python, Java (SE & EE), C, and C++, gaining
strong programming fundamentals.<br/><br/>
• Applied Python for rapid prototyping, data analysis, and automation.<br/><br/>
• Built foundation in Java for enterprise applications, including OOP,<br/>
multithreading, and database connectivity.<br/><br/>
• Strengthened knowledge of C/C++ concepts like memory management
and pointers.</h3>

<h1 className='ct'>
  CONTACT
</h1>

<h2 className='cnt'>EMAIL : akabesh2000@gmail.com <br/><br/>
MOBILE : +918248059974
</h2>

</div>


        </div>


       
        </div>
  )
}

export default Profile