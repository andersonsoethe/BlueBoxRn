import React, { Component } from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';

import { BleManager } from 'react-native-ble-plx';

// export default function connect({navigation}){
//     function navigateToHome() {
//         navigation.navigate('Home');
//     }    
//         return (
//             <View style={Styles.Container}>
//                 <Text>This is Connect</Text>
//                 <View style={{ marginTop: 300 }}>
//                 <Button title="Go to home" color="gray" onPress={navigateToHome} />
//             </View>
//             </View>
//         );

// }

export default class connect extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.navigateToHome = this.navigateToHome.bind(this);
    this.navigateToError = this.navigateToError.bind(this);
    this.manager = new BleManager();
    this.state = { info: "", values: {} }
    this.prefixUUID = "0180200A"
    this.suffixUUID = "C0-B5-D7-ED-E7-3C"
    this.sensors = {
      "Is connected": "Enable",
    }
  }

  navigateToHome() {
    console.log("test");
    this.props.navigation.navigate('Home');
  }

  navigateToError() {
    console.log("test");
    this.props.navigation.navigate('ErrorPage');
  }

  serviceUUID(num) {
    return this.prefixUUID + num + "0" + this.suffixUUID
  }

  notifyUUID(num) {
    return this.prefixUUID + num + "1" + this.suffixUUID
  }

  writeUUID(num) {
    return this.prefixUUID + num + "2" + this.suffixUUID
  }

  info(message) {
    this.setState({ info: message })
  }

  error(message) {
    this.setState({ info: "ERROR: " + message })
  }

  updateValue(key, value) {
    this.setState({ values: { ...this.state.values, [key]: value } })
  }

  componentWillMount() {
    if (Platform.OS === 'Android') {
      this.manager.onStateChange((state) => {
        if (state === 'PoweredOn') this.scanAndConnect()
      })
    } else {
      this.scanAndConnect()
    }
  }
  scanAndConnect() {
    this.manager.startDeviceScan(null,
      null, (error, device) => {
        this.info("Scanning...")
        console.log(device)

        if (error) {
          this.error(error.message)
          return
        }

        if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
          this.info("Connecting to TI Sensor")
          this.manager.stopDeviceScan()
          device.connect()
            .then((device) => {
              this.info("Discovering services and characteristics")
              return device.discoverAllServicesAndCharacteristics()
            })
            .then((device) => {
              this.info("Setting notifications")
              return this.setupNotifications(device)
            })
            .then(() => {
              this.info("Listening...")
            }, (error) => {
              this.error(error.message)
            })
        }
      });


  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>{this.state.info}</Text>
        {Object.keys(this.sensors).map((key) => {
          return <Text key={key}>
            {this.sensors[key] + ": " + (this.state.values[this.notifyUUID(key)] || "-")}
          </Text>
        })}
        <View style={Styles.Buttons}>
          <Button title="Go to home" color="gray" onPress={this.navigateToHome} />
        </View>
        <View style={Styles.Buttons}>
          <Button title="Go to error" color="gray" onPress={this.navigateToError} />
        </View>
        
      </View>

    )
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
    alignItems: 'center',
    justifyContent: 'center',

  },


});

