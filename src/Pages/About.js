import React from 'react'
import { Box } from '@mui/material'
import photo from '../Images/headshot.png'
import PhotoPiece from '../Components/PhotoPiece'

function About() {
  return (
    <div style={{display:'flex',flexDirection:'column', height:'inherit', width:'inherit',
    justifyContent:'center', backgroundColor:'black'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center',
         height:'inherit', width:'inherit', flexDirection:'column'}}>
            <div style={{paddingLeft:"27em"}}>
                <PhotoPiece>
                <img src={photo} alt="photo"
                 style={{width:'9.5em'}}/>
                </PhotoPiece>
            </div>
            <div style={{ border:'1px solid rgb(85, 9, 185)', padding:'4em',
             paddingRight:'2em', paddingLeft:'2em', width:'50%', height:'auto',
             boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(85, 9, 185)'}}>
                <p style={{color:'aliceblue', fontSize:'1.5vw'}}> 
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
    </div>
  )
}

export default About

//
