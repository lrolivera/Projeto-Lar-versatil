import React from 'react';
import { View,  StyleSheet, FlatList } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import Produtos from '../../bd_produtos' 
import Produto from '../Componentes/produto'

const produtos = Produtos;
console.log(produtos)

const produ = () => {
  

  return (

        <View style={{flex:1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <Text style={styles.h1}>
                    Nossos produtos
                </Text>
            </View>
            <View style={styles.containerProdutos}>
                <FlatList 
                    data = {produtos}
                    keyExtractor={(item) => `${item.codprodutos}`}
                    renderItem={({item}) => (
                        <Produto 
                            descricao={item.descricao} 
                            preco={item.preco} 
                            precoVenda={item.precofina} 
                        />
                    )}
                />
            </View> 
        </View>
  )
}

export default produ

const styles = StyleSheet.create({
  container:{
      flex: '20%',
      alignItems: 'center',
  },
  h1: {
      fontSize: 30,
      margin:10,
      fontWeight: 'bold',
  },
  containerProdutos: {
      flex: '80%',
      alignItems: 'center',
  }
});
