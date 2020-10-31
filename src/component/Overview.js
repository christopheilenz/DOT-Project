import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import CheckInListOverview from './check-in/CheckInListOverview'

const Overview = (props) => {
    const {auth, checkIns} = props;
    if(!auth.uid) return <Redirect to="/signin"/>

    return(
        <div className="Overview">
            <div className="">
                <CheckInListOverview checkIns={checkIns}/>
            </div>
        </div>
    );
}

const mapStateToProps= (state) => {
    return{
        checkIns: state.firestore.ordered.checkIns,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'checkIns' }
    ])
)(Overview);