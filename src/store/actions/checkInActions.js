export const createCheckIn = (checkIn) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('checkIns').add({
            ...checkIn,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CHECKIN', checkIn});
        }).catch((error) => {
            dispatch({ type: 'CREATE_CHECKIN_ERROR', error});
        })
    }
}