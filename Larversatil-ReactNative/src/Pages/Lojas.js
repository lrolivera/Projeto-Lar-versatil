import React from 'react';
import {KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


export default function Lojas () {
  

  return (

      <View style={styles.container} >
         <View style={styles.card} >
          <Text style={styles.text}>Rio de Janeiro</Text>
          <Text style={styles.text}>10° andar</Text>
          <Text style={styles.text}>Centro</Text>
          <Text style={styles.text}>(21) 3333-3333</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.text}>São Paulo</Text>
          <Text style={styles.text}>Avenida Paulista, 985</Text>
          <Text style={styles.text}>3° andar</Text>
          <Text style={styles.text}>Jardins</Text>
          <Text style={styles.text}>(11) 9999-9999</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.text}>Santa Catarina</Text>
          <Text style={styles.text}>Rua Major &Aacute;vila, 370</Text>
          <Text style={styles.text}>Vila Mariana</Text>
          <Text style={styles.text}>(47) 5555-5555</Text>
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
    borderRadius: 40,
    width: '50%',
    height: 180,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
})

