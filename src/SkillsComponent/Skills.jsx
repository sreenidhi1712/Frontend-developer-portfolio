import React from 'react'
import Styles from './Skills.module.css'
import { FaReact, FaBootstrap, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiRedux ,SiMui } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  return (
    <div className={Styles.MainContainer}>
              <div className={Styles.CardContainerFramework}>
                            <p>MY SKILLS</p>
              </div>
              <div className={Styles.CardContainerLibraries}>
              <div className={Styles.Cards}>
                      <FaReact className={Styles.skillsIcon}  title="React" size="4rem"/>
                      <p>ReactJS</p>
            </div>
                <div className={Styles.Cards}>
                    <SiMui className={Styles.skillsIcon}  title="Material-ui" size="4rem"/>
                    <p>MATERIAL-UI</p>
                </div>
                <div className={Styles.Cards}>
                    <RiTailwindCssFill className={Styles.skillsIcon}  title="Tailwind-css" size="4rem"/>
                    <p>TAILWIND CSS</p>
                </div>

                <div className={Styles.Cards}>
                  <FaBootstrap  className={Styles.skillsIcon}  title="Bootstrap" size="4rem"/>
                  <p>BOOTSTRAP</p>
                </div>
                <div className={Styles.Cards}>
                    <FaGitAlt className={Styles.skillsIcon}   title="Git"  size="4rem" />
                    <p>GIT</p>
                  </div>
                <div className={Styles.Cards}>
                    <SiRedux className={Styles.skillsIcon}  title="Redux" size="4rem"/>
                    <p>REDUX</p>
                </div>

                <div className={Styles.Cards}>
                        <FaHtml5 className={Styles.skillsIcon}  title="HTML5" size="4rem"/>
                        <p>HTML</p>
              </div>

              <div className={Styles.Cards}>
                    <FaCss3Alt className={Styles.skillsIcon}  title="CSS3" size="4rem"/>
                    <p>CSS</p>
              </div>
              <div className={Styles.Cards}>
                      <FaJs className={Styles.skillsIcon}   title="JavaScript" size="4rem"/>
                      <p>JAVASCRIPT</p>
              </div>
              </div>
    </div>
  )
}

export default Skills
