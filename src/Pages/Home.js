import '../Styles/App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import EmailModal from '../Components/EmailModal';
import SchoolIcon from '@mui/icons-material/School';
import EmailPuzzle from '../Components/EmailPuzzle';
import GithubPuzzle from '../Components/GithubPuzzle';
import LinkedinPuzzle from '../Components/LinkedinPuzzle';
import ResumePuzzle from '../Components/ResumePuzzle';
import Piece from '../Components/Piece';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WidgetsIcon from '@mui/icons-material/Widgets';
import abstractVideo from '../Assets/abstract.mp4';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion'


function Home() {


  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const mainBox = {
    display: 'flex',
    alignItems: 'center',
    gap: '4em',
    paddingTop: '4.5em',
    paddingLeft: '3em'
  };
  
  const transitionBox = {
    display: 'flex',
    flexDirection: 'row',
    padding: '1em',
    transform: loaded ? 'translateX(0)' : 'translateX(-110%)',
    transition: 'transform 1.3s ease',
    marginRight:'4em'
  };

  const puzzleColBox = {
    display: 'flex', 
    flexDirection:'column'
  };

  const puzzlecontentBox = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    width: '31em',
    borderTop: '2px solid rgb(25, 79, 228)',
    borderRight: '2px solid rgb(25, 79, 228)',
    minHeight: '25em',
    marginLeft: '11px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const contentCenteredBox = {
    height: '95%',
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentBox = {
    display: 'flex',
    height: '95%',
    width: '95%',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5em'
  };

  const schoolBox = {
    display:'flex', 
    alignItems:'center', 
    gap:'10px'
  };

  const socialBox = { 
    display:'flex', 
    flexDirection:'column', 
    marginTop:'2.5em'
  };

  const innerSocialBox = {
    display:'flex', 
    flexDirection:'row'
  };

  const RightBox = {
    width: '2em',
    height: '24.88em',
    backgroundColor: 'black',
    transform: 'skew(0deg,-47deg)',
    marginRight:'-11px',
    marginTop:'19px',
    border: '2px solid rgb(25, 79, 228)',
  };

  const bottomBox = {
    width: '31em',
    height: '2.18em',
    transform: 'skew(-42deg)',
    backgroundColor: 'black',
    marginLeft:'-8px',
    border: '2px solid rgb(25, 79, 228)',
  };

  const puzzleBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '60em',
    backgroundColor: 'black',
    marginTop:"1em"
  };

  const rowPuzzleBox = {
    display:'flex'
  }
  
  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);

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
    >
      <div style={{width:'100%', height:'100%', overflow:'hidden', position:'absolute'}}>
        <video src = {abstractVideo} autoPlay loop muted playbackRate={0.2}
          style={{width:'100%', padding:'0', opacity:'70%'}}
        />
      </div>
      <div style={mainBox}>
        <div style={transitionBox}>
          <div style={RightBox} />       
          <div style={puzzleColBox}>
            <div style={puzzlecontentBox}>
              <div style={contentCenteredBox}>
                <div style={contentBox} >
                  <h2>SPARKLE BISWAS</h2>
                  <p>Designer | Programmer | Problem Solver | Leader</p>
                  <div style={schoolBox}>
                    <SchoolIcon sx={{color: 'rgb(25, 191, 228)'}}/>
                    <p>Purdue University CS '23</p>
                  </div>
                  <div style={socialBox}>
                    <div style={innerSocialBox}>
                      <EmailPuzzle emailToggle={emailToggle}/>
                      <GithubPuzzle gitToggle={gitToggle}/>
                    </div>
                    <div style={innerSocialBox}>
                      <LinkedinPuzzle linkToggle={linkToggle}/>
                      <ResumePuzzle resumeToggle={resumeToggle}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={bottomBox} />
          </div>
        </div>
        <div style={puzzleBox}>
          <div style={{display:'flex', marginBottom:'-1em'}}>
            <Tooltip title='Projects' placement='top'>
              <div style={{transform: loaded
                ? 'translateX(0) translateY(0)'
                : 'translateX(-110%) translateY(-1000%) rotate(180deg)',
                transition: 'transform 2s ease',
                transitionDelay: '0.5s',
                 marginTop:'-2.5em', 
              }} onClick={() => {
                navigate("/Projects");
              }}>
                <Piece>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <WidgetsIcon sx={{color:'rgb(25, 79, 228)', fontSize:'2.4em'}}/>
                    <p style={{fontSize:'2.2em', textShadow: '0px 0px 0px black'}}>
                      Projects
                    </p>
                  </div>
                </Piece>
              </div>
            </Tooltip>
            <div style={{transform: loaded ? 'translateX(0) translateY(0) rotate(90deg)' 
            : 'translateX(150%) translateY(-1000%) rotate(180deg)',
            transition: 'transform 2s ease',
            '&:hover': {
              cursor: 'pointer',
            }}}>
              <Piece>
                <WidgetsIcon sx={{color:'rgb(25, 79, 228)', fontSize:'4.5em', marginRight:'0.45em', marginTop:'0.2em', transform:'rotate(270deg)'}}/>
              </Piece>
            </div>
          </div>
          <div style={rowPuzzleBox}>
            
          <div style={{transform: loaded ? 'translateX(0) translateY(0) rotate(270deg)' : 'translateX(-150%) translateY(1000%) rotate(180deg)',
          transition: 'transform 2s ease', 
          transitionDelay: '1s',
            '&:hover': {
              cursor: 'pointer',
            }, marginLeft:'-2.5em', marginBottom:'1.5em' 
            }}>
              <Piece>
                <PersonPinIcon sx={{color:'rgb(25, 79, 228)', fontSize:'5em', marginRight:'0.3em', marginTop:'0.2em', transform:'rotate(90deg)'}}/>
              </Piece>
          </div>
          <Tooltip title='About' placement='bottom'>
            <div style={{transform: loaded ? 'translateX(0) translateY(0) rotate(180deg)' : 'translateX(150%) translateY(1000%) rotate(180deg)',
            transition: 'transform 2s ease',
            transitionDelay: '1.5s',
                '&:hover': {
                  cursor: 'pointer',
              }, marginBottom:"-1em"
              }}
              onClick={() => {
                navigate("/about");
            }}>
                <Piece> 
                  <div style={{transform:'rotate(180deg)', marginRight:'1.1em', marginTop:'-0.3em'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                      <PersonPinIcon sx={{color:'rgb(25, 79, 228)', fontSize:'2.4em'}}/>
                    </div>
                    <p style={{fontSize:'2.2em', textShadow: '0px 0px 0px black'}}>
                      About
                    </p>
                  </div>
                </Piece>
            </div>
          </Tooltip>
          </div>
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
