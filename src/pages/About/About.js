import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Files/Experience resume.pdf";
import { resume } from "../../Data";
import "./About.css";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>me</span>
        </h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Info's</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <Link to={CV} download="" className="button">
              Download CV
              <span className="button-icon">
                <FaDownload />
              </span>
            </Link>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">
          Experience & Education
        </h3>
        <div className="resume-container grid">
          <div className="resume-data">
            {resume.map((val) => {
              if (val.category === "Experience") {
                return <ResumeItem key={val.id} {...val} />;
              } else {
                return null; // add a return statement to the function
              }
            })}
          </div>
          <div className="resume-data">
            {resume.map((val) => {
              if (val.category === "Education") {
                return <ResumeItem key={val.id} {...val} />;
              } else {
                return null; // add a return statement to the function
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
