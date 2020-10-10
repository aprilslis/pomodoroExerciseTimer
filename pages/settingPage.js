import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from '../components/stopWatch';


export class SettingPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View >
                <Text>Settings</Text>
                <StopWatch />
            </View>);
    }
}