import React, {Component, useEffect, useState} from 'react';
import {Text, View } from 'react-native';
import { getStreakData } from '../helper';

export function AchievementPage({navigation}){
    const [streakData,setStreak] = useState({streak:0,lastCompletionDate:""});
    useEffect(()=>{
        const subscription = navigation.addListener('focus', () => {
            getStreakData(streakData).then((value) =>{
                setStreak(value);
              });
        });
        return subscription; //unsubscribe on unmount
    })

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
            <Text>Achievement</Text>
            <Text>Streak: {streakData.streak}</Text>
            <Text>Last Completed Time: {streakData.lastCompletionDate}</Text>

        </View>
    );
}