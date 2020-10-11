import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from '../components/stopWatch';

export class TimerHome extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center'}}>
            <StopWatch></StopWatch>
        </View>);
    }
}