import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Platform } from 'react-native';




const login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Image  
 source={require('@/assets/images/image.png')}
  style={styles.imagemlocal}
 
/>
   
        <View style={styles.fullScreenBlue}>
          <Text style={styles.text}>MedClinic</Text>
       
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};




const styles = StyleSheet.create({
  imagemlocal: {




  },
  container: {
    flex: 1,
  },
  fullScreenBlue: {
    flex: 1,              
    backgroundColor: 'blue',
    alignItems: 'center' // centraliza horizontalmente
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'crimson text',
  }
});


export default login;