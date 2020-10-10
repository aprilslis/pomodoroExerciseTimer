import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    TouchableHighlight
} from 'react-native';


export class LoginPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ScrollView style={{ padding: 20, }}>
                <Text
                    style={{ fontSize: 36,
                    fontFamily: 'sans-serif',
                    color:'orange',
                    margin: 10,
                    alignItems: 'center',}}>
                    Pomodoro Login
                </Text>
                <TextInput style={{
                    backgroundColor: "white",
                    paddingVertical: 12,
                    paddingHorizontal: 25,
                    borderRadius: 25,
                    margin: 10,
                    alignItems: 'center',
                }} placeholder='Username' />
                <TextInput style={{
                    backgroundColor: "white",
                    paddingVertical: 12,
                    paddingHorizontal: 25,
                    borderRadius: 25,
                    margin: 10,
                }} placeholder='Password' />
                <View style={{ margin: 10 }} />
            

                <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    color:"orange",
                    backgroundColor : "orange",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20,
                    alignItems: 'center',
                }}>
            <Button 
                    onPress={this.props.onLoginPress}
                    title="Submit"
                />
          </TouchableHighlight>

            </ScrollView>
        )
    }

}
/*
const styles = Stylesheet.create({
    button: {
        backgroundColor: "darkorange",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadisu: 25
    },
    buttonText: {
        color: "white",
        fontSize: 18
    },
});
*/

