//Components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

//Styles
import './App.scss'

function App() {

  return (
    <div className='app'>
      <Navbar/>
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
