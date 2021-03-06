import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Na from './components/Na'
import Main from './components/Main'
import Footer from './components/Footer'
import {MoiveProvider} from './components/MovieContext'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

function App() {
  const [searchShow, setSearchShow] = useState('d-block')
  return (
    <Router>
      <MoiveProvider>
        <div className=''>
          <Na />
          <Main />
          <Footer />
        </div>
      </MoiveProvider>
    </Router>
  )
}

export default App
