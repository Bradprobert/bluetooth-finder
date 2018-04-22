import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';

import {MainNavigator} from './app/navigators';
import store from './app/store'

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}