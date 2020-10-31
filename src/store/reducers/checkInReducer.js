const initState = {
    checkIns: []
}

const checkInReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_CHECKIN':
            console.log('created checkIn', action.checkIn);
            return state;
        case 'CREATE_CHECKIN_ERROR':
            console.log('create checkIn error', action.error);
            return state;
        default:
            return state;
    }
}

export default checkInReducer;