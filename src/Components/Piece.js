import {React, useEffect, useState} from 'react';

function Piece(props) {
  const [loaded, setLoaded] = useState(false);

  const mainBox = {
    display: 'flex',
    width: '14.7em',
    height: '11.3em',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingLeft: '3px',
    paddingBottom: '2px',
    paddingTop: '2px',
    marginLeft: '-2em',
    
  };

  const innerBox = {
    display: 'flex',
    width: '11em',
    height: '11em',
    backgroundColor: 'black',
    zIndex: '1',
    border: '2px solid rgb(25, 79, 228)',
    borderRadius: '1em',
    position: 'relative'
  };

  const verticalBar = {
    position: 'absolute',
    width: '1em',
    height: '8em',
    background: 'black',
    right: '0em',
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
    height: '5.5em',
    width: '4.5em',
    transform: 'translate(3.17em, 8.2em)',
    border: '2px solid rgb(25, 79, 228)',
    '&:hover': {
      cursor: 'pointer',
    },
  };
  const borderBar = {
    position:'absolute',
    backgroundColor: 'black',
    height: '7em',
    width: '5.5em',
    transform: 'translate(3.1em, 11.15em)',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const secondCircle = {
    backgroundColor: 'black',
    borderRadius: '45%',
    height: '4.5em',
    width: '5.6em',
    transform: 'translate(3.3em, 3.1em)',
    zIndex: '0',
    border: '2px solid rgb(25, 79, 228)',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  const infoContainer = {
    position: 'absolute',
    zIndex: '101',
    right: '1.1em',
    top: '1.5em',
    gap: '0.2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  };

  useEffect(() => {
      const timer = setTimeout(() => {
      setLoaded(true);
      }, 300);

      return () => clearTimeout(timer);

  }, []);
  return (
    <div style={mainBox}>
        <div style={innerBox}>
          <div style={verticalBar} />
          <div style={horizontalBar} />
          <div style={firstCircle}/>
          <div style={borderBar}/>
          <div style={secondCircle}/>
          <div style={infoContainer}>
            {props.children}
          </div>
      </div>
    </div>
  )
}

export default Piece
