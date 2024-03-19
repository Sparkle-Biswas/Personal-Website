import '../Styles/App.css'
import '../Styles/Piece.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import EmailModal from '../Components/EmailModal'
import SchoolIcon from '@mui/icons-material/School'
import EmailPuzzle from '../Components/EmailPuzzle'
import GithubPuzzle from '../Components/GithubPuzzle'
import LinkedinPuzzle from '../Components/LinkedinPuzzle'
import ResumePuzzle from '../Components/ResumePuzzle'
import Piece from '../Components/Piece'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { Tooltip } from '@mui/material'
import { motion } from 'framer-motion'


function Home() {


  const [loaded, setLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAllLoaded(true);
      }, 4000);
  
    return () => clearTimeout(timer1);
}, []);
  

  const [open, setOpen] = useState(false);

  const emailToggle = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const linkToggle = () => {
    window.open('https://www.linkedin.com/in/sparkle-biswas/', '_blank');
  };

  const gitToggle = () => {
    window.open('https://github.com/Sparkle-Biswas', '_blank');
  };

  const resumeToggle = () => {
    window.open('https://drive.google.com/file/d/1xGVvYA5rv0zDEuk47EMX-oKSiGjKfFfy/view?usp=sharing', '_blank');    
  };
  

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity:'100%', transition:{duration:1}}}
    exit={{opacity: 0}}
    style={{display:'flex', flexDirection:'column', height:'100vh',width:'100vw', overflowX:'hidden'
    }}
    >
      <div style={{width:'100%', height:'100%', overflow:'hidden', position:'absolute', zIndex:'-1'}}>
        <video autoPlay loop muted  playbackRate={0.2}
          style={{width:'100%', padding:'0', opacity:'40%'}}
        >
          <source src={'https://firebasestorage.googleapis.com/v0/b/sparkle-biswas.appspot.com/o/abstract.mp4?alt=media&token=31d76519-a393-4156-8ad0-f2757bb50016'} type='video/mp4'/>
        </video>
      </div>
      <div className='Box'>
        <div className='transitionBox' style={{
          transform: loaded ? 'translateX(0)' : 'translateX(-110%)',
        }}>
          <div className='RightBox' />       
          <div className='puzzleColBox'>
            <div className='puzzlecontentBox'>
              <div className='contentCenteredBox'>
                <div className='contentBox' >
                  <h2 style={{textShadow: '0px 0px 0px black'}}>SPARKLE BISWAS</h2>
                  <p style={{color: 'rgb(90, 126, 225)'}}>Designer | Programmer | Problem Solver | Leader</p>
                  <div className='schoolBox'>
                    <SchoolIcon sx={{color: 'rgb(90, 126, 225)'}}/>
                    <p style={{color: 'rgb(90, 126, 225)'}}>Purdue University CS '23</p>
                  </div>
                  <div className='socialBox'>
                    <div className='innerSocialBox'>
                      <EmailPuzzle emailToggle={emailToggle}/>
                      <GithubPuzzle gitToggle={gitToggle}/>
                    </div>
                    <div className='innerSocialBox'>
                      <LinkedinPuzzle linkToggle={linkToggle}/>
                      <ResumePuzzle resumeToggle={resumeToggle}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bottomBox' />
          </div>
        </div>
        <div className='puzzleBox'>
          <Tooltip title='Projects' placement='top'>
            <div className='rowPuzzleBox' style={{ marginBottom:'-1em'}} 
            onClick={() => {
                  navigate("/Projects");
                }}>
              
                <div className='pieceTransition' style={{transform: loaded
                  ? 'translateX(0) translateY(0)'
                  : 'translateX(-110%) translateY(-1000%) rotate(180deg)',
                  transitionDelay: '0.5s',
                  marginTop:'-2.5em', 
                }}>
                  <Piece>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <WidgetsIcon className='icon'/>
                      <p className='pieceText'>
                        Projects
                      </p>
                    </div>
                  </Piece>
                </div>
              <div className='pieceTransition' style={{transform: loaded ? 'translateX(0) translateY(0) rotate(90deg)' 
              : 'translateX(150%) translateY(-1000%) rotate(180deg)'
              }}>
                <Piece>
                  <WidgetsIcon className='x-widgetsIcon'/>
                </Piece>
              </div>
            </div>
          </Tooltip>
          <Tooltip title='About' placement='bottom'>
            <div className='rowPuzzleBox' style={{ marginRight:'2.5em'}} 
            onClick={() => {
              navigate("/about");
            }}
            > 
            <div className='pieceTransition' 
            style={{transform: loaded ? 'translateX(0) translateY(0) rotate(270deg)' : 'translateX(-150%) translateY(1000%) rotate(180deg)',
            transitionDelay: '1s',
            marginLeft:'-2.5em', marginBottom:'1.5em' 
              }}>
                <Piece>
                  <PersonPinIcon className='x-personIcon'/>
                </Piece>
            </div>
              <div className='pieceTransition' 
              style={{transform: loaded ? 'translateX(0) translateY(0) rotate(180deg)' : 'translateX(150%) translateY(1000%) rotate(180deg)',
              transitionDelay: '1.5s',
              marginBottom:"-1em"
                }}
                >
                  <Piece> 
                    <div style={{transform:'rotate(180deg)', marginRight:'0.8em', marginTop:'-0.3em'}}>
                      <div style={{display:'flex', justifyContent:'center'}}>
                        <PersonPinIcon className='icon'/>
                      </div>
                      <p className='pieceText'>
                        About
                      </p>
                    </div>
                  </Piece>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
      <EmailModal
      open={open}
      handleClose={handleClose}
      />
    </motion.div>
  );
}
export default Home;
