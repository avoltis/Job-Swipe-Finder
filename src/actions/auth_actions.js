import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import { Facebook } from 'expo';

// AsyncStorage.setItem('fb_token',token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispoach an action saying fb login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token }); // save token to store to check for auth when app is running
  } else {
    // Start up FB Login procecss
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let result = await Facebook.logInWithReadPermissionsAsync(
    '1312106115609331',
    {
      permissions: ['public_profile']
    }
  );

  let { type, token } = result;

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
