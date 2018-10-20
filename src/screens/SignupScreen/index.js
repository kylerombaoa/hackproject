import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableNativeFeedback, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 
export default class App extends Component {
  constructor(props) {
    super(props);
  };
  gotoProfileFilling = () => {
    this.props.navigator.pop();
    this.props.navigator.push({
        screen: "hack.personalscreen",
        title: 'Building Profile',
        backButtonHidden: true
    });
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={{height: "60%", alignItems: "center",justifyContent: "center"}}>
              <Image
                style={{width: 120, height: 120,margin:20}}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.textTitle}>modo</Text>
              <Text style={styles.textSlogan}>- meet me online, date me offline -</Text>
            </View>
            <View style={{height: "40%",width: "100%", alignItems: "center"}}>
                <Text>Sign up with</Text>
                <TouchableNativeFeedback onPress={() => this.gotoProfileFilling()} >
                    <View style={styles.socialButton}>
                        <Icon name="logo-facebook" size={20}/>
                        <Text> Continue with Facebook</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.gotoProfileFilling()} >
                    <View style={styles.socialButton}>
                        <Icon name="logo-google" size={20}/>
                        <Text> Sign in with Google</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  socialButton: {
    width: "80%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold"
  },
  textSlogan: {
    fontSize: 10,
    fontWeight: "normal"
  },
});
