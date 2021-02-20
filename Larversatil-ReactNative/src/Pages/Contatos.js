import React from 'react';
import {KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import Input from '../Componentes/Input'
import Botton from '../Componentes/Botton'

export default function Contatos () {




  return (

      <View style={styles.container} >
        <View style={styles.contato} >
          <Text style={styles.text}>Contato@larversatil.com</Text>
          <Text style={styles.text}>(11) 99999-9999</Text>
        </View>
          <View style={styles.card}>
            <Text>Nome:</Text>
            <Input />
            <Text>Mensagem:</Text>
            <Input />
            <Botton text='Enviar' />
          </View>

      </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffc107',
    borderRadius: 8,
    width: '80%',
    height: 250,
    marginTop: 100,
    paddingTop: 10,
    alignItems: 'center',
  },

  contato: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },

  text: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    padding: 15,
  }


})
