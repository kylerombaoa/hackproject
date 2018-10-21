import React from 'react'
import {View, Text} from 'react-native'

export const Clabel = props => (    
	<View style={{width: "80%"}}>
        <Text style={{color: props.color, fontSize: props.size,}}>{props.text}</Text>
    </View>
);
export const Cbutton = props => (   
        <View style={{backgroundColor:'#546E7A',width: "80%",alignItems: "center",borderRadius: 5}}>
            <Text style={{color: props.color, fontSize: props.size,}}>{props.text}</Text>
        </View>
);

// <Clabel color="#FFFFFF" size={20} text="We believe technology can never replace the chemistry between two people."/>
//         <Clabel color="#FFFFFF" size={20} text="You will only know whether someone is right for you by taking that chance."/>
//         <Clabel color="#FFFFFF" size={20} text="At MODO we take back the dating experience where it really matters, in the real world, where the promise of true love happens."/>