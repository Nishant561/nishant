import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'

import {Nav ,Home} from './Components/index'
import Layou from './Components/Layou'



function App() {
 

  


  return (
    <>

      
      
    <Routes>

          <Route>
            <Route path='/nishant/' element={<Layou/>}>
            
              
            </Route>
          </Route>



    </Routes>
    
    </>
  )
}

export default App
