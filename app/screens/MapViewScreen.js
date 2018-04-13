import React, {Component} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default class MapViewScreen extends Component {

    onGetLocatition = () => {
        currPosition = navigator.geolocation.getCurrentPosition();
        console.log(currPosition)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: 31.245709,
                             longitude:  -85.619063,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                />
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                    <Icon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>

            </View>
        );
    }
}