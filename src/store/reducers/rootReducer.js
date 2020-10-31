import authReducer from './authReducer'
import checkInReducer from './checkInReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducers = combineReducers({
    auth: authReducer,
    checkIn: checkInReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducers;