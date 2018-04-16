import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Click Me" onPress={() => this.props.navigation.navigate("Details") }/>
            </View>
        )
    }
}

export default HomeScreen;