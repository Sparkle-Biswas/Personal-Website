import React from 'react'
import { Tooltip } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets'
import WalletIcon from '@mui/icons-material/Wallet'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ExtensionIcon from '@mui/icons-material/Extension'
import '../App.css';
import NodejsIcon from '../Images/nodejsIcon.svg'
import ReactIcon from '../Images/reactIcon.svg'
import Css3Icon from '../Images/css3.svg'
import FirebaseIcon from '../Images/firebase.svg'
import MaterialUIIcon from '../Images/materialUI.svg'
import JavascriptIcon from '../Images/javascript.svg'
import MongodbIcon from '../Images/mongodb.svg'
import Photo from '../Images/headshot.png'
import { motion } from 'framer-motion'

function Projects() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
    setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);

  }, []);

  return (
    <motion.div 
    style={{display:'flex', flexDirection:'column', width:'100%', overflowY:'auto', overflowX:'hidden'}}
    initial={{opacity:'0'}}
    animate={{opacity:'100%', transition:{duration:1}}}
    exit={{opacity:'0' , transition:{duration:0.2}}}>
      <div style={{ backgroundColor:'black', display:'flex',
          marginBottom:"1.5em", padding:'0.4em', borderBottom:'1px solid rgb(85, 9, 185)'}}>
          <Tooltip title='Home' placement='bottom'>
          <HomeIcon sx={{fontSize:'1.7em', color: 'white', 
          '&:hover': {
          cursor: 'pointer'}
        }}
          onClick={() => {
            navigate("/");}}
          />
          </Tooltip>
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', marginTop:'3em'}}>
        <div style={{display:'flex', width:'80%', justifyContent:'space-between'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'3px', }}>
            <div style={{display:'flex', backgroundColor:'black', height:'11vh', border:'2px solid rgb(85, 9, 185)', 
            justifyContent:'center', alignItems:'center', gap:'1vw', maxWidth:'fit-content',
             paddingRight:'1vw', paddingLeft:'1vw', marginLeft:'4vw'}}>
              <h4 style={{color:'rgb(68, 194, 137)', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>BUDGIT</h4>
              <WalletIcon sx={{color:'rgb(68, 194, 137)'}}/>
            </div>
            <div style={{display:'flex', backgroundColor:'black', height:'11vh', border:'2px solid rgb(85, 9, 185)', 
            justifyContent:'center', alignItems:'center', gap:'1vw', marginLeft:'3vw',
            maxWidth:'fit-content', paddingRight:'1vw', paddingLeft:'1vw'}}>
              <h4 style={{color:'aliceblue', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>CAMPUSLINK</h4>
              <AccountBalanceIcon sx={{color:'aliceblue'}}/>
            </div>
            <div style={{display:'flex', backgroundColor:'black', height:'11vh', border:'2px solid rgb(85, 9, 185)', justifyContent:'center',
             alignItems:'center', gap:'1vw', paddingRight:'1vw', paddingLeft:'1vw', marginLeft:'2vw'}}>
              <h4 style={{color:'rgb(85, 9, 185)', fontFamily: 'Kanit, sans-serif', fontSize:'1.8vw'}}>PERSONAL WEBSITE</h4>
              <ExtensionIcon sx={{color:'rgb(85, 9, 185)'}}/>
            </div>

          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'3px'}}>
            <div style={{backgroundColor:'black', border:'2px solid rgb(85, 9, 185)', display:'flex',
             height:'11vh', width:'20vw', justifyContent:'center', alignItems:'center', gap:'1em', marginLeft:'1em'}}>
              <h4 style={{color:'rgb(85, 9, 185)', fontFamily: 'Kanit, sans-serif', fontSize:'2vw'}}>MY PROJECTS</h4>
              <div className='spinDiv'>
                <WidgetsIcon sx={{color:'rgb(157, 105, 225)', fontSize:'1.5em'}}/>
              </div>
            </div>
            <div style={{backgroundColor:'black', border:'2px solid rgb(85, 9, 185)', display:'flex', gap:'1vh',
            flexDirection:'column', height:'23vh', width:'25vw', marginRight:'2em', justifyContent:'center', alignItems:'center'}}>
             
                <p style={{fontSize:'1.5vw'}}>Check out my Projects on the Left!</p>
                <p style={{fontSize:'1.5vw'}}>Main Technologies Used:</p>
              <div style={{display:'flex', gap:'1vw'}}>
                <img src={NodejsIcon} alt="Node.js-Icon" style={{width:'2vw'}} />
                <img src={ReactIcon} alt="React-Icon" style={{width:'2vw'}} />
                <img src={Css3Icon} alt="CSS3-Icon" style={{width:'2vw'}} />
                <img src={FirebaseIcon} alt="Firebase-Icon" style={{width:'2vw'}} />
                <img src={MaterialUIIcon} alt="MUI-Icon" style={{width:'2vw'}} />
                <img src={JavascriptIcon} alt="Javascript-Icon" style={{width:'2vw'}} />
                <img src={MongodbIcon} alt="MongoDB-Icon" style={{width:'2vw'}} />
              </div>
            </div>
          </div>
        </div>
        <div style={{width:'80%', height:'0.2em', backgroundColor:'rgb(85, 9, 185)'}}>
        </div>
        <div style={{width: '0', height: '0', borderLeft: '1em solid transparent',
        borderRight: '1em solid transparent', borderBottom: '2.5em solid rgb(85, 9, 185)'}} />

      </div>
      <div style={{display:'flex',backgroundColor:'white', width:'95%',
       height:'15em', alignSelf:'center'}}>
        <div style={{backgroundColor: 'black', border :'2px solid rgb(85, 9, 185)', display:'flex',
          gap:'1em', padding:'1em', margin:'1em'}}>
           
          
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
