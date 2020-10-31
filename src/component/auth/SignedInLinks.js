import React from 'react'
import { NavLink } from 'react-router-dom'
import icon_shutdown from '../../images/icon_shutdown.png'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
        <div className="signedInLinks">
            <ul className="flex justify-end items-center">
                <li className="text-palette-3 hover:text-white border rounded-full p-3 border-palette-3">
                    <a onClick={props.signOut} className="flex flex-col justify-center items-center">
                        <div>
                            <img src={icon_shutdown} alt="Log Out" width="30"/>
                        </div>
                        <p>Log Out</p>
                    </a>
                </li>
                <li className="rounded-full hover:text-white">
                    <NavLink to ="/">
                        <p className="rounded-full bg-palette-2 text-white text-3xl h-20 w-20 flex items-center justify-center">{props.profile.initials}</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);