import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';



export default function connect({navigation}){
    function navigateToHome() {
        navigation.navigate('Home');
    }   
    
        return (
            <View style={Styles.Container}>
                <Text>This is Connect</Text>
                <View style={{ marginTop: 300 }}>
                <Button title="Go to home" color="gray" onPress={navigateToHome} />
            </View>
            </View>
        );
    
}


const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    Buttons: {
        padding: 10,
    },


});