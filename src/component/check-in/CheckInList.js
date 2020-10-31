import React from 'react'
import { NavLink } from 'react-router-dom'
import CheckInSummary from './CheckInSummary'

const CheckInList = ({checkIns}) => {
    return(
        <div className="CheckInList">
            <div className="mx-4 mt-4 text-lg text-gray-800">
                <p>Recent Activities (the three latest activities):</p>
            </div>
            <div className="flex flex-row mx-4 mt-4 space-x-4">
                { checkIns && checkIns.map(checkIn => {
                    return (
                        <NavLink to={"/check-in/" + checkIn.id} key={checkIn.id}>
                            <CheckInSummary checkIn={checkIn}/>
                        </NavLink>
                    )
                })}

                <button className="self-center px-3 py-2 rounded-full text-sm font-medium text-white bg-palette-2">
                    <NavLink to="/overview">...view all</NavLink>
                </button>
            </div>
        </div>
    );
}

export default CheckInList;