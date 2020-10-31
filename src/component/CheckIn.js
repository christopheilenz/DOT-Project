import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {createCheckIn} from '../store/actions/checkInActions'

class CheckIn extends Component {
    state = {
        title: "",
        message: ""
    }

    handleClick = (e) => {
        let other = document.getElementById("radio3");
        let textField = document.getElementById("textField");

        if (other.checked) {
            textField.classList.remove("hidden");
            this.setState({
                message: textField.value
            })
        } else {
            textField.classList.add("hidden");
            this.setState({
                message: ""
            })
        }

        this.setState({
            title: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCheckIn(this.state);
        this.props.history.push("/");
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin"/>
        
        return (
            <div className="CheckIn">
                <div className="mt-32 flex justify-center">
                    <div className="w-full max-w-md bg-transparent">
                        <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 py-8 pt-8">
                            <h1 className="text-2xl text-palette-2 font-bold flex justify-center mb-4">Check-In</h1>
                            <h2 className=" text-palette-1 font-bold mb-4">Where do you work today?</h2>

                            <div className="pl-5">
                                <div className="flex items-center mr-4 mb-4">
                                    <input id="radio1" type="radio" name="radio" className="hidden" onClick={this.handleClick} value="I'm in the office today!"/>
                                    <label htmlFor="radio1" className="flex items-center cursor-pointer text-xl">
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"/>
                                        I'm in the office today!
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input id="radio2" type="radio" name="radio" className="hidden" onClick={this.handleClick} value="I'm working remote today!"/>
                                    <label htmlFor="radio2" className="flex items-center cursor-pointer text-xl">
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"/>
                                        I'm working remote today!
                                    </label>
                                </div>

                                <div className="flex items-center mr-4 mb-4">
                                    <input id="radio3" type="radio" name="radio" className="hidden" onClick={this.handleClick} value="Other"/>
                                    <label htmlFor="radio3" className="flex items-center cursor-pointer text-xl">
                                        <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"/>  
                                        Other, enter here:
                                    </label>
                                </div>

                                <textarea id="textField" onChange={this.handleChange} className="form-textarea p-1 mt-4 w-full shadow appearance-none border rounded hidden" rows="3" placeholder="e.g. if you are sick, on holiday or a business trip"/>
                            </div>
                            
                            <div className="mt-6 pl-2 text-palette-1">
                                <button className="main-nav-active" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createCheckIn: (checkIn) => dispatch(createCheckIn(checkIn))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);