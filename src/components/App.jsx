import React, { useState } from 'react'

const App = () => {
    const [val,setVal]=useState(refObj);
    const refObj = {
        country:'Italy',
        food:'pasta',
        footballLeague:'Serie-A'
    }

    const newRefObj={
        ...refObj,
        winner:'AC-Milan'
    }

console.log(newRefObj);
  return (
    <>
    <div>App</div>
    <div>
    

    </div>
    
    </>
    
  )
}

export default App
