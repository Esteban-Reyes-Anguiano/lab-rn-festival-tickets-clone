import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from './src/styles/Colors';
import Info from './src/components/Info';


function App(): JSX.Element {
  return (
    <SafeAreaView 
    style={{ backgroundColor: colors.primary, flex: 1  }}
    >
      <StatusBar 
      backgroundColor={colors.primary} 
      />
      <Info />
    </SafeAreaView>
  );
}


export default App;