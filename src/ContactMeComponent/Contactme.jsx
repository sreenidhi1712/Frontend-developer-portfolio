import React,{useEffect} from 'react'
import styles from './Contactme.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pdf from '../assets/Sreenidhi D Frontend ReactJS Developer.pdf';

function Contactme() {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  const handleLinks = (links)=>{
    window.open(links, '_blank');
  }
  return (
    <div className={styles.Contactcontainer}>
             <div className={styles.ContactTitle}>
                   <p> CONTACT ME</p>
             </div>

             <div className={styles.Messager}>
                <div className={styles.emailcontainer}>
                    <MdOutlineEmail size='30'/>
                        <p className={styles.email}>sreenidhid2002@gmail.com</p>
                </div>
                <div className={styles.mobilecontainer}>
                    <FaPhoneAlt size='20'/>
                        <p className={styles.mobile}>+91 63602 91496</p>
                </div>         
             </div>

             <div className={styles.Address}>
                <IoLocationOutline className={styles.LocatioMark} size='30'/>
                        <p className={styles.address}>U-129 1st main road, Srirampuram, Blore-21</p>
             </div>
             <div   className={styles.downloadbbtncontainer}>
              <a className={styles.downloadresume} href={Pdf} download="../assets/Sreenidhi D Frontend ReactJS Developer.pdf">Download Resume</a>
             </div>

             <div className={styles.SocialMedia}  >
                <FaLinkedin  size='40' className={styles.LinkedinIcon} onClick={()=>handleLinks('https://www.linkedin.com/in/sreenidhi-d-b999a11b3/overlay/contact-info/')}/>
                            <FaGithub  size='40' className={styles.GithubIcon} onClick={()=>handleLinks('https://github.com/sreenidhi1712')}/>
             </div>

    </div>
  )
}

export default Contactme
