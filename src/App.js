 import React, { useState } from 'react';
import Iconc from './component/Iconc';
import Navbar from './component/Navbar';
// import {mode} from './component/Mode'

function App() {
 const [mode,setMode]= useState('light');
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    // console.log('Dark mode is enebal');
   document.body.style.backgroundColor='black'  //#1d2d44


  }
  else{
    setMode('light');
    // console.log('light mode is enebal');
   document.body.style.backgroundColor='white'

  }

 }

  return (
    <div className="bg-gray-300 "  >
       <Navbar toggleMode={toggleMode} />
     <Iconc toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
