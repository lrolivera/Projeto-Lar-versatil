import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import Input from '../Componentes/Input'
import Botton from '../Componentes/Botton'

export default function Login() {


  return (
    
    <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#ffc107','#faa632']}>
            <View style={styles.container}>
                 <Text>E-mail</Text>
                 <Input />
                 <Text>Senha</Text>
                 <Input />
                 <Botton />

            </View>
  </LinearGradient>
  );
 
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})