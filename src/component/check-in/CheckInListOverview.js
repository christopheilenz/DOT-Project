import React from 'react'
import { NavLink } from 'react-router-dom'
import CheckInSummary from './CheckInSummary'

const CheckInListOverview = ({checkIns}) => {
    return(
        <div className="CheckInListOverview">
            <div className="mt-4 w-full flex flex-col mb-8">
                <div className="mx-4 mt-4 text-2xl text-gray-800 max-x pb-4 border-b-2 border-palette-2 border-opacity-50">
                    <p>All activities from today</p>
                </div>
                <div className=" mx-4 mt-8 grid grid-cols-4 gap-4 justify-items-auto">
                    { checkIns && checkIns.map(checkIn => {
                        return (
                            <NavLink to={"/check-in/" + checkIn.id} key={checkIn.id}>
                                <CheckInSummary checkIn={checkIn}/>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CheckInListOverview;