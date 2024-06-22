import React from 'react'
import styles from "./About.module.css"
import myself from './sreenidhi.jpg'

function About() {
  return (
    <div className={styles.MainContainer}>
    
        <div className={styles.Title}>
           
                <p className={styles.domain}>Frontent Web Developer</p>
                <div className={styles.Name}>
                    SREENIDHI D
                </div>
                <div className={styles.Description}>
                       
                        <p>Crafting intuitive and dynamic web experiences with a passion for clean code and modern design. Eager to bring creativity and technical skills to innovative projects.</p>
                </div>
        </div>
        <div className={styles.ImageContainer}>
              <div className={styles.ImageHolder}>
                  <img src={myself} alt="myself"></img>
              </div>
        </div>

    </div>
  )
}

export default About
