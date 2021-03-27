import React from 'react'
import GlobalStyle from './assets/globalStyles'
import { ApiDataProvider } from './context/apiContext'
import { Menu } from './components/menu/menu'
import { Background } from './assets/styledBackground'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { OptionInfo } from './components/option1/optionInfo'
import { OptionImage } from './components/option2/optionImage'
const App = () => {
 
  return (
    <Router>
      <ApiDataProvider>
        <GlobalStyle />
        <Background>
          <Menu />
          <Route path="/info" exact component={OptionInfo} />
          <Route path="/image" exact component={OptionImage} />
        </Background>
      </ApiDataProvider>
    </Router>
  )
}

export default App
