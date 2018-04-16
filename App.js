/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import tabNav from './components/tabnav';

export default App = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Drawer Item 1",
            icon: ({ tintColor }) => <Icon name="rocket" size={24}/>
        }
    }
})


// export default class App extends Component<Props> {
//   render() {
//     return (
//       <drawerNav/>
//     );
//   }
// }
