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
                    style={styles.title}>
                    Pomodoro Login
                </Text>
                <TextInput style={styles.text} placeholder='Email' />
                <TextInput style={styles.text} placeholder='Password' />
                <View style={{ margin: 10 }} />


                <TouchableHighlight
                    style={styles.button}>
                    <Button
                        color="Orange"
                        onPress={this.props.onLoginPress}
                        title="Submit"
                    />
                </TouchableHighlight>

            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },

    title: {
        fontSize: 36,
        fontFamily: 'sans-serif',
        color: 'orange',
        margin: 10,
        alignItems: 'center',
    },
    text: {
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        margin: 10,
        alignItems: 'center',

    },
    button: {
        height: 40,
        width: 160,
        borderRadius: 10,
        color: "orange",
        backgroundColor: "orange",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        alignItems: 'center',
    }
}); 
