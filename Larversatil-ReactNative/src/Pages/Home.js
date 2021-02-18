import React from 'react';
import {KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


export default function Home () {
  

  return (

      <View style={styles.container} >
         <Text>Seja bem vindo (a) Lar Versátil</Text>

      </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
