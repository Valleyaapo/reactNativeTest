import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD_38InOieAWIPN6mkyGJPvfxldpU5bZCw',
            authDomain: 'authentication-e25fe.firebaseapp.com',
            databaseURL: 'https://authentication-e25fe.firebaseio.com',
            projectId: 'authentication-e25fe',
            storageBucket: 'authentication-e25fe.appspot.com',
            messagingSenderId: '840030261542'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size='large' />
                    </View>
                );
                
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}
const windowHeight = Dimensions.get('window').height;
const styles = {
    
    spinnerStyle: {
        marginTop: windowHeight / 3
    }
};

export default App;
