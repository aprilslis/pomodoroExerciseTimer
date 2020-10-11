import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Style, Styles } from 'react-native';
import StopWatch from '../components/stopWatch';

export class TimerHome extends Component{
    constructor(){
        super();
        this.timerRef = React.createRef();
    }

    componentDidMount(){
        this.timerRef.current.addObserver(()=>console.log("notified"));
        //Usage:
        //The function will be call when the timer reach 0
        //this.timerRef.current.addObserver(functionName));
        
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
            <StopWatch ref={this.timerRef} startTime='5'> </StopWatch>
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