import React from "react";
import {StackNavigator, TabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";

import SplashScreen from "../screens/SplashScreen";
import {colors} from "../constants/colors";
import {fonts} from "../constants/fonts";
import {fontSizes} from "../constants/fontSizes";
import {strings} from "../constants/strings";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import DeviceListScreen from "../screens/DeviceListScreen";
import MapViewScreen from "../screens/MapViewScreen";

export const MainNavigator = StackNavigator({
        loginFlow: {
            screen: StackNavigator({
                splash: {
                    screen: SplashScreen,
                    navigationOptions: {
                        header: null,
                    }
                },
                login: {
                    screen: LoginScreen,
                    navigationOptions: {
                        title: strings.appName,
                        headerStyle: {
                            backgroundColor: colors.primaryBlue,
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontFamily: fonts.appName,
                            fontSize: fontSizes.appName,
                        }
                    }
                },
                //forgotPassword: {screen: ForgotPasswordScreen}
            }),
            navigationOptions: {
                header: null,
            }
        },
        mainFlow: {
            screen: StackNavigator({
                home: {
                    screen: TabNavigator({
                            deviceListTab: {
                                screen: DeviceListScreen,
                                navigationOptions: {
                                    tabBarLabel: 'Device List',
                                }
                            },
                            mapViewTab: {
                                screen: MapViewScreen,
                                navigationOptions: {
                                    tabBarLabel: 'Map View',
                                }
                            },
                            settingsTab: {
                                screen: SettingsScreen,
                                navigationOptions: {
                                    tabBarLabel: 'Settings',
                                }
                            },
                        },
                        {
                            navigationOptions: ({navigation}) => ({
                                tabBarIcon: ({focused, tintColor}) => {
                                    const {routeName} = navigation.state;
                                    let icon;
                                    if (routeName === 'deviceListTab') {
                                        icon = <Icon name='list' size={25} color={tintColor}/>;
                                    } else if (routeName === 'settings') {
                                        icon = <Ionicon name={'ios-map'} size={25} color={tintColor}/>;
                                    } else if (routeName === 'settings') {
                                        icon = <Ionicon name={'ios-settings'} size={25} color={tintColor}/>;
                                    }

                                    return icon;
                                },
                            }),
                            tabBarOptions: {
                                activeTintColor: colors.primaryBlue,
                                inactiveTintColor: colors.lightGrey,
                                style: {
                                    backgroundColor: colors.white
                                },
                                indicatorStyle: {
                                    backgroundColor: colors.primaryBlue
                                }
                            }
                        }),
                    navigationOptions: {
                        title: strings.appName,
                        headerStyle: {
                            backgroundColor: colors.primaryBlue,
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontFamily: fonts.appName,
                            fontSize: fontSizes.appName,
                        }
                    },
                },
            }),
            navigationOptions: {
                header: null,
            }
        },
    },
);