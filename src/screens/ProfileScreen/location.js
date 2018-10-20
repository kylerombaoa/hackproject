import React, {Component} from 'react';
import {TouchableNativeFeedback, StyleSheet, Text, ScrollView,View, TextInput} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  goTo = () => {
    this.props.navigator.pop();
    this.props.navigator.push({
        screen: "hack.hobbiesscreen",
        title: 'Location',
        backButtonHidden: true,
    });
  };
  render() {
    return (
      <View style={{height: "100%",alignItems: "center",backgroundColor: "#FFF", justifyContent: "center",paddingTop:10}}>
          <View style={{height: "85%",width: "100%",alignItems: "center"}}>
            <View style={styles.fieldInput}>
              <Text style={{textAlign: "left"}}>Country:</Text>
              <TextInput
                style={styles.textInput}
                value=''
              />
            </View>
            <View style={styles.fieldInput}>
              <Text style={{textAlign: "left"}}>Region:</Text>
              <TextInput
                style={styles.textInput}
                value=''
              />
            </View>
            <View style={styles.fieldInput}>
              <Text style={{textAlign: "left"}}>City:</Text>
              <TextInput
                style={styles.textInput}
                value=''
              />
            </View>
            <View style={styles.fieldInput}>
              <Text style={{textAlign: "left"}}>Street:</Text>
              <TextInput
                style={styles.textInput}
                value=''
              />         
            </View>  
          </View>
          <View style={{width: "100%",alignItems:"center",height: "15%"}}>
            <TouchableNativeFeedback onPress={() => { this.goTo()}}>
              <View style={{ paddingTop: 10,width: "40%",backgroundColor:'#eee',alignItems: "center",borderRadius: 10,padding:10,borderColor:'#000',borderWidth:1}}>
                <Text style={{ fontSize: 20,}}>Next</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
      </View>
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
