import React, {Component} from 'react';
import {Font} from 'expo';
import {NavigationActions} from 'react-navigation';

import Splash from "../components/splash";

export default class SplashScreen extends Component {
    state = {
        fontLoaded: false,
        appLoaded: false
    };

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'Pathway Gothic One': require('../assets/fonts/Pathway_Gothic_One/PathwayGothicOne-Regular.ttf')
            });
        } catch(e) {
            console.log(e)
        }
        this.setState({fontLoaded: true});
        await setTimeout(() => {
            this.setState({appLoaded: true});
        }, 3000);
    }


    componentDidUpdate() {
        if (this.state.appLoaded) {
            this._navigateTo('login')
        }
    }

    _navigateTo = (routeName: string) => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName})]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <Splash fontLoaded={this.state.fontLoaded}/>
        )
    }
};