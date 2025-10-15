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
        <button onClick={() => scrollToSection('skills')}>Skills</button>
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
            <ul>
              <li>Built a trading bot in Python using CCXT to simulate trades on Kraken, applying Bollinger Bands for buy/sell signals.</li>
              <li>Designed a modular architecture with separate files for bot logic, utility functions, and backtesting.</li>
              <li>Implemented a backtesting framework with historical OHLCV data and visualized performance using Matplotlib.</li>
              <li>Practiced risk management by simulating trade sizing, balance tracking, and profit multipliers.</li>
            </ul>
            <a href="https://github.com/AryanP27/Mean-Reversion-Bot" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Currency Converter – C++ Finance Project</h3>
            <ul>
              <li>Built a C++ program that fetches real-time exchange rates from ExchangeRate-API.</li>
              <li>Uses <code>libcurl</code> to make HTTP requests and parses JSON responses.</li>
              <li>Allows users to view available currencies and convert between supported currency pairs.</li>
              <li>Provides a simple command-line interface with accurate market rates.</li>
            </ul>
            <a href="https://github.com/AryanP27/Currency-Converter" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Stock Price Analyzer – Python Finance Project</h3>
            <ul>
              <li>Developed a Python bot that analyzes stock prices using RSI (Relative Strength Index).</li>
              <li><code>fetch_data.py</code> retrieves data from Yahoo Finance via yfinance and stores it in CSV files.</li>
              <li><code>SPA.py</code> processes the CSV data and generates visual models for closing price, volume, and RSI.</li>
              <li>Helps users identify overbought/oversold conditions to make informed trading decisions.</li>
            </ul>
            <a href="https://github.com/AryanP27/Stock-Price-Analyzer" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>A* AI Heuristic Search Project</h3>
            <p>
              This project implements and visualizes <strong>A*</strong> search on a grid-based maze,
              comparing its performance against <strong>BFS</strong> for large-scale mazes (up to 1000×1000).
            </p>
            <ul>
              <li>Generates random maze with start and goal</li>
              <li>Implements BFS and A* using a Manhattan heuristic</li>
              <li>Visualized with Matplotlib for side-by-side comparison</li>
              <li>A* ≈ 1s vs BFS ≈ 6s on 1000×1000 maze</li>
            </ul>
            <a href="https://github.com/AryanP27/A-Star-Path-AI-Project" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

        </div>
        <button className="icon-button" onClick={() => scrollToSection('skills')}>
          <HiArrowDownCircle size={60} />
        </button>

      </section>

      <section className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-cards">
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">HTML/CSS</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">FastAPI</div>
          <div className="skill-card">AWS Amplify</div>
          <div className="skill-card">Docker</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Jira</div>
          <div className="skill-card">Azure DevOps</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <h2>Let's Connect</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:apai232705@gmail.com">apai232705@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryanp27/">Aryan P</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/AryanP27">AryanP27</a></p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
