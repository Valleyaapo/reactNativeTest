import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyB92j1kirrxhvd3A-SEHTlk1JHtMKihK30',
            authDomain: 'manager-97838.firebaseapp.com',
            databaseURL: 'https://manager-97838.firebaseio.com',
            projectId: 'manager-97838',
            storageBucket: 'manager-97838.appspot.com',
            messagingSenderId: '491672485415'
          };
          
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {},
                      applyMiddleware(reduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
