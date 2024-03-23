import React from 'react'
import { Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets'
import WalletIcon from '@mui/icons-material/Wallet'
import LaunchIcon from '@mui/icons-material/Launch'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ExtensionIcon from '@mui/icons-material/Extension'
import EjectRoundedIcon from '@mui/icons-material/EjectRounded'
import '../Styles/App.css';
import NodejsIcon from '../Assets/nodejsIcon.svg'
import ReactIcon from '../Assets/reactIcon.svg'
import Css3Icon from '../Assets/css3.svg'
import FirebaseIcon from '../Assets/firebase.svg'
import MaterialUIIcon from '../Assets/materialUI.svg'
import JavascriptIcon from '../Assets/javascript.svg'
import MongodbIcon from '../Assets/mongodb.svg'
import { motion } from 'framer-motion'
import HomeNavbar from '../Components/HomeNavbar'

function Projects() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const  budgitRef = useRef(null);
  const campuslinkRef = useRef(null);
  const personalRef = useRef(null);

  const scrollToBudgitSection = () => {
    if (budgitRef.current) {
      budgitRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToCampuslinkSection = () => {
    if (campuslinkRef.current) {
      campuslinkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPersonalSection = () => {
    if (personalRef.current) {
      personalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToBudgit = () => {
    window.open('https://github.com/Sparkle-Biswas/Budgit', '_blank');
  };

  const goToCampusLink = () => {
    window.open('https://github.com/Sparkle-Biswas/CampusLink', '_blank');
  };

  const goToHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
    setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);

  }, []);

  return (
    <motion.div 
    style={{display:'flex', flexDirection:'column', height:'100vh',width:'100vw', overflowY:'auto', overflowX:'hidden'}}
    initial={{opacity:'0'}}
    animate={{opacity:'100%', transition:{duration:1}}}
    exit={{opacity:'0' , transition:{duration:0.2}}}>
      <HomeNavbar/>
      <div style={{width:'100%', height:'100%', overflow:'hidden', position:'absolute', zIndex:'-1'}}>
        <video autoPlay loop muted  playbackRate={0.2}
          className='homeVideo'
        >
          <source src={'https://firebasestorage.googleapis.com/v0/b/sparkle-biswas.appspot.com/o/abstract.mp4?alt=media&token=31d76519-a393-4156-8ad0-f2757bb50016'} type='video/mp4'/>
        </video>
      </div>
      <div className='balanceDiv' >
        <div style={{display:'flex', width:'80%', justifyContent:'space-between'}}>

          <div style={{display:'flex', flexDirection:'column', gap:'1px'}}>
            <div style={{backgroundColor:'black', border:'2px solid rgb(25, 79, 228)', display:'flex', borderRadius:'0.5em',
            height:'11vh', width:'20vw', justifyContent:'center', alignItems:'center', boxShadow:'-5px 5px 0px rgb(90, 126, 225)'
            ,gap:'1em', marginLeft:'2vw'}}>
              <h4 style={{color:'rgb(25, 79, 228)', fontFamily: 'Kanit, sans-serif', fontSize:'2vw'}}>MY PROJECTS</h4>
              <div className='spinDiv'>
                <WidgetsIcon sx={{color:'rgb(90, 126, 225)', fontSize:'1.5em'}}/>
              </div>
            </div>
            <div style={{backgroundColor:'black', border:'2px solid rgb(25, 79, 228)', display:'flex', gap:'1vh', boxShadow:'-5px 5px 0px rgb(90, 126, 225)',borderRadius:'0.5em',
            flexDirection:'column', height:'23vh', width:'25vw', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
            
                <p style={{fontSize:'1.5vw'}}>Check out my Projects on the Right!</p>
                <p style={{fontSize:'1.5vw'}}>Main Technologies Used:</p>
              <div style={{display:'flex', gap:'1.2vw'}}>
                <Tooltip title='Node.js' placement='bottom'>
                  <img src={NodejsIcon} alt="Node.js-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='CSS' placement='bottom'>
                  <img src={Css3Icon} alt="CSS3-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='Material UI' placement='bottom'>
                  <img src={MaterialUIIcon} alt="MUI-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='Javascript' placement='bottom'>
                  <img src={JavascriptIcon} alt="Javascript-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='MongoDB' placement='bottom'>
                  <img src={MongodbIcon} alt="MongoDB-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='React.js' placement='bottom'>
                  <img src={ReactIcon} alt="React.js-Icon" style={{width:'2vw'}} />
                </Tooltip>
                <Tooltip title='Firebase' placement='bottom'>
                  <img src={FirebaseIcon} alt="Firebase-Icon" style={{width:'2vw'}} />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className='projectNavSection' >
            <Tooltip title='Navigate to Budgit' placement='left'>
              <div className='budgitNavigation'
              onClick={scrollToBudgitSection}>
                <h4 style={{color:'rgb(68, 194, 137)', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>BUDGIT</h4>
                <WalletIcon className='hoverSpinDiv' sx={{color:'rgb(68, 194, 137)'}}/>
              </div>
            </Tooltip>
            <Tooltip title='Navigate to CampusLink' placement='left'>
              <div className='campuslinkNavigation'
              onClick={scrollToCampuslinkSection}
              >
                <h4 style={{color:'aliceblue', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>CAMPUSLINK</h4>
                <AccountBalanceIcon className='hoverSpinDiv' sx={{color:'aliceblue'}}/>
              </div>
            </Tooltip>
            <Tooltip title='Navigate to Personal Website' placement='left'>
              <div className='personalNavigation'
              onClick={scrollToPersonalSection}>
                <h4 style={{color:'rgb(25, 79, 228)', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>PERSONAL WEBSITE</h4>
                <ExtensionIcon className='hoverSpinDiv' sx={{color:'rgb(25, 79, 228)'}}/>
              </div>
            </Tooltip>
          </div>
        </div>
        <div style={{width:'90%', height:'1em', backgroundColor:'black', borderRadius:'0.3em',
          border:'2px solid rgb(25, 79, 228)', boxShadow:'-5px 5px 0px rgb(90, 126, 225)'}} />
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'1em', alignItems:'center'}}>
        
        <EjectRoundedIcon sx = {{color: 'rgb(90, 126, 225)', fontSize:'6em', marginTop:'-12px'}}/>
      </div>
      <div style={{display:'flex', flexDirection:'column', width:'90%', alignSelf:'center', marginTop:'6em', paddingBottom:'5em', gap:"6em"}}>
        <div ref={budgitRef} style={{height:'1vh',width:'100%', background:'transparent'}} />
        <div style={{backgroundColor: 'black', border :'2px solid rgb(25, 79, 228)', display:'flex',
          gap:'1em', paddingRight:'1em', paddingLeft:"1em",  alignItems:'center',boxShadow:'-5px 5px 0px rgb(90, 126, 225)', borderRadius:'0.5em'}}>
          <div style={{width:'40%', paddingRight:'2em'}}>
            <Tooltip title='Check out Budgit!' placement='top-end'>
            <div className='websiteHeader'  onClick={goToBudgit}>
                <h4 style={{color:'rgb(68, 194, 137)', fontFamily: 'Kanit, sans-serif', fontSize:'4vw',margin:'0'}}>BUDGIT</h4>
                <LaunchIcon sx={{color:'rgb(68, 194, 137)', fontSize:'2.5vw'}}/>
              </div>
            </Tooltip>
            <div style={{width:'100%', height:'0.2em',backgroundColor:'rgb(25, 79, 228)', borderRadius:'0.3em',
            marginBottom:'1em'}} />
            <p style={{color: 'rgb(68, 194, 137)', fontSize:'1.3vw'}}>
              BUDGIT is a web application that can be used to manage you expenses and subscriptions,
              join forums to discuss finance-related topics with other users and lastly you can invite
              your friends to 'budgit' with you!
              This project was a group effort involving five individuals, with me leading the front-end development.</p>
            <p style={{ fontSize:'1.5vw', marginTop:'1vh', textDecoration:'underline', textShadow: '0px 0px 0px black'}}>
              Main Technologies:
            </p>
            <div style={{display:'flex', gap:'2vw', marginTop:'2vh'}}>
              <Tooltip title='Node.js' placement='bottom'>
                <img src={NodejsIcon} alt="Node.js-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='CSS' placement='bottom'>
                <img src={Css3Icon} alt="CSS3-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Material UI' placement='bottom'>
                <img src={MaterialUIIcon} alt="MUI-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Javascript' placement='bottom'>
                <img src={JavascriptIcon} alt="Javascript-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='MongoDB' placement='bottom'>
                <img src={MongodbIcon} alt="MongoDB-Icon" style={{width:'2vw'}} />
              </Tooltip>
            </div>
          </div>
          <div style={{width:'60%'}}>
            <video src = {'https://firebasestorage.googleapis.com/v0/b/sparkle-biswas.appspot.com/o/budgitVideo.mp4?alt=media&token=5f99b2a3-4287-47d0-987d-cefea06798f6'} autoPlay loop muted
            style={{width:'100%', padding:'0', height:'100%',display:'block !important', borderRadius:'1em'}}
            />
          </div>
        </div>
        <div ref={campuslinkRef} style={{height:'1vh',width:'100%', background:'transparent'}}>

        </div>
        <div style={{backgroundColor: 'black', border :'2px solid rgb(25, 79, 228)', display:'flex',
          gap:'1em', paddingRight:'1em', paddingLeft:"1em",  alignItems:'center',boxShadow:'-5px 5px 0px rgb(90, 126, 225)', borderRadius:'0.5em'}}>
          <div style={{width:'40%', paddingRight:'2em'}}>
            <Tooltip title='Check out CampusLink!' placement='top-end'>
            <div className='websiteHeader'  onClick={goToCampusLink}>
                <h4 style={{color:'aliceblue', fontFamily: 'Kanit, sans-serif', fontSize:'4vw',margin:'0'}}>CAMPUSLINK</h4>
                <LaunchIcon sx={{color:'aliceblue', fontSize:'2.5vw'}}/>
            </div>
            </Tooltip>
            <div style={{width:'100%', height:'0.2em', borderRadius:'0.3em',
            marginBottom:'1em', backgroundColor:'rgb(25, 79, 228)'}} />
            <p style={{color: 'aliceblue', fontSize:'1.3vw'}}>
              CAMPUSLINK is a online learning management system for creating, 
              hosting, and editing online learning resources. This application aims to combine the best 
              features of other learning platforms like Brightspace and Canvas! This was a group project 
              and I was mainly responsible for the 'Courses', 'Announcements' and 'Grades' pages.
            </p>
            <p style={{ fontSize:'1.5vw', marginTop:'1vh', textDecoration:'underline', textShadow: '0px 0px 0px black'}}>
              Main Technologies:
            </p>
            <div style={{display:'flex', gap:'2vw', marginTop:'2vh'}}>
              <Tooltip title='React.js' placement='bottom'>
                <img src={ReactIcon} alt="React.js-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Node.js' placement='bottom'>
                <img src={NodejsIcon} alt="Node.js-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='CSS' placement='bottom'>
                <img src={Css3Icon} alt="CSS3-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Material UI' placement='bottom'>
                <img src={MaterialUIIcon} alt="MUI-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Javascript' placement='bottom'>
                <img src={JavascriptIcon} alt="Javascript-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Firebase' placement='bottom'>
                <img src={FirebaseIcon} alt="Firebase-Icon" style={{width:'2vw'}} />
              </Tooltip>
            </div>
          </div>
          <div style={{width:'60%'}}>
            <video src = {'https://firebasestorage.googleapis.com/v0/b/sparkle-biswas.appspot.com/o/campuslink.mp4?alt=media&token=038a17b1-34eb-4d28-ad11-6e4cf6a6e4e4'} autoPlay loop muted
            style={{width:'100%', padding:'0', height:'100%',display:'block !important', borderRadius:'1em'}}
            />
          </div>
        </div>
        <div ref={personalRef} 
        style={{height:'1vh',width:'100%', background:'transparent'}} />
        <div style={{backgroundColor: 'black', border :'2px solid rgb(25, 79, 228)', display:'flex',
          gap:'1em', padding:'1em',  alignItems:'center',boxShadow:'-5px 5px 0px rgb(90, 126, 225)', borderRadius:'0.5em'}}>
          <div style={{width:'40%', paddingRight:'2em'}}>
            <Tooltip title='Go To Homepage!' placement='top-end'>
            <div className='websiteHeader'  onClick={goToHomepage}>
                <h4 style={{color:'rgb(25, 79, 228)', fontFamily: 'Kanit, sans-serif', fontSize:'4vw',margin:'0'}}>MY WEBSITE</h4>
                <LaunchIcon sx={{color:'rgb(25, 79, 228)', fontSize:'2.5vw'}}/>
              </div>
            </Tooltip>
            <div style={{width:'100%', height:'0.2em', borderRadius:'0.3em',
            marginBottom:'1em', backgroundColor:'rgb(25, 79, 228)'}} />
            <p style={{color: 'rgb(25, 79, 228)', fontSize:'1.3vw'}}>
              I created my PERSONAL WEBSITE to highlight my passion for design, coding and puzzles! 
              I mainly focused on creating a User Interface that is visually appealing while also focusing 
              on my achievements and aspirations. If you like to connect, please navigate to the homepage for my contact details!
            </p>
            <p style={{ color:'aliceblue', fontSize:'1.5vw', marginTop:'1vh', textDecoration:'underline', textShadow: '0px 0px 0px black'}}>
              Main Technologies:
            </p>
            <div style={{display:'flex', gap:'2vw', marginTop:'2vh'}}>
              <Tooltip title='React.js' placement='bottom'>
                <img src={ReactIcon} alt="React.js-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Node.js' placement='bottom'>
                <img src={NodejsIcon} alt="Node.js-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='CSS' placement='bottom'>
                <img src={Css3Icon} alt="CSS3-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Material UI' placement='bottom'>
                <img src={MaterialUIIcon} alt="MUI-Icon" style={{width:'2vw'}} />
              </Tooltip>
              <Tooltip title='Javascript' placement='bottom'>
                <img src={JavascriptIcon} alt="Javascript-Icon" style={{width:'2vw'}} />
              </Tooltip>
            </div>
          </div>
          <div style={{width:'60%'}}>
            <video src = {'https://firebasestorage.googleapis.com/v0/b/sparkle-biswas.appspot.com/o/personalVid.mp4?alt=media&token=206d15a7-12cf-492a-be5f-cc74d5589429'} autoPlay loop muted
            style={{width:'100%', padding:'0', height:'100%',display:'block !important', borderRadius:'1em'}}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
