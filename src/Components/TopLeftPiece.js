import {React, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Tooltip } from '@mui/material';

function TopLeftPiece(props) {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const MainBox = {
    display: 'flex',
    width: '16em',
    height: '12.1em',
    backgroundColor: 'black',
    overflow: 'hidden',
    paddingLeft: '3px',
    paddingBottom: '2px',
    paddingTop: '2px',
    marginRight: '-2em',
    transform: loaded
      ? 'translateX(0) translateY(0)'
      : 'translateX(-110%) translateY(-1000%) rotate(180deg)',
    transition: 'transform 2s ease',
    transitionDelay: '0.5s',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const InnerBox = {
    display: 'flex',
    width: '12em',
    height: '12em',
    backgroundColor: 'black',
    zIndex: '1',
    border: '1px solid rgb(85, 9, 185)',
    borderRadius: '1em',
    boxShadow: '0px 2px 13px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    position: 'relative',
  };
  
  const verticalBar = {
    position: 'absolute',
    width: '1em',
    height: '9em',
    background: 'black',
    right: '0.19em',
    bottom: '1.8em',
    zIndex: '100',
  };
  
  const horizontalBar = {
    position: 'absolute',
    width: '2.2em',
    height: '9em',
    background: 'black',
    right: '1em',
    bottom: '1.8em',
    zIndex: '100',
  };
  
  const firstCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '6em',
    width: '5em',
    transform: 'translate(3.5em, 9em)',
    boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    border: '1px solid rgb(85, 9, 185)',
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
  };
  
  const infoContainer = {
    position: 'absolute',
    zIndex: '101',
    right: '2.1em',
    top: '1.5em',
    gap: '0.2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);

  }, []);
  return (
    <Tooltip title='About Me!' placement='top'>
      <div style={MainBox}
      onClick={() => {
        navigate("/about");
      }}>
          <div style={InnerBox}>
              <div style={verticalBar} />
              <div style={horizontalBar} />
              <div style={firstCircle}/>
              <div style={secondCircle}/>
              <div style={infoContainer}>
                {props.children}
              </div>
          </div>
      </div>
    </Tooltip>
  )
}

export default TopLeftPiece
