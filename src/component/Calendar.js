import React, {Component, useState} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Calendar from 'react-calendar'
import { render } from '@testing-library/react'

class CalendarView extends Component {
    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render() {
        const {auth} = this.props;

        if(!auth.uid) return <Redirect to="/signin"/>
        return(
            <div className="Calendar">
                <div className="mt-32 flex justify-center items-center ">
                    <div className="react-calendar">
                        <div>
                            <Calendar onChange={this.onChange} value={this.state.date} className="border border-palette-1 p-3 rounded shadow-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps= (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(CalendarView);