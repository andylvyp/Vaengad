import React from 'react';
import {  Route, Switch,HashRouter } from 'react-router-dom';
import Vaengad from './vaengad'
import Description from './description'
import Insight from './insight'
import Skill from './skill'
import Way from './way'
import Thank from './thank'
import InfoInput from './infoInput'

class App extends React.Component {
  render() {
    return (
      <HashRouter >
        <Switch>
          <Route exact path="/description" component={Description}/>
          <Route exact path="/insight" component={Insight}/>
          <Route exact path="/skill" component={Skill}/>
          <Route exact path="/way" component={Way}/>
          <Route exact path="/thank" component={Thank}/>
          <Route exact path="/" component={InfoInput}/>
        </Switch>
      </HashRouter>
    )
  }
}
export default App;