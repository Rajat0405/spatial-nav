import React, {useEffect} from 'react'
import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';
import '../src/App.css'

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

  const Nextbar = ()=> {
    const {ref, focused} = useFocusable({
      focusKey : 'nextbar'
    });
    return (
    <div className={focused ? 'focused': ''} ref={ref}>
      NextBar
    </div>
    )
  }
const Navigation = () => {
  
    init ({

    });
    const {  focusSelf, focusKey } = useFocusable({
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
        // ref={ ref }
      >
        
        <GoLiveButton  onEnterPress={() => console.log('Go Live clicked')} />
        <ProgressBar />
        
      </div>
    </FocusContext.Provider>
    )
  
}

export default Navigation