import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Tooltip } from '@mui/material'
import HomeNavbar from '../Components/HomeNavbar'
import Platform from '../Components/Platform'
import BigPlatform from '../Components/BigPlatform'
import abstractVideo from '../Assets/abstract.mp4'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { FaCrown } from "react-icons/fa6";
import BlackrockImg from '../Assets/blackrock.jpg';
import PurdueImg from '../Assets/photo.jpg'
import KrachImg from '../Assets/krach.jpg'
import PsubImg from '../Assets/psub.jpg'

function About() {
  const  experienceRef = useRef(null);
  const educationRef = useRef(null);
  const leadershipRef = useRef(null);
  const personalRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const transitionPlatform = {
    transform: loaded ? 'translateX(0)' : 'translateX(-550%)',
    transition: 'transform 1.5s ease',
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
    setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);

}, []);

  return (
    <motion.div 
    style={{display:'flex', flexDirection:'column', height:'100vh',width:'100vw', 
    overflowY:'auto', overflowX:'hidden'}}
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
       alignItems:'center',  zIndex:'2', justifyContent:'center',
        marginTop:'-2em',marginLeft:'1.8em'}}>
        <div style={{display:'flex', gap:'25vw', marginRight:'25vw'}}>
          <Tooltip title='Navigate to Internship Section!' placement='top'>
            <div className='transitionPlatform' onClick={scrollToExperienceSection} style={transitionPlatform}>
              <Platform >
                <motion.div 
                  className='glowDiv'
                  initial={{opacity:'0'}}
                  animate={{ opacity: 1, transition: { duration: 2, delay: 1.9 } }}
                >
                  <WorkIcon className='rotateDiv' sx={{color:'rgb(68, 194, 137)', fontSize:'2em'}}/>
                  <p style={{fontSize:'1.5em', color:'rgb(68, 194, 137)'}}>INTERNSHIP</p>
                </motion.div>
              </Platform>
            </div>
          </Tooltip>
          <Tooltip title='Navigate to Leadership Section!' placement='top'>
            <div className='transitionPlatform' onClick={scrollToLeadershipSection} style={transitionPlatform}>
              <Platform>
                <motion.div 
                className='glowDiv'
                initial={{opacity:'0'}}
                animate={{ opacity: 1, transition: { duration: 2, delay: 1.9 } }}
                >
                  <FaCrown className='rotateDiv' style={{color:'aliceblue', fontSize:'2em'}}/>
                  <p style={{fontSize:'1.5em', color:'aliceblue'}}>LEADERSHIP</p>
                </motion.div>
              </Platform>
            </div>
          </Tooltip>
        </div>
        <div style={{marginLeft:'15vw',display:'flex',  gap:'25vw'}}>
          <Tooltip title='Navigate to Education Section!' placement='top'>
            <div className='transitionPlatform'
            onClick={scrollToEducationSection} style={transitionPlatform}>
              <Platform>
                <motion.div 
                className='glowDiv'
                initial={{opacity:'0'}}
                animate={{ opacity: 1, transition: { duration: 2, delay: 1.9 } }}
                >
                  <SchoolIcon className='rotateDiv' sx={{color:'rgb(188, 162, 77)', fontSize:'2.2em'}}/>
                  <p style={{fontSize:'1.5em', color:'rgb(188, 162, 77)'}}>EDUCATION</p>
                </motion.div>
              </Platform>
            </div>
          </Tooltip>
          <Tooltip title='Navigate to Student Union Section!' placement='top'>
            <div className='transitionPlatform'
            onClick={scrollToPersonalSection} style={transitionPlatform}>
              <Platform>
                <motion.div className='glowDiv1'
                 initial={{opacity:'0'}}
                 animate={{ opacity: 1, transition: { duration: 2, delay: 1.9 } }}
                 >
                  <PersonPinIcon className='rotateDiv' sx={{color:'rgb(90, 126, 225)', fontSize:'2.2em'}}/>
                  <p style={{fontSize:'1.5em', color:'rgb(90, 126, 225)'}}>STUDENT UNION</p>
                </motion.div>
              </Platform>
            </div>
          </Tooltip>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'6em', marginBottom:'4em', gap:'7em'}}>
        <div ref={experienceRef} /> 
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <div style={{display:'flex', gap:'3em', transform: 'rotateY(30deg)', justifyContent:'center',
           height:'fit-content', backgroundColor:'black',border:'2px solid rgb(25, 79, 228)', padding:'1em',
           width:'90%', marginLeft:'1em', alignItems:'center', marginBottom:'1em', boxShadow: ' 0px 1px 12px 1px rgb(25, 79, 228)'}}>
            <div style={{width:'60%'}}>
              <h2 style={{color:'rgb(68, 194, 137)', textShadow: '0px 0px 0px black'}}>Intern at BlackRock</h2>
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
              <h2 style={{color:'rgb(188, 162, 77)', textShadow: '0px 0px 0px black'}}>Purdue University</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
                I recently graduated with a Bachelor’s in Computer Science from Purdue University 
                in December 2023. During the past four years, I acquired proficiency in multiple programming
                languages, including Java, Javscript, C, and Python, through coursework and internship projects.  
                These experiences honed my ability to familiarize and master new technologies quickly. My coursework 
                included Data Structures, Algorithms, Operating Systems, Software Testing, Database Design, 
                Object-Oriented Programming, and Web Development.
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
              <h2 style={{color:'aliceblue', textShadow: '0px 0px 0px black'}}>Building Manager At Krach</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
              My part-time position as a Building Manager at Krach Leadership center
               taught me valuable problem-solving skills and refined my interpersonal 
               abilities while overseeing the daily operations of the building. 
               I trained over 10 employees how to navigate the reservation system and
                handle managerial duties. Additionally, I oversaw the booking system 
                for more than 10 building areas, managing both room and game equipment
                 reservations. Furthermore, I ensured the smooth operation of a 
                 three-story building housing university offices and an outdoor lounge. 
              </p>
            </div>
            <div style={{width:'35%'}}>
              <img src={KrachImg} style={{width:'100%'}}/>
            </div>            
          </div>
          <BigPlatform />
        </div>
        <div ref={personalRef} />
        <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <div style={{display:'flex', gap:'3em', transform: 'rotateY(30deg)', justifyContent:'center',
           height:'fit-content', backgroundColor:'black',border:'2px solid rgb(25, 79, 228)', padding:'1em',
           width:'90%', marginLeft:'1em', alignItems:'center', marginBottom:'1em', boxShadow: ' 0px 1px 12px 1px rgb(25, 79, 228)'}}>
            <div style={{width:'60%'}}>
              <h2 style={{color:'rgb(90, 126, 225)', textShadow: '0px 0px 0px black'}}>Project Lead At PSUB</h2>
              <hr style={{backgroundColor:'rgb(90, 126, 225)', height: '2px', border:'none'}}/>
              <p style={{fontSize:'1.2em', color:'rgb(90, 126, 225)'}}>
              As a member of the Purdue Student Union Board (PSUB) I spearheaded
               a team of students in organizing and budgeting for five or more
               events each semester, with up to 100 attendees per event. Additionally, I 
               mentored new members of the organization through both the Mentor-Mentee 
               program and the Big Buddy program during their initial semester. 
               Furthermore, I collaborated with a team to brainstorm and execute more 
               than 20 campus events, drawing crowds of up to 500 people per event.
              </p>
            </div>
            <div style={{width:'35%'}}>
              <img src={PsubImg} style={{width:'100%'}}/>
            </div>            
          </div>
          <BigPlatform />
        </div>
      </div>       
    </motion.div>
  )
}

export default About

