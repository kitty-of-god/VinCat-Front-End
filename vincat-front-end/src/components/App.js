import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../styles/App.css';
import {homePage} from "./homePage";
import {registerPage} from "./registerPage";
import {loginPage} from "./login/loginPage";
import {navigationBar} from "./navigationBar";
import MainComponent from "./MainComponent";
import {Layout} from "./Layout";

class App extends Component
{
  render()
  {
    return (

        <React.Fragment>

            <Router>
                {navigationBar()}
                <Layout>
            <Switch>
              <Route exact path ="/" component={homePage}/>
              <Route  path ="/login" component={loginPage}/>
              <Route  path ="/register" component={registerPage}/>
            </Switch>
                </Layout>
          </Router>


        </React.Fragment>

    );
  }

}

export default App;
