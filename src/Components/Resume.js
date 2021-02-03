import React from "react";
import './Resume.css'
const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.class}</em>
          </p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var ml;
      var className = "bar-expand " + skills.name.toLowerCase();
        if (window.innerWidth >= 760){ ml = window.innerWidth/2 ;}
        else{ml = parseInt(skills.ml) + 200;}
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}>
          </span>

          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{skills} </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
