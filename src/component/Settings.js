import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { setSettings } from '../store/actions/settingsAction'

class Settings extends Component {
    // state = {
    //     street: "",
    //     city: "",
    //     zip: "",
    //     location: "",
    //     floor: "",
    //     room: "",
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     });
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.settings(this.state);
    // }

    render() {
        const { authError, auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        
        return (
            <div className="Settings">
                <div className="mt-32 flex justify-center">
                    <div className="w-full max-w-md bg-transparent">
                        <form className="bg-white shadow-md rounded px-8 py-8 pt-8">
                            <h1 className="text-2xl text-palette-2 font-bold flex justify-center mb-4">Settings</h1>

                            <div className="border-b border-palette-1">
                                <div id="personalInfo" className="border-b-2 border-palette-2">
                                    <div className="px-4 pb-4">
                                        <label htmlFor="street" className="text-sm block font-bold  pb-2  text-palette-1">Street:</label>
                                        <input type="street" id="street" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter your street..."/>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <label htmlFor="city" className="text-sm block font-bold  pb-2  text-palette-1">City:</label>
                                        <input type="city" id="city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter you city..."/>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <label htmlFor="zip" className="text-sm block font-bold  pb-2  text-palette-1">ZIP:</label>
                                        <input type="zip" id="zip" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter your zip code..."/>
                                    </div>
                                </div>

                                <div id="officeInfo" className="mt-4">
                                    <div className="px-4 pb-4">
                                        <label htmlFor="location" className="text-sm block font-bold  pb-2  text-palette-1">Office Location:</label>
                                        <input type="location" id="location" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="e.g. Münster"/>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <label htmlFor="floor" className="text-sm block font-bold pb-2  text-palette-1">Floor:</label>
                                        <input type="floor" id="floor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter your office floor..."/>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <label htmlFor="room" className="text-sm block font-bold pb-2  text-palette-1">Room Number:</label>
                                        <input type="room" id="room" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-palette-1" placeholder="enter your room number..."/>
                                    </div>

                                    <div className="px-4 pb-4 text-palette-1">
                                        <button className="main-nav-active" type="submit">Save</button>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-4">
                                {authError ? <p className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-red-600">{authError}</p> : null}
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setSettings: (settings) => dispatch(setSettings(settings))
//     }
// }

export default connect(mapStateToProps)(Settings);