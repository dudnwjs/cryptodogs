import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomeView from './views/HomeView'
import CreateView from './views/CreateView'
import DetailView from './views/DetailView'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route path="/info/create" component={CreateView}/>
          <Route path="/info/:id" component={DetailView}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
