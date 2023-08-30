import { useState } from 'react'

//Components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Menu from './components/Menu'

//Styles
import './App.scss'

function App() {

  const [menuOpen , setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Certificates/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
