import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App