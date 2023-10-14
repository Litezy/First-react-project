import React from 'react'
import Headers from './components/Headers'
import Banner from './components/Banner'
import FirstSection from './components/FirstSection'
import PlansSection from './components/PlansSection'
import PopOut from './components/PopOut'

const App = () => {
  return (
    <div>
    <Headers/>
    <Banner/>
    <FirstSection/>
    <PlansSection/>
    <PopOut/>
    </div>
  )
}

export default App