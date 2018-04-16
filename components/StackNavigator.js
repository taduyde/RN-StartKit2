/**
 * Created by tdde on 4/16/18.
 */

import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons';
import DetailScreen from './detail';
import MainScreen from './MainScreen';

const stackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: "Main",
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            ),
            headerStyle: {paddingRight: 10, paddingLeft: 10}
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default stackNav;