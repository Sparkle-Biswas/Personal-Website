import '../App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import EmailModal from '../Components/EmailModal';
import SchoolIcon from '@mui/icons-material/School';
import EmailPuzzle from '../Components/EmailPuzzle';
import GithubPuzzle from '../Components/GithubPuzzle';
import LinkedinPuzzle from '../Components/LinkedinPuzzle';
import ResumePuzzle from '../Components/ResumePuzzle';
import TopRightPiece from '../Components/TopRightPiece';
import TopLeftPiece from '../Components/TopLeftPiece';
import BottomLeftPiece from '../Components/BottomLeftPiece';
import BottomRightPiece from '../Components/BottomRightPiece';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WidgetsIcon from '@mui/icons-material/Widgets';


import { styled } from '@mui/system';

function Home() {


  const [loaded, setLoaded] = useState(false);

  const mainBox = {
    display: 'flex',
    alignItems: 'center',
    gap: '4em',
    paddingTop: '3em',
    paddingLeft: '3em'
  };
  
  const transitionBox = {
    display: 'flex',
    flexDirection: 'row',
    padding: '1em',
    transform: loaded ? 'translateX(0)' : 'translateX(-110%)',
    transition: 'transform 1.3s ease'
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
    borderTop: '1px solid rgb(96, 40, 169)',
    borderRight: '1px solid rgb(96, 40, 169)',
    boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)',
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
    height: '25em',
    backgroundColor: 'black',
    transform: 'skew(0deg,-47deg)',
    marginRight:'-11px',
    marginTop:'17px',
    border: '1px solid rgb(96, 40, 169)',
    boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)'
  };

  const bottomBox = {
    width: '31em',
    height: '2.18em',
    transform: 'skew(-41deg)',
    backgroundColor: 'black',
    marginLeft:'-6px',
    border: '1px solid rgb(96, 40, 169)',
    boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)' 
  };

  const puzzleBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '40em',
    backgroundColor: 'black',
    height: 'fit-content',
    gap: '3em',
    paddingLeft: '1em'
  };

  const rowPuzzleBox = {
    display:'flex',  
    gap:'1em'
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
    alert("navigate to resume");
  };

  return (
    <div>
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
                    <SchoolIcon sx={{color: 'rgb(157, 105, 225)'}}/>
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
          <div style={rowPuzzleBox}>
            <TopLeftPiece>
                <div className='spinDiv'>
                  <WidgetsIcon sx={{color:'rgb(157, 105, 225)', fontSize:'2.5em'}}/>
                </div>
                <p style={{fontSize:'2.5em', textShadow: '0px 0px 0px black'}}>
                  Projects
                </p>
            </TopLeftPiece>
            <TopRightPiece />
          </div>
          <div style={rowPuzzleBox}>
            <BottomLeftPiece/>
            <BottomRightPiece/>
          </div>
        </div>
      </div>
      <EmailModal
      open={open}
      handleClose={handleClose}
      />
    </div>
  );
}
export default Home;
