import React, { Component } from 'react';

import { View, Text, Button, Image, StyleSheet } from 'react-native';


export default function Main({ navigation }) {
    function navigateToHome() {
        navigation.navigate('Home');
    }
    function navigateToAbout (){
        navigation.navigate('About');
    }
    function navigateToHowtoUse (){
        navigation.navigate('HowtoUse');
    }
    
    return (
        <View style={Styles.Container}>
            <View style={{}}>
                <Image style={{ height: 200, width: 200 }} source={require('../img/ic_launcher_foreground.png')} />
            </View>
            <View style={Styles.Buttons}>
                <Button  title="How To Use" color="gray" onPress={navigateToHowtoUse} />
            </View>
            <View style={Styles.Buttons}>
                <Button title="About" color="gray" onPress={navigateToAbout} />
            </View>
            <View style={{ marginTop: 300 }}>
                <Button title="CONECTAR" color="gray" onPress={navigateToHome} />
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