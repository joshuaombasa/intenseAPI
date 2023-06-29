import React, {useContext} from 'react'

import './App.css'
import { BoxesContext } from './ BoxesContext'


function App() {
  
const {boxesJsx} = useContext(BoxesContext)

  return (
    <div className="container">
      {boxesJsx}
    </div>
  )
}

export default App
