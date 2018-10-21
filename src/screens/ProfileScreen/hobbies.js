import React, {Component} from 'react';
import {TouchableNativeFeedback, StyleSheet, Text, ScrollView,View, TextInput} from 'react-native';
import startTab from '../tabScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  
  goTo = () => {
    this.props.navigator.pop();
    startTab()
    // this.props.navigator.push({
    //     screen: "hack.hobbiesscreen",
    //     title: 'Location',
    //     backButtonHidden: true,
    // });
  };
  render() {
    return (
      <View style={{height: "100%",alignItems: "center",backgroundColor: "#FFF", justifyContent: "center",paddingTop:10}}>
          <View style={{height: "85%",width: "100%",alignItems: "center"}}>
            <Text style={{textAlign:"left",paddingBottom: 20}}>Select atleast 3 category</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Sports</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Music</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Books</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Movies</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Bible</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Photography</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Health</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Technology</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Politics</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Foods</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Writting</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>DIY</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Sports</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Music</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Books</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Economy</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Fashion</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Science</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Business</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Celebrity</Text>
                <Text style={{textAlign:"center",borderColor: "#bbb", margin: 5,borderWidth:1,padding: 10,width: "27.5%"}}>Travel</Text>
            </View>
          </View>
          <View style={{width: "100%",alignItems:"center",height: "15%"}}>
            <TouchableNativeFeedback onPress={() => { this.goTo()}}>
              <View style={{ paddingTop: 10,width: "40%",backgroundColor:'#eee',alignItems: "center",padding:10,borderRadius: 10,borderColor:'#000',borderWidth:1}}>
                <Text style={{ fontSize: 20,}}>Done</Text>
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
