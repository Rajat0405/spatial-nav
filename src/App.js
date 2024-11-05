import './App.css';
import React, { useEffect } from 'react';
import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';
// Components for each control
const PlayPauseButton = () => {
  const { ref, focused } = useFocusable({
    focusKey: 'playpause',
    onArrowPress: ( { keyCode } )=>{
      if( keyCode === 38){
        // setfocus( 'proo')
      }
    }

  });

  return (
  <div className={`control-item ${focused ? 'focused' : ''}`} ref={ref} style={ {width: 'fit-content'} }>
    <svg
      width={ 80 }
      height={ 80 }
      viewBox='0 0 21 20'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.798 1.963c-.35-.395-1.242-.395-1.242 0v16.074c0 .395.895.395 1.246 0l11.708-7.322a1.105 1.105 0 0 0 .006-1.43L4.798 1.963Z'
        fill={ focused ? 'blue' : '#f3cbe3'}
      />
    </svg>
  </div>
)}

const GoLiveButton = () => {
  const { ref, focused } = useFocusable({
    focusKey: 'golive'
  });
  return (
  <div className={`control-item ${focused ? 'focused' : ''}`} ref={ref}>
    Go Live
  </div>
)}

const ProgressBar = () => {
  const { ref, focused } = useFocusable({
    focusKey: 'bar'
  });
  return (
  <div className={ classNames( 'bar', `control-item ${focused ? 'focused' : ''}` ) } ref={ref}>
    Progress Bar
  </div>
)
}

const AudioOptions = () => {
  const { ref, focused } = useFocusable({
    // focusKey: 'Audio'
  });
  
  return (
  <div className={`control-item ${focused ? 'focused' : ''}`} ref={ref}>
    Audio Options
    <div className="audio-track">Track 1</div>
    <div className="audio-track">Track 2</div>
  </div>
)
}

const VideoOptions = () => {

  const { ref, focused } = useFocusable({
    focusKey: 'Video'
  });

  return (
    <div className={`control-item ${focused ? 'focused' : ''}`} ref={ ref }>
    Video Options
    <div className="video-quality">Quality 1</div>
    <div className="video-quality">Quality 2</div>
  </div>
  )
}


const SubtitlesOptions = () => {
  const { ref, focused } = useFocusable({
    focusKey: 'Subtitles'
  });

  return (
    <div className={`control-item ${focused ? 'focused' : ''}`} ref={ ref }>
    Subtitles Options
    <div className="subtitle-language">English</div>
    <div className="subtitle-language">Spanish</div>
  </div>
  )
}
  


function App() {
  init( {
    debug: true
  } );

  const { ref, focusSelf, focusKey } = useFocusable({
    focusKey: 'playercontrols'
  });

  useEffect( ()=>{
    if( focusSelf ){
      focusSelf();
    } 
  }, [focusSelf])

  return (
    <FocusContext.Provider value={ focusKey }>
      <div className="control-panel"
        ref={ ref }
      >
        <PlayPauseButton />
        <GoLiveButton  onEnterPress={() => console.log('Go Live clicked')} />
        <ProgressBar />
        < div className='buttons'>
        <AudioOptions />
        <VideoOptions />
        <SubtitlesOptions />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default App;