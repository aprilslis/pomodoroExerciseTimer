import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Style, Styles } from 'react-native';
import StopWatch from '../components/stopWatch';

export class TimerHome extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'}}>
            <Image
                style={styles.logo}
                source={require('./tomato.jpg')}
            />
            <StopWatch> </StopWatch>
        </View>);
    }
}

const styles = StyleSheet.create({
    logo: {
      width: 400,
      height: 25,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });