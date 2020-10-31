import React from 'react'
import {NavLink} from 'react-router-dom'
import DOT_Logo_Transparent from '../images/DOT-Logo-Transparent.png'
import SignedInLinks from './auth/SignedInLinks'
import Navigation from './Navigation'
import {connect} from 'react-redux'

const Header = (props) => {
    const {auth, profile} = props;
    const link = auth.uid ? <SignedInLinks profile={profile}/> : null;
    const navigation = auth.uid ? <Navigation/> : null;

    return(
        <div className="header">
            <div className="flex justify-between bg-palette-1 w-full px-4 py-2">
                <div className="invisible">
                    {auth.isLoaded && link}
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <NavLink to="/">
                            <img src={DOT_Logo_Transparent} alt="DOT-Logo" width="150"/>
                        </NavLink>
                    </div>

                    {auth.isLoaded && navigation}
                </div>
                <div>
                    {auth.isLoaded && link}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header);