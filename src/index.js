import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, fbConfig)
    )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const rrfProps = {
   firebase,
   config: fbConfig,
   config: profileSpecificProps,
   dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}; 
    
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
