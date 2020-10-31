import React from 'react'
import moment from 'moment'

const CheckInSummary = ({checkIn}) => {
    return(
        <div className="checkInSummary">
            <div className="max-w-sm rounded shadow ">
                <div className="px-6 py-4 flex flex-col justify-center items-center">
                    <div className="text-xl text-palette-1 font-bold flex justify-center mb-4">
                        {checkIn.title}
                    </div>

                    <p className="text-gray-700 text-base">
                        posted by {checkIn.authorFirstName} {checkIn.authorLastName}
                    </p>

                    <div className="px-6 pt-4 pb-2">
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {moment(checkIn.createdAt.toDate()).calendar()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckInSummary;