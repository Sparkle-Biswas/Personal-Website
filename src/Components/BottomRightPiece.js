import {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';


function BottomRightPiece() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const mainBox = {
    display: 'flex',
    width: '16em',
    height: '12.1em',
    backgroundColor: 'black',
    overflow: 'hidden',
    paddingLeft: '3px',
    paddingBottom: '2px',
    paddingTop: '2px',
    marginLeft: '-2em',
    transform: loaded ? 'translateX(0) translateY(0) rotate(180deg)' : 'translateX(150%) translateY(1000%) rotate(180deg)',
    transition: 'transform 2s ease',
    transitionDelay: '1.5s'
  };

  const innerBox = {
    display: 'flex',
    width: '12em',
    height: '12em',
    backgroundColor: 'black',
    zIndex: '1',
    border: '1px solid rgb(85, 9, 185)',
    borderRadius: '1em',
    boxShadow: '0px 2px 13px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    position: 'relative'
  };

  const verticalBar = {
    position: 'absolute',
    width: '1em',
    height: '9em',
    background: 'black',
    right: '0.19em',
    bottom: '1.8em',
    zIndex: '100',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const horizontalBar = {
    position: 'absolute',
    width: '2.2em',
    height: '9em',
    background: 'black',
    right: '1em',
    bottom: '1.8em',
    zIndex: '100',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const firstCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '6em',
    width: '5em',
    transform: 'translate(3.5em, 9em)',
    boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    border: '1px solid rgb(85, 9, 185)',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const secondCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '5em',
    width: '6em',
    transform: 'translate(4.5em, 3.5em)',
    zIndex: '0',
    border: '1px solid rgb(85, 9, 185)',
    boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const infoContainer = {
    position:'absolute', 
    zIndex:'101',
    transform:'rotate(180deg)'
  };

  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);

  }, []);
  return (
    <Tooltip title='About Me!' placement='right' sx={{'&:hover': {
      cursor: 'pointer',
    },}}>
      <div style={mainBox}
      onClick={() => {
        navigate("/about");
      }}>
          <div style={innerBox}>
              <div style={verticalBar} />
              <div style={horizontalBar} />
              <div style={firstCircle}/>
              <div style={secondCircle}/>
              <div style={infoContainer}>

              </div>
          </div>
      </div>
    </Tooltip>
  )
}

export default BottomRightPiece
