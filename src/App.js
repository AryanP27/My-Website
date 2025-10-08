import React from 'react';
import './App.css';
import { HiArrowDownCircle } from "react-icons/hi2";


function App() {
  // Scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">

      <nav className="navbar">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About Me</button>
        <button onClick={() => scrollToSection('work')}>Work History</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>

      {/* Home */}
      <header className="section home" id="home">
        <h1>Welcome</h1>
        <p>Hello! I’m Aryan, a Computer Science student and software engineer.</p>
        <h2 className="tagline">CS Student | Data Science Enthusiast | Aspiring Software Engineer</h2>
        <button className="icon-button" onClick={() => scrollToSection('about')}>
          <HiArrowDownCircle size={60} />
        </button>
      </header>


      {/* About Me */}
      <section className="section about" id="about">
        <h2>About Me</h2>
        <p>
          Junior at the University of Akron majoring in Computer Science and a minor in Business Administration.
          I am a very outgoing person who has experience with multiple roles and positions. </p>
        <p>
          I enjoy working with different people and trying out new ideas whether it be in business, my school environment, or even in the gym!
          I love to learn and am working on a few different projects right to build my skills in the Software Development space.
          I have worked with multiple languages such as C++, JavaScript, HTML/CSS and Python.
        </p>

        <p>
          In my free time, I enjoy going to the gym, cooking food, and hanging out with friends and family. I also love volunteering and giving back to my community.
        </p>
        <button className="icon-button" onClick={() => scrollToSection('work')}>
          <HiArrowDownCircle size={60} />
        </button>
      </section>

      {/* Work History */}
      <section className="section work-history" id="work">
        <h2>Work History</h2>
        <div className="job">
          <h3>Software Engineer at Byteflow</h3>
          <p>August 2025 - Present</p>
          <ul>
            <li>Develop and engineer 3 client-facing websites using React and Next.js, focusing on responsive design, performance optimization, and modern front-end practices.</li>
            <li>Collaborate with developers and content strategists in an Agile environment, participating in Scrum meetings and integrating Contentful headless CMS by designing content models that streamline updates and improve workflows.</li>
            <li>Deploy and host websites using AWS Amplify, contributing to software architecture by defining scalable structures and ensuring smooth integration with development workflows.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Third Party Software IT Intern</h3>
          <p>May 2025 – August 2025</p>
          <ul>
            <li>Developed and optimized workflows within UHM’s loan processing software streamlining operations and reducing manual intervention across departments</li>
            <li>Designed and implemented custom integrations using multiple third-party APIs to connect business-critical applications and address internal inefficiencies</li>
            <li>Built and deployed automated email campaign systems that eliminated over 20 hours of manual work weekly, enhancing team productivity and consistency in client communication</li>
          </ul>
        </div>
        <button className="icon-button" onClick={() => scrollToSection('projects')}>
          <HiArrowDownCircle size={60} />
        </button>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Blah blah blah.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Blah blah blah.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact</h2>
        <p>Email: apai232705@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aryanp27/">Aryan P</a></p>
      </section>

    </div>
  );
}

export default App;
