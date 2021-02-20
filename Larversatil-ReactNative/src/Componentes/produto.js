import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Produto = ({ descricao, preco, precofinal, nomeprodutos}) => {
    return (
        <View style={styles.container}>
            <Text>{nomeprodutos}</Text>
            <Text>{descricao}</Text>
            <Text style={{textDecorationLine:'line-through', fontSize:10}}>R$ {preco}</Text>
            <Text style={{fontWeight:'bold', fontSize:20}}>R$ {precofinal}</Text>
        </View>
    )
}

export default Produto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    }
})