import React, {useEffect} from 'react'
import styles from "./Mywork.module.css"
// import { worksmade } from './work'
import projectimage from './proj.jpg'
import chanakya from './Chanakya.png'
import  Newswing from './Newswing.png' 
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
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>Vibhaa -  E-commerce Website</p>
                            </div>
                            <div className={styles.Description}>
                            <p>A Web Application for providing users with a seamless online shopping experience</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/Vibhaa-Ecommerce-website.git' target="_blank" className={styles.projlinks}>View code</a></button>
                                <button className={styles.Button}>View Project</button>
                            </div>
                            </div>
                        </div>
                        <div className={styles.Cards} data-aos = "fade-up"  data-aos-delay="200">
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img src={Newswing} alt='projecimages' className={styles.ProjectImg}/>
                                </div>
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>News-wings</p>
                            </div>
                            <div className={styles.Description}>
                            <p> News-wings, a cutting-edge news app built with React and Tailwind CSS. Stay informed with real-time updates and a personalized news feed tailored just for you.</p>
                            </div>
                            <div className={styles.ButtonContainer}>
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/News-wings.git' target="_blank" className={styles.projlinks}>View Code</a></button>
                                <button className={styles.Button}>View Project</button>
                            </div>
                            </div>
                        </div>
                        <div className={styles.Cards} data-aos = "fade-up"  data-aos-delay="500">
                            <div className={styles.ImageHolder}>
                            <div className={styles.Imagepositioner}>
                                       <img src={chanakya} alt='projecimages' className={styles.ProjectImg}/>
                                </div>
                            </div>
                            <div className={styles.ContentContainer}>
                            <div className={styles.ProjectNameContainer}>
                            <p className={styles.ProjectName}>AI Chat Bot</p>
                            </div>
                            <div className={styles.Description}>
                           <p> An AI-driven Web Application designed to provide users  content generation capabilities, similar to Google's Gemini</p>
                            </div>
                            <div className={styles.ButtonContainer} >
                                <button className={styles.Button}><a href='https://github.com/sreenidhi1712/Chanakya-AI.git' target="_blank" className={styles.projlinks}>View Code</a></button>
                                <button className={styles.Button}>View Project</button>
                            </div>
                            </div>
                        </div>
                  
                </div>

</div>
    </>
  )
}

export default Mywork
