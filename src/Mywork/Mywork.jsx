import React, {useEffect} from 'react'
import styles from "./Mywork.module.css"
// import { worksmade } from './work'
import projectimage from './proj.jpg'
import chanakya from './Chanakya.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Mywork() {

    useEffect(()=>{
    AOS.init({duration:1000})
    },[])
  return (
    <>

<div className={styles.maincontainer}>
                <div className={styles.Title}>
                        My Work
                </div>

                <div className={styles.CardContainer}>
                        <div className={styles.Cards} data-aos = "fade-up">
                            <div className={styles.ImageHolder}>
                                <div className={styles.Imagepositioner}>
                                       <img src={projectimage} alt='projecimages' className={styles.ProjectImg}/>
                                </div>
                                        
                            </div>
                            <div className={styles.ProjectName}>
                            Vibhaa -  E-commerce Website
                            </div>
                            <div className={styles.Description}>
                            <p>A Web Application for providing users with a seamless online shopping experience</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/Vibhaa-Ecommerce-website.git' className={styles.projlinks}>View Project</a></button>
                                <button className={styles.Button}>View Code</button>
                            </div>
                        </div>
                        <div className={styles.Cards} data-aos = "fade-up"  data-aos-delay="500">
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img src={projectimage} alt='projecimages' className={styles.ProjectImg}/>
                                </div>
                            </div>
                            <div className={styles.ProjectName}>
                            News-wings
                            </div>
                            <div className={styles.Description}>
                            <p>A Web Application Designed for automating the hostel room allocation </p>
                            </div>
                            <div className={styles.ButtonContainer}>
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/News-wings.git' className={styles.projlinks}>View Project</a></button>
                                <button className={styles.Button}>View Code</button>
                            </div>
                        </div>
                        <div className={styles.Cards} data-aos = "fade-up"  data-aos-delay="1000">
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img src={chanakya} alt='projecimages' className={styles.ProjectImg}/>
                                </div>
                            </div>
                            <div className={styles.ProjectName}>
                            AI Chat Bot
                            </div>
                            <div className={styles.Description}>
                           <p> An AI-driven Web Application designed to provide users  content generation capabilities, similar to Google's Gemini</p>
                            </div>
                            <div className={styles.ButtonContainer} >
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/Chanakya-AI.git' className={styles.projlinks}>View Project</a></button>
                                <button className={styles.Button}>View Code</button>
                            </div>
                            
                        </div>
                  
                </div>

</div>
    </>
  )
}

export default Mywork
