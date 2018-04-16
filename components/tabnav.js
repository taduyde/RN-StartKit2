/**
 * Created by tdde on 4/16/18.
 */
import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import stackNav from './StackNavigator';
import{ Text } from 'react-native'

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel: "Tab 1",
            tabBarIcon: ({ tintColor }) =>  <Text>Glass</Text>
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#222'
    }
})

export default tabNav;