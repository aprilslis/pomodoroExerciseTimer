import AsyncStorage from '@react-native-community/async-storage';

const streakKey = 'streak';

function formatTime(time){
    if(Number(time) >= 10) return time;
    else "0" + time;
}
export async function getStreakData(defaultVal = null){
    const value = await AsyncStorage.getItem(streakKey)
    if(value) {
    return JSON.parse(value);
    }
    return {streak:0,lastCompletionDate:""};
}
export async function resetStreak(){
    let value = await getStreakData();
    value.streak = 0;
    AsyncStorage.setItem(streakKey,JSON.stringify(value));
}
export async function increaseStreak(){
    let value = await getStreakData();
    value.streak += 1;
    let curDate = new Date();
    value.lastCompletionDate = curDate.toDateString() + " at " + formatTime(curDate.getHours()) + " : " + formatTime(curDate.getMinutes());
    AsyncStorage.setItem(streakKey,JSON.stringify(value));
} 