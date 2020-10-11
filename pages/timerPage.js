import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from '../components/stopWatch';

export class TimerPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center', backgroundColor: '#F5FCFF'}}>
            <StopWatch></StopWatch>
        </View>);
    }
}