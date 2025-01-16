// src/components/Portfolio.jsx
import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <div className="container">
        <Heading title="I'm Asfaq Ahmed" text="Full Stack Web Developer" />

        <div className="mb-10">
          <h2 className="h2">ASFAQ AHMED</h2>
          <p>(+94756605254) - (asfaqahmed356@gmail.com) - 39, De Alwis Place, Dehiwela.</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/asfaqahmed/">linkedin.com/in/asfaqahmed/</a></p>
          <p>Github: <a href="https://github.com/asfaqahmed">https://github.com/asfaqahmed</a></p>
          <p>Portfolio: <a href="https://asfaqahmed.github.io">https://asfaqahmed.github.io</a></p>
        </div>

        <div className="mb-10">
          <h3 className="h3">SUMMARY</h3>
          <p>Full Stack Developer is familiar with a wide range of programming utilities. Knowledgeable of backend and frontend development. Handles any part of the process with ease. My Primary Stack is Go Lang, Fiber, MSSQL, PostgreSQL, Next JS. Collaborative team player with excellent technical abilities offering more than 2 years of related experience.</p>
        </div>

        <div className="mb-10">
          <h3 className="h3">About Me</h3>
          <p>I am a Full Stack Developer with 2 years of experience. MIT graduate from South Eastern University of Sri Lanka. Looking for Full Stack Web Developer Role</p>
          <ul>
            <li>Django/Python 65%</li>
            <li>PHP/Laravel 95%</li>
            <li>WordPress Web Development 95%</li>
            <li>Front End Web Development (React/Bootstrap/HTML/CSS) 70%</li>
          </ul>
          <Button href="path/to/resume.pdf" white>Click Here To Download My Resume</Button>
        </div>

        <div className="mb-10">
          <h3 className="h3">Working Experience And Education</h3>
          <p>2018-2021 BSC In MIT SEUSL University</p>
          <p>WordPress Developer Dec 2021 - Feb 2022 One Day Digital</p>
          <ul>
            <li>Used WordPress and HTML to develop app solutions.</li>
            <li>Developed efficient and maintainable software according to business objectives and needs of clients.</li>
            <li>Maintained complex technology infrastructure and collaborated with the product team to implement new features and strategically plan for future products.</li>
          </ul>
          <p>Software Engineer Apr 2022 - Present</p>
          <ul>
            <li>Experience in developing web applications for government and private hospitals, educational institutions, and industrial facilities.</li>
            <li>Proficient in utilizing React.js and Next.js frameworks for front-end development, with Node.js as the runtime environment.</li>
            <li>Experienced in using Golang for backend development.</li>
            <li>Experienced in handling databases using MySQL and PostgreSQL, with strong proficiency in writing and optimizing MySQL queries.</li>
            <li>Experienced in using AWS servers for hosting and deploying applications, ensuring scalable and reliable cloud infrastructure.</li>
            <li>Providing exceptional customer care and technical support to clients, ensuring seamless resolution of issues and a positive user experience.</li>
            <li>Possesses strong knowledge of GitHub, including version control, collaboration, and project management features.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="h3">My Portfolio</h3>
          <p>My Excellent Portfolio</p>
          <ul>
            <li>Health Management Information Systems</li>
            <li>Sales & Inventory</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="h3">Certifications & Courses</h3>
          <ul>
            <li>MySQL Advanced Topics - LinkedIn</li>
            <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
            <li>Responsive Web Design - freeCodeCamp</li>
            <li>Networking Academy Learn-A-Thon 2020 - Cisco</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="h3">SKILLS</h3>
          <ul>
            <li>Programming Languages - JavaScript, Python, Golang</li>
            <li>Web Development Technologies - ReactJS, HTML, CSS, Next JS, NodeJS, Bootstrap</li>
            <li>Databases - MySQL, PostgreSQL</li>
            <li>Tools and other technologies - GitHub, GitLab, AWS, Docker, Azure, Scrum, Postman</li>
            <li>Languages - English, Tamil, Sinhala</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;