import React, { PureComponent } from 'react';
import { PushNotificationIOS, Platform, AppState } from 'react-native';


export default class PushNotificationSetting extends PureComponent {
  constructor(props) {
    super(props);
    this._onRemoteNotification = this._onRemoteNotification.bind(this)
  }
  componentWillMount(){
    PushNotificationIOS.addEventListener('register', this._onRegistered);
    PushNotificationIOS.addEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.addEventListener('notification', this._onRemoteNotification);

    PushNotificationIOS.requestPermissions()
  }
  componentWillUnmount(){
    PushNotificationIOS.removeEventListener('register', this._onRegistered);
    PushNotificationIOS.removeEventListener('registrationError', this._onRegistrationError);
    PushNotificationIOS.removeEventListener('notification', this._onRemoteNotification);
  }
  _onRegistered(deviceToken) {
    console.log("PushNotificationSetting", deviceToken);
  }

  _onRegistrationError(error) {
    console.log(error.code, error.message);
  }
  _onRemoteNotification(notification) {
    const result = `Message: ${notification.getMessage()};\n
      badge: ${notification.getBadgeCount()};\n
      sound: ${notification.getSound()};`;
    console.log(result);
  }
  render() {
    return this.props.children;
  }

}
