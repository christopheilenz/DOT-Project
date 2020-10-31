import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Header from './component/Header'
import Settings from './component/Settings'
import Calendar from './component/Calendar'
import CheckIn from './component/CheckIn'
import Overview from './component/Overview'
import CheckInDetails from './component/check-in/CheckInDetails'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <div className="bg-gray-300 font-sans h-screen">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/user-settings" component={Settings}/>
                    <Route path="/calendar" component={Calendar}/>
                    <Route path="/overview" component={Overview}/>
                    <Route exact path="/check-in" component={CheckIn}/>
                    <Route path="/check-in/:id" component={CheckInDetails}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
