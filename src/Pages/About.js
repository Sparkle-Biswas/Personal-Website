import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Tooltip } from '@mui/material'
import HomeNavbar from '../Components/HomeNavbar'
import Platform from '../Components/Platform'
import BigPlatform from '../Components/BigPlatform'
import abstractVideo from '../Assets/abstract.mp4';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { FaCrown } from "react-icons/fa6";
import BlackrockImg from '../Assets/blackrock.jpg';
import PurdueImg from '../Assets/photo.jpg'
import KrachImg from '../Assets/krach.jpg'


function About() {
  const  experienceRef = useRef(null);
  const educationRef = useRef(null);
  const leadershipRef = useRef(null);
  const personalRef = useRef(null);

  const scrollToExperienceSection = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLeadershipSection = () => {
    if (leadershipRef.current) {
      leadershipRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEducationSection = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPersonalSection = () => {
    if (personalRef.current) {
      personalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
    style={{display:'flex', flexDirection:'column', height:'100vh',width:'100vw', overflowY:'auto', overflowX:'hidden'}}
    initial={{opacity:'0'}}
    animate={{opacity:'100%', transition:{duration:1}}}
    exit={{opacity:'0' , transition:{duration:0.2}}}>
      <HomeNavbar/>
      <div style={{width:'100%', height:'100%', overflow:'hidden', position:'absolute', zIndex:'-1'}}>
        <video src = {abstractVideo} autoPlay loop muted  playbackRate={0.2}
          style={{width:'100%', padding:'0', opacity:'40%'}}
        />
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:'5em', width:"100%",
       alignItems:'center',  zIndex:'2', justifyContent:'center'}}>
        <div style={{display:'flex', gap:'25vw', marginRight:'25vw'}}>
          <Tooltip title='Navigate to Experience Section!' placement='top'>
            <div onClick={scrollToExperienceSection}>
              <Platform >
                <WorkIcon className='rotateDiv' sx={{color:'rgb(90, 126, 225)', fontSize:'2em'}}/>
                <p style={{fontSize:'1.8em', color:'rgb(90, 126, 225)'}}>EXPERIENCE</p>
              </Platform>
            </div>
          </Tooltip>
          <Tooltip title='Navigate to Leadership Section!' placement='top'>
            <div onClick={scrollToLeadershipSection}>
              <Platform>
                <FaCrown className='rotateDiv' style={{color:'rgb(90, 126, 225)', fontSize:'2em'}}/>
                <p style={{fontSize:'1.8em', color:'rgb(90, 126, 225)'}}>LEADERSHIP</p>
              </Platform>
            </div>
          </Tooltip>
        </div>
        <div style={{marginLeft:'15vw',display:'flex',  gap:'25vw'}}>
          <Tooltip title='Navigate to Education Section!' placement='top'>
            <div onClick={scrollToEducationSection}>
              <Platform>
                <SchoolIcon className='rotateDiv' sx={{color:'rgb(90, 126, 225)', fontSize:'2.2em'}}/>
                <p style={{fontSize:'1.8em', color:'rgb(90, 126, 225)'}}>EDUCATION</p>
              </Platform>
            </div>
          </Tooltip>
          <Platform>
            <PersonPinIcon className='rotateDiv' sx={{color:'rgb(90, 126, 225)', fontSize:'2.2em'}}/>
            <p style={{fontSize:'1.8em', color:'rgb(90, 126, 225)'}}>PERSONAL</p>
          </Platform>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'8em', gap:'7em'}}>
        <div ref={experienceRef} /> 
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <div style={{display:'flex', gap:'3em', transform: 'rotateY(30deg)', justifyContent:'center',
           height:'fit-content', backgroundColor:'black',border:'2px solid rgb(25, 79, 228)', padding:'1em',
           width:'90%', marginLeft:'1em', alignItems:'center', marginBottom:'1em', boxShadow: ' 0px 1px 12px 1px rgb(25, 79, 228)'}}>
            <div style={{width:'60%'}}>
              <h2 style={{color:'rgb(90, 126, 225)'}}>Intern at BlackRock</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
                I had the opportunity to intern with BlackRock during summer 2022 where
                 I  collaborated with senior engineers to address a complex design problem,
                  where our goal was to make the main app service scalable, transitioning 
                  from handling data points for 100+ Exchange-Traded Fund (ETF) products to
                   1000+ ETF products. This 2.5-month project taught me how to familiarize 
                   myself with a large, existing codebase and also develop an understanding 
                   of complex financial topics in a short time.

              </p>
            </div>
            <div style={{width:'35%'}}>
              <img src={BlackrockImg} style={{width:'100%'}}/>
            </div>            
          </div>
          <BigPlatform />
        </div>
        <div ref={educationRef} />
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <div style={{display:'flex', gap:'3em', transform: 'rotateY(30deg)', justifyContent:'center',
           height:'fit-content', backgroundColor:'black',border:'2px solid rgb(25, 79, 228)', padding:'1em',
           width:'90%', marginLeft:'1em', alignItems:'center', marginBottom:'1em', boxShadow: ' 0px 1px 12px 1px rgb(25, 79, 228)'}}>
            <div style={{width:'60%'}}>
              <h2 style={{color:'rgb(90, 126, 225)'}}>Purdue University</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
              I recently graduated with a Bachelor’s in Computer Science from Purdue University 
              in December 2023. During the past four years, I acquired proficiency in multiple programming
               languages, including Java, C, and Python, through coursework and internship projects.  
              These experiences honed my ability to familiarize and master new technologies quickly. 

              </p>
            </div>
            <div style={{width:'35%'}}>
              <img src={PurdueImg} style={{width:'100%'}}/>
            </div>            
          </div>
          <BigPlatform />
        </div>
        <div ref={leadershipRef}/>
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <div style={{display:'flex', gap:'3em', transform: 'rotateY(30deg)', justifyContent:'center',
           height:'fit-content', backgroundColor:'black',border:'2px solid rgb(25, 79, 228)', padding:'1em',
           width:'90%', marginLeft:'1em', alignItems:'center', marginBottom:'1em', boxShadow: ' 0px 1px 12px 1px rgb(25, 79, 228)'}}>
            <div style={{width:'60%'}}>
              <h2 style={{color:'rgb(90, 126, 225)'}}>Building Manager At Krach</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
              My part-time position as a Building Manager at Krach Leadership center
               taught me valuable problem-solving skills and refined my interpersonal 
               abilities while overseeing the daily operations of the building. 
               It offered me the chance to enhance my leadership skills through training of 10+ 
               new employees. 
              </p>
            </div>
            <div style={{width:'35%'}}>
              <img src={KrachImg} style={{width:'100%'}}/>
            </div>            
          </div>
          <BigPlatform />
        </div>
        <div ref={personalRef}>

        </div>     
      </div>       
    </motion.div>
  )
}

export default About

//
