import React from 'react'
import { Box } from '@mui/material'
import photo from '../Images/headshot.png'
import PhotoPiece from '../Components/PhotoPiece'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material';

function About() {
  const navigate = useNavigate();
  return (
    <motion.div style={{display:'flex', height:'inherit', width:'inherit', flexDirection:'column'
    , backgroundColor:'black'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <div style={{ backgroundColor:'rgb(85, 9, 185)', display:'flex',
             marginBottom:"1.5em", padding:'0.2em'}}>
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
        <div style={{display:'flex', flexDirection:'column',
         height:'inherit', width:'100%', alignItems:'center'}}>
            
            <div style={{ border:'1px solid rgb(85, 9, 185)', padding:'1em', width:'95%', height:'auto',
             boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(85, 9, 185)'}}>
                <p style={{color:'aliceblue', fontSize:'1.3vw'}}> 
                Hey there! I'm Sparkle Biswas, and I am passionate about
                 designing, programming, and solving puzzles – 
                 also why my website rocks the puzzle theme!
                  I'm hoping to work in SWE roles that let me 
                  dive into these passions and utilize my skills. 
                  I would love to work with people who enjoy 
                  collaborate and value compassion. Please 
                  reach out if you are interested in working 
                  with me or simply want to connect!
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About

//
