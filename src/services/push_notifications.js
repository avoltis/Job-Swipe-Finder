import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'htpp://....'; // Backend api to save token

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    if (previousToken) {

    } else {
        let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if (status !== 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();

        // await axios.post(PUSH_ENDPOINT, { token: { token } }); need api endpoint first 
        AsyncStorage.setItem('pushtoken', token);
    }
};