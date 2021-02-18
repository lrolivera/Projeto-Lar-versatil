import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'


const Botao = ({text}) => {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.p}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
  p: {
    color: "#fff"
  },


  button: {
    alignItems: 'center', 
    backgroundColor: "#3276b2", 
    paddingHorizontal: 80,
    paddingVertical: 20, 
    width: 95,
    borderRadius: 9,  
  }
})
