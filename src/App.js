import React from 'react';
import './App.css';
import { HiArrowDownCircle } from "react-icons/hi2";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
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

      <header className="home-section" id="home">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome</h1>
            <p>Hello! I’m Aryan, a Computer Science student and software engineer.</p>
            <h2 className="tagline">CS Student | Data Science Enthusiast | Aspiring Software Engineer</h2>
          </div>
          <div className="home-image">
            <img src="/My-Website/Home.jpg" alt="Aryan" />
          </div>
        </div>
        <button className="icon-button" onClick={() => scrollToSection('about')}>
          <HiArrowDownCircle size={60} />
        </button>
      </header>

      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-image">
            <img src="/My-Website/About-Me.jpg" alt="Aryan" />
          </div>
          <div className="about-text">
            <h2 style={{ fontSize: '2.5rem' }}>About Me</h2>
            <ul style={{ fontSize: '1.25rem', fontWeight: '500', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1.5rem' }}>I'm a Junior at the University of Akron majoring in Computer Science and a minor in Business Administration.</li>
              <li style={{ marginBottom: '1.5rem' }}>I enjoy working with different people and trying out new ideas whether it be in business, my school environment,
                or even in the gym! I love to learn and am working on a few different projects to build my skills in Software Development.
                I have worked with multiple languages such as C++, JavaScript, HTML/CSS, and Python.</li>
              <li style={{ marginBottom: '1.5rem' }}>In my free time, I enjoy going to the gym, cooking food, and hanging out with friends and family.
                I also love volunteering and giving back to my community.</li>
            </ul>
          </div>
        </div>
        <button className="icon-button" onClick={() => scrollToSection('work')}>
          <HiArrowDownCircle size={60} />
        </button>
      </section>

      <section className="work-history-section" id="work">
        <div className="work-history-content">
          <div className="work-history-text">
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
            <div className="job">
              <h3>Data Scientist Intern</h3>
              <p>June 2023 – July 2023 | The J.M. Smucker Company, Orrville, OH</p>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                <li>Mentored by a senior data scientist and developed in Python, using Pandas for data manipulation and analysis, alongside creating linear regression functions and decision trees to analyze correlations, data trends, and patterns through histograms, scatter plots, and bar charts.</li>
                <li>Attended meetings every day with team members to understand individual roles and contributions, while also learning the daily operations of the Smuckers.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Founder</h3>
              <p>February 2024 – August 2024 | Course Cultivate, Copley, OH</p>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                <li>Started the Course Cultivate Agency to assist experts in creating online education and scaling their personal brand/business.</li>
                <li>Used GoHighLevel (GHL) software to implement various backend systems for the online courses/communities.</li>
                <li>Engaged with ChatGPT and tested multiple outreach systems to attain a 30% higher meeting show-up rate and maximize efficiency when looking for potential clients.</li>
                <li>Managed two employees, trained them for outreach processes, and monitored their progress to help them bring in 10% more appointments/meetings.</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="icon-button" onClick={() => scrollToSection('projects')}>
          <HiArrowDownCircle size={60} />
        </button>
      </section>

      <section className="projects-section" id="projects">
  <h2>Projects</h2>
  <div className="project-cards">
    <div className="project-card">
      <h3>UA NASA Robotics Team | Software Developer</h3>
      <p>August 2024 – Present</p>
      <ul>
        <li>Contribute to the UA NASA Robotics Team in developing a robot for the NASA Lunabotics competition.</li>
        <li>Programmed in C++, Python, and ROS to work with Arduino microcontrollers enabling autonomous movement and task execution.</li>
        <li>Developed multiple Python packages to handle robotic tasks and track movement.</li>
      </ul>
    </div>
    <div className="project-card">
      <h3>Crypto Trading Bot – Mean Reversion Strategy </h3>
      <p>January 2025 – May 2025</p>
      <ul>
        <li>Built a trading bot in Python using CCXT to simulate trades on Kraken, applying Bollinger Bands for buy/sell signals.</li>
        <li>Designed a modular architecture with separate files for bot logic, utility functions, and backtesting.</li>
        <li>Implemented a backtesting framework with historical OHLCV data and visualized performance using Matplotlib.</li>
        <li>Practiced risk management by simulating trade sizing, balance tracking, and profit multipliers.</li>
      </ul>
    </div>
  </div>
</section>

      <section className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Email: apai232705@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aryanp27/">Aryan P</a></p>
        <p>GitHub: <a href=""></a></p>
      </section>
    </div>
  );
}

export default App;
