import React, {Component} from 'react';
import { Pages } from 'react-native-pages';
import {Text, StyleSheet, Image,  TouchableNativeFeedback, View} from 'react-native';
import { Clabel, Cbutton } from '../../components/Customize'
// import tabScreen from '../tabScreen';


class Introduction extends Component {
  constructor(props) {
    super(props);
  };
  
  // startMainTabs = () => {
	// 	tabScreen();
  // };
  startMainTabs = () => {
    this.props.navigator.pop();
    this.props.navigator.push({
        screen: "hack.signupscreen",
        title: 'Sign-Up',
        backButtonHidden: true,
        navigatorStyle: {navBarHidden: true},
    });
  };
  render() {
    return (
      <Pages indicatorColor='#B86381'>
        <View style={[styles.container,{ flex: 1, backgroundColor: '#FFFF' }]}>
          <View style={styles.pages}>
            <Text style={styles.textTitle}>modo</Text>
            <Text style={styles.textSlogan}>- meet me online, date me offline -</Text>
            <Image
              style={{width: 120, height: 120,margin:20}}
              source={require('../../assets/logo.png')}
            />
            <View>
              <Text style={[styles.textStyle,{paddingBottom:20}]}>A dating APP exclusively for Christians who are willing, able and ready for a serious relationship for marriage</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* Exclusive for Christians.</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* Willing, able, and ready for a serious relationship.</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* For Marriage.</Text>
            </View>
          </View>
        </View>
        <View style={[styles.container,{ flex: 1, backgroundColor: '#FFFF' }]}>        
          <View style={styles.pages}>
            <View>
              <Text style={[styles.textStyle,{paddingBottom:20}]}>A dating APP exclusively for Christians who are willing, able and ready for a serious relationship for marriage</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* Exclusive for Christians.</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* Willing, able, and ready for a serious relationship.</Text>
              <Text style={[styles.textStyle, {textAlign: "left"}]}>* For Marriage.</Text>
            </View>
          </View>
        </View>
        <View style={[styles.container,{ flex: 1, backgroundColor: '#FFFF' }]}>
          <View style={[styles.pages]}>
              <View style={{height:"80%",justifyContent: "center"}}>
                <Text style={[styles.textStyle,{paddingBottom:20}]}>A dating APP exclusively for Christians who are willing, able and ready for a serious relationship for marriage</Text>
                <Text style={[styles.textStyle, {textAlign: "left"}]}>* Exclusive for Christians.</Text>
                <Text style={[styles.textStyle, {textAlign: "left"}]}>* Willing, able, and ready for a serious relationship.</Text>
                <Text style={[styles.textStyle, {textAlign: "left"}]}>* For Marriage.</Text>
              </View>
              <View style={{height:"20%",width: "60%"}}>
                <TouchableNativeFeedback onPress={() => { this.startMainTabs()}}>
                  <View style={{ width: "90%",backgroundColor:'#eee',alignItems: "center",borderRadius: 10,padding:15,borderColor:'#000',borderWidth:1}}>
                    <Text style={{ fontSize: 20,}}>Getting Started</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
        </View>
      </Pages>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pages: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold"
  },
  textSlogan: {
    fontSize: 10,
    fontWeight: "normal"
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "normal"
  }
});

export default Introduction;