import React from "react";
import "./Projects.css";
import project1 from '../../asets/project1.jpg'
import project2 from '../../asets/project2.png'
import project3 from '../../asets/project3.jpg'


function Projects() {
  return (
    <div className="projectContainer" id="proj">
      <div className="projHeading">
        <div>Projects</div>
      </div>
      <div className="allProjects">
        <div className="projCard">
          <div className="projImg">
            <img
              src={project1}
              alt="not available"
            />
          </div>
          <div className="projDetail">
            <div className="projCount">01</div>
            <div className="githubDetail">
              <div className="githubButton">
                <a href="https://github.com/Abchoudhary2512/Linea_cook_off">
                  GitHub
                </a>
              </div>
              <div className="detailProj">
                LineaMint simplifies NFT creation and trading on the Linea
                blockchain, making it easy for artists and collectors to engage
                seamlessly.
              </div>
              <div className="techStacks">
                <span>React</span>
                <span>Blockchain</span>
                <span>NodeJS</span>
                <span>Solidity</span>
              </div>
            </div>
          </div>
        </div>
        <div className="projCard">
          <div className="projImg">
            <img src={project3} alt="No preview available" />
          </div>
          <div className="projDetail">
            <div className="projCount">02</div>
            <div className="githubDetail">
              <div className="githubButton">
                <a href="https://github.com/Abchoudhary2512/Drive3.0">
                  GitHub
                </a>
              </div>
              <div className="detailProj">
                Revolutionizing data storage through a blockchain-powered drive
                application, enhancing control, privacy, and security.
              </div>
              <div className="techStacks">
                <span>ReactJS</span>
                <span>EtherJS</span>
                <span>Metamask</span>
                <span>Blockchain</span>
              </div>
            </div>
          </div>
        </div>
        <div className="projCard">
          <div className="projImg">
            <img src={project2} alt="No preview available" />
          </div>
          <div className="projDetail">
            <div className="projCount">03</div>
            <div className="githubDetail">
              <div className="githubButton">
                <a href="https://github.com/Abchoudhary2512/SplitMate">
                  GitHub
                </a>
              </div>
              <div className="detailProj">
                a full-stack expense-splitting web application using the MERN
                stack (MongoDB, Express.js, React.js, Node.js), enabling users
                to manage and visualize group expenses and balances
              </div>
              <div className="techStacks">
                <span>ReactJS</span>
                <span>MongoDB</span>
                <span>Nodejs</span>
                <span>ExpressJs</span>
                <span>ShadCn UI & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
