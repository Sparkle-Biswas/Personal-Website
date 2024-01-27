import {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';


function TopRightPiece() {
  const [loaded, setLoaded] = useState(false);

  const MainBox = {
    display: 'flex',
    width: '16em',
    height: '12.1em',
    backgroundColor: 'black',
    overflow: 'hidden',
    paddingLeft: '3px',
    paddingBottom: '2px',
    paddingTop: '2px',
    marginTop: '1.8em',
    transform: loaded ? 'translateX(0) translateY(0) rotate(90deg)' 
    : 'translateX(150%) translateY(-1000%) rotate(180deg)',
    transition: 'transform 2s ease',
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

  const VerticalBar = {
    position: 'absolute',
    width: '1em',
    height: '9em',
    background: 'black',
    right: '0.19em',
    bottom: '1.8em',
    zIndex: '100',
  };

  const VerticalBar2 = {
    position: 'absolute',
    width: '2.2em',
    height: '9em',
    background: 'black',
    right: '1em',
    bottom: '1.8em',
    zIndex: '100',
  };

  const RightCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '6em',
    width: '5em',
    transform: 'translate(3.5em, 9em)',
    boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    border: '1px solid rgb(85, 9, 185)',
  };
  
  const BottomCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '5em',
    width: '6em',
    transform: 'translate(4.5em, 3.5em)',
    border: '1px solid rgb(85, 9, 185)',
    boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
    zIndex: '0',
  };

  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);

  }, []);
  return (
    <div style={MainBox}>
        <div style={InnerBox}>
            <div style={VerticalBar} />
            <div style={VerticalBar2} />
            <div style={RightCircle}/>
            <div style={BottomCircle}/>
        </div>
    </div>

  )
}

export default TopRightPiece