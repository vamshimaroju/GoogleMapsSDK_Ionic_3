# GoogleMapsSDK_Ionic_3
Google Maps SDK for Ionic Framework 3


In order to use Google Maps in ionic app, first we need to generate API key from Google Developer Console. Which you can follow the instructions by following link(https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/api_key/generate_api_key.md).

After generating the API key, now you can install Google Maps SDK for ionic, by following command.

For Android Device,
 $> ionic cordova plugin add cordova-plugin-googlemaps  --variable API_KEY_FOR_ANDROID="(API_KEY_FOR_ANDROID)" 
 
For IOS Device,
 $> ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_IOS="(API_KEY_FOR_IOS)"
 
 After Install Cordova Plugin run following command.
 
 $> npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
 
 
