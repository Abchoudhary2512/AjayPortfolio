import React, { useState } from "react";
import "./Experience.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function Experience() {
  const [active, setActive] = useState(true);
  const [ind, setind] = useState(null);
  const handleExp = (ind) => {
    setind(ind);
    // setActive(!active);
  };
  return (
    <div className="experienceContainer" id="exp">
      <div className="expHeading">
        <div>PROFESSIONAL EXPERIENCE</div>
      </div>
      <div className="expCard">
        <div className="expHeadingCard">
          <div className="companyName">Software Developer Intern @ ESTECO </div>
          <div className="timeDuration">Jan 2025 - Mar 2025</div>
          <div className="openCloseIcon">
            {active && ind === 0 ? (
              <CiCircleMinus
                onClick={() => handleExp(null)}
                size={35}
                style={{ background: "transparent" }}
              />
            ) : (
              <CiCirclePlus
                onClick={() => handleExp(0)}
                size={35}
                style={{ background: "transparent" }}
              />
            )}
          </div>
        </div>
        {active && ind === 0 && (
          <div className="expDetailCard">
            <div className="expDetailLeft">
              <div className="expLocation">📍 Pune, India</div>
              <div className="expDetail">
                As a Software Development Intern, I built a scalable
                Organization Management Application with features like employee
                CRUD, bulk data upload, real-time validation, dynamic org chart
                visualization, and advanced search. I followed Agile practices,
                TDD, and pair programming to ensure high code quality and
                performance.
              </div>
              <div className="techStacks">
                <span>ReactJs</span>
                <span>Nodejs</span>
                <span>ExpressJS</span>
                <span>yfiles</span>
              </div>
            </div>
            <div className="expDetailRight">
              <img
                src="https://www.esteco.com/assets/img/cfvgzy1Kx3-4262.svg"
                alt="Not available"
                height="60"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
