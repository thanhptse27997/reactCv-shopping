import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Components/layout';
import Listpage from './Components/pages/Listpage';
import Homepage from './Components/pages/Homepage';
import Detailpage from './Components/pages/Detailpage';
import Cart from './Components/pages/Cart';
import Finishorder from './Components/pages/Finishorder';
import Introduce from './Components/pages/Introduce'
import Login from './Components/pages/Login'
import Registration from './Components/pages/Registration';
import UserAccount from './Components/pages/UserAccount';
import './App.css'



class App extends React.Component{
  render(){
    return(
      <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route exact path ='/reactCv-shopping/' component={Homepage} />
            <Route exact path ='/reactCv-shopping/list' component={Listpage} />
            <Route exact path ='/detail' component={Detailpage} />
            <Route exact path ='/reactCv-shopping/cart' component={Cart} />
            <Route exact path ='/reactCv-shopping/login' component={Login} />
            <Route exact path ='/reactCv-shopping/registration' component={Registration} />
            <Route exact path ='/reactCv-shopping/user' component={UserAccount} />
            <Route exact path ='/reactCv-shopping/finishOrder' component={Finishorder} />
            <Route exact path ='/reactCv-shopping/introduce' component={Introduce} />
          </Switch>
        </Layout>
      </Router>
      </React.Fragment>
    )
  }
}

export default App