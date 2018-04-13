import React, {Component} from "react";
import {Text, View} from "react-native";
import {bleManager} from 'react-native-ble-plx';

export default class DeviceListScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to your device list!</Text>
            </View>
        );
    }
}