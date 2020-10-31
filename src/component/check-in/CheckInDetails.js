import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { NavLink, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import moment from 'moment'

const CheckInDetails = (props) => {
    const {checkIn, auth} = props;
    if(!auth.uid) return <Redirect to="/signin"/>
    
    if (checkIn) {
        return(
            <div className="checkInDetails">
                <div className="mt-32 flex justify-center">
                    <div className="w-full max-w-md bg-transparent">
                        <div className="bg-white shadow-md rounded px-8 py-8 pt-8 ">
                            <div className="text-2xl text-palette-2 font-bold flex justify-center mb-4">
                                {checkIn.title}
                            </div>

                            <p className="text-gray-700 text-base border-2 rounded p-3">
                                <strong className="underline">Message:<br/></strong>
                                <div>{checkIn.message}</div>
                            </p>

                            <div className="mt-3 px-6 pt-4 pb-2 flex justify-center">
                                <p className="text-gray-700 text-base">
                                    posted by {checkIn.authorFirstName} {checkIn.authorLastName}
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <span className="bg-gray-200 px-3 py-1 text-sm font-semibold rounded-full text-gray-700 mr-2 mb-2">
                                    {moment(checkIn.createdAt.toDate()).calendar()}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <NavLink to="/overview">
                                <span className="bg-palette-2 px-6 py-3 text-lg font-semibold rounded-full text-white mr-2 mb-2">
                                    go back
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="loading">
                <p>loading CheckIn-Details...</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const checkIns = state.firestore.data.checkIns;
    const checkIn = checkIns ? checkIns[id] : null;
    return {
        checkIn: checkIn,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'checkIns'}
    ])
)(CheckInDetails);