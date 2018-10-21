/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableNativeFeedback, StyleSheet, Text, ScrollView,View, TextInput} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  goTo = () => {
    this.props.navigator.pop();
    this.props.navigator.push({
        screen: "hack.locationscreen",
        title: 'Location',
        backButtonHidden: true,
    });
  };
  render() {
    return (
      <ScrollView >
      <View style={{height: "100%",alignItems: "center",backgroundColor: "#FFF", justifyContent: "center",paddingTop:10}}>
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>First Name:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View>
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>Middle Name:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View>
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>Last Name:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View>
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>Email Address:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View> 
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>Gender:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View>   
          <View style={styles.fieldInput}>
            <Text style={{color: "#bbb",textAlign: "left"}}>Birthday:</Text>
            <TextInput
              style={styles.textInput}
              value=''
            />
          </View>
          <TouchableNativeFeedback onPress={() => { this.goTo()}}>
            <View style={{ paddingTop: 10,width: "40%",backgroundColor:'#eee',alignItems: "center",borderRadius: 10,padding:10,borderColor:'#000',borderWidth:1}}>
              <Text style={{ fontSize: 20,}}>Next</Text>
            </View>
          </TouchableNativeFeedback>  
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fieldInput: {
    backgroundColor: '#FFF',
    justifyContent: "center",
    marginBottom:10,
    width: "80%"
  },
  textInput: {
    borderBottomWidth: 5,
    borderBottomColor:"#555",
    width: "100%"
  }
});
