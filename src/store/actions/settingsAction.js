// export const setSettings = (settings) => {
//     return(dispatch, getState, {getFirebase, getFirestore}) => {
//         const firestore = getFirestore();
//         const profile = getState().firebase.profile;

//         firestore.collection('settings').add({
//             ...settings,
//             street: profile.street,
//             city: profile.city,
//             zip: profile.zip,
//             location: profile.location,
//             floor: profile.floor,
//             room: profile.room
//         }).then(() => {
//             dispatch({type: 'SETTINGS_SAVE_SUCCESS', settings})
//         }).catch((error) => {
//             dispatch({type: 'SETTINGS_SAV_ERROR', error})
//         })
//     }
// }