import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>

        return (
            <div className="SignUp">
                <div className="mt-32 flex justify-center">
                    <div className="w-full max-w-md bg-transparent">
                        <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 py-8 pt-8">
                            <h1 className="text-2xl text-palette-2 font-bold flex justify-center mb-4">Sign Up</h1>

                            <div className="px-4 pb-4">
                                <label htmlFor="firstName" className="text-sm block font-bold pb-2 text-palette-1">First Name:</label>
                                <input onChange={this.handleChange} type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter first name ..."/>
                            </div>

                            <div className="px-4 pb-4">
                                <label htmlFor="lastName" className="text-sm block font-bold pb-2 text-palette-1">Last Name:</label>
                                <input onChange={this.handleChange} type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter last name ..."/>
                            </div>

                            <div className="px-4 pb-4">
                                <label htmlFor="email" className="text-sm block font-bold pb-2 text-palette-1">E-Mail Address:</label>
                                <input onChange={this.handleChange} type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="maxmustermann@example.com"/>
                            </div>

                            <div className="px-4 pb-4">
                                <label htmlFor="password" className="text-sm block font-bold pb-2 text-palette-1">Password:</label>
                                <input onChange={this.handleChange} type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter password ..."/>
                            </div>

                            <div className="px-4 pb-4 text-palette-1">
                                <button className="main-nav-active" type="submit">Sign Up</button>
                            </div>
                            
                            <div className="px-4 pb-4">
                                {authError ? <p className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-red-600">{authError}</p> : null}
                            </div>

                            <div className="px-4 text-palette-1">
                                <p>Already have an account? Go to <NavLink to="/signin" className="hyperlink">Sign In</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);