import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class SettingPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings</Text>
            </View>);
    }
}