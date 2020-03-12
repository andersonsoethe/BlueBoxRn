import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';

export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    
    render() {
        return (
            <View style={Styles.Container}>
                <View style={{}}>
                    <Image style={{ height: 200, width: 200 }} source={require('../img/ic_launcher_foreground.png')} />
                </View>
                <View>
                    <TextInput 
                        style={{height: 100, width:100, }}
                        placeholder='Basic Input'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        />
                </View>
                <View style={{ marginTop: 300 }}>
                    <Button title="Enviar" color="gray" />
                </View>
            </View>
        );
    }
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