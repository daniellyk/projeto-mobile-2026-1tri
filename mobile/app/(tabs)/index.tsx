import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Platform } from 'react-native';




const login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Image  

 
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
      backgroundColor: '#203298',
      padding: 20,
  },
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  }
});


export default login;