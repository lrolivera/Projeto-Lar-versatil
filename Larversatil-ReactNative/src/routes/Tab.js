import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Produtos from '../Pages/Produtos';
import Lojas from '../Pages/Lojas';
import Contatos from '../Pages/Contatos';





const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='Login' tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#4a5866',
      labelStyle: {fontSize: 20},
      style: {backgroundColor: '#ffc107', }

      
    }} >
      <routeTab.Screen name="Login" component={Login} />
      <routeTab.Screen name="Home" component={Home} />
      <routeTab.Screen name="Produtos" component={Produtos} />
      <routeTab.Screen name="Lojas" component={Lojas} />
      <routeTab.Screen name="Contatos" component={Contatos}/>
    </routeTab.Navigator>
  )
}


export default Tab
