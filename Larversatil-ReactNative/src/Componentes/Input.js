import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({  type, placeholder, ...props  }) => {
    return (
      <View style={styles.input}>
          <TextInput  keyboardType={type} {...props}  placeholder={placeholder} />
      </View>
    )
}

export default Input

const styles = StyleSheet.create({
  input: {
    padding: 15,
    width: '80%',
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: 'center',
    marginTop: 10, 
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 16,  
  }
})