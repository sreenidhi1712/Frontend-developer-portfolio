import React,{useEffect} from 'react'
import styles from './Contactme.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contactme() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
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

             <div className={styles.SocialMedia}  >
                <FaLinkedin  size='40' className={styles.LinkedinIcon}/>
                            <FaGithub  size='40' className={styles.GithubIcon}/>
             </div>

    </div>
  )
}

export default Contactme
