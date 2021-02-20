import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


import Input from '../Componentes/Input'
import Botton from '../Componentes/Botton'

export default function Login(password) {


  return (

    
    <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#ffc107','#faa632']}>
            <View style={styles.container}>
                <Text>E-mail</Text>
                <Input />
                <Text>Senha</Text>
                <Input   secureTextEntry={password}/>
                <Botton text='Entrar' />

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