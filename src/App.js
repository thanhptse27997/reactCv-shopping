import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Components/layout';
import Listpage from './Components/pages/Listpage';
import Homepage from './Components/pages/Homepage';
import Detailpage from './Components/pages/Detailpage';
import Finishorder from './Components/pages/Finishorder';


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path ='/' component={Homepage} />
            <Route exact path ='/list' component={Listpage} />
            <Route exact path ='/detail' component={Detailpage} />
            <Route exact path ='/finishOrder' component={Finishorder} />
          </Switch>
        </Layout>
      </Router>
      </React.Fragment>
    )
  }
}

export default App