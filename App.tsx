/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Camera, CameraType} from 'expo-camera';
import React from 'react';
import {Dimensions, SafeAreaView, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF11130'}}>
      <StatusBar />
      <Camera
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('window').height,
        }}
        type={CameraType.back}
        useCamera2Api={false}
      />
    </SafeAreaView>
  );
}

export default App;
