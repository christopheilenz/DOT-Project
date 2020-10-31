import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../store/actions/authActions'

const Navigation = () => {
    return(
        <div className="Navigation">
            <div className="ml-10 flex justify-center items-center space-x-4">
                <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">               Dashboard         </NavLink>
                <NavLink exact to="/overview" className="main-nav" activeClassName="main-nav-active">       Overview          </NavLink>
                <NavLink exact to="/check-in" className="main-nav" activeClassName="main-nav-active">       Check-In          </NavLink>
                <NavLink exact to="/calendar" className="main-nav" activeClassName="main-nav-active">       Calendar          </NavLink>
                <NavLink exact to="/user-settings" className="main-nav" activeClassName="main-nav-active">  Settings          </NavLink>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Navigation);