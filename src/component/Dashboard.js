import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import icon_calendar from '../images/icon_calendar.png'
import icon_checkIn from '../images/icon_checkIn.png'
import icon_plan from '../images/icon_plan.png'
import icon_settings from '../images/icon_settings.png'
import CheckInList from './check-in/CheckInList'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { checkIns, auth , profile} = this.props;

        if(!auth.uid) return <Redirect to="/signin"/>

        return(
            <div className="dashboard">
                <div className="mt-4 w-full flex flex-col mb-8">
                    <div className="max-w mx-4 pb-4 border-b-2 border-palette-2 border-opacity-50 flex items-center justify-between">
                        <div>
                            <p className="pb-1 text-xl text-gray-800">Hello <strong className="underline text-palette-2 text-2xl">{profile.firstName} {profile.lastName}</strong> - Welcome to .DOT!</p>
                            <p className="text-lg text-gray-800">You can choose between the following applications:</p>
                        </div>
                    </div>

                    <div id="menu" className="mt-10 flex flex-row px-40 pb-10 mx-4 border-b-2 border-palette-2 border-opacity-50">
                        <div className="w-1/4 px-8">
                            <NavLink to="/overview">
                                <div className="shadow hover:shadow-2xl hover:border-4 hover:border-gray-500 transition duration-500 h-full ml-6 pt-1 p-8 border-b-4 border-palette-2 rounded-lg flex flex-col items-center bg-white">
                                    <div className="flex-shrink-0 mt-8">
                                        <img className="h-32" src={icon_plan} alt="Office Floor-Plan"/>
                                    </div>
                                    <div className="mt-20">
                                        <h4 className="text-center text-xl text-gray-800 leading-tight">Overview</h4>
                                        <p className="text-center text-base text-gray-600 leading-normal">e.g. check who is in the office today</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        
                        <div className="w-1/4 px-10">
                            <NavLink to="/check-in">
                                <div className="shadow hover:shadow-2xl hover:border-4 hover:border-gray-500 transition duration-500 h-full ml-6 pt-1 p-8 border-b-4 border-palette-2 rounded-lg flex flex-col items-center bg-white">
                                    <div className="flex-shrink-0 mt-8">
                                        <img className="h-32" src={icon_checkIn} alt="Check-In"/>
                                    </div>
                                    <div className="mt-20">
                                        <h4 className="text-center text-xl text-gray-900 leading-tight">Check-In</h4>
                                        <p className="text-center text-base text-gray-600 leading-normal">e.g. you want to work remote today</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        
                        <div className="w-1/4 px-10">
                            <NavLink to="/calendar">
                                <div className="shadow hover:shadow-2xl hover:border-4 hover:border-gray-500 transition duration-500 h-full ml-6 pt-1 p-8 border-b-4 border-palette-2 rounded-lg flex flex-col items-center bg-white">
                                    <div className="flex-shrink-0 mt-8">
                                        <img className="h-32" src={icon_calendar} alt="Calendar"/>
                                    </div>
                                    <div className="mt-20">
                                        <h4 className="text-center text-xl text-gray-900 leading-tight">Calendar</h4>
                                        <p className="text-center text-base text-gray-600 leading-normal">e.g. plan where to work for the whole week</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className="w-1/4 px-10">
                            <NavLink to="/user-settings">
                                <div className="shadow hover:shadow-2xl hover:border-4 hover:border-gray-500 transition duration-500 h-full ml-6 pt-1 p-8 border-b-4 border-palette-2 rounded-lg flex flex-col items-center bg-white">
                                    <div className="flex-shrink-0 mt-8">
                                        <img className="h-32" src={icon_settings} alt="Settings"/>
                                    </div>
                                    <div className="mt-20">
                                        <h4 className="text-center text-xl text-gray-900 leading-tight">Settings</h4>
                                        <p className="text-center text-base text-gray-600 leading-normal">e.g. edit profile</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="pb-5 flex justify-center">
                        <CheckInList checkIns={checkIns}/>
                    </div>
                </div>
                
                <footer className="flex flex-col items-center">
                    <p>Copyright &copy; 2019 .DOT - Desk Organisation Tool</p>
                </footer>
            </div>
        );
    }
}

const mapStateToProps= (state) => {
    return{
        checkIns: state.firestore.ordered.checkIns,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'checkIns', limit: 3}
    ])
)(Dashboard);