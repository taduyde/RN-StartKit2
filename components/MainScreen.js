/**
 * Created by tdde on 4/16/18.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
                <Button title="Go to Detail" onPress={() => this.props.navigation.navigate("Detail")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MainScreen;