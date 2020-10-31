import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        
        return (
            <div className="SignIn">
                <div className="mt-32 flex justify-center">
                    <div className="w-full max-w-md bg-transparent">
                        <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 py-8 pt-8">
                            <h1 className="text-2xl text-palette-2 font-bold flex justify-center mb-4">Sign In</h1>

                            <div className="px-4 pb-4">
                                <label htmlFor="email" className="text-sm block font-bold  pb-2  text-palette-1">E-Mail Address:</label>
                                <input onChange={this.handleChange} type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="maxmustermann@example.com"/>
                            </div>

                            <div className="px-4 pb-4">
                                <label htmlFor="password" className="text-sm block font-bold pb-2  text-palette-1">Password:</label>
                                <input onChange={this.handleChange} type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter password ..."/>
                            </div>

                            <div className="px-4 pb-4 text-palette-1">
                                <button className="main-nav-active" type="submit">Sign In</button>
                            </div>

                            <div className="px-4 pb-4">
                                {authError ? <p className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-red-600">{authError}</p> : null}
                            </div>
                            
                            <div className="px-4 text-palette-1">
                                <p>Don&apos;t have an account yet? Go to <NavLink to="/signup" className="hyperlink">Sign Up</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);