import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntIcon from "react-native-vector-icons/AntDesign";


export default function Login({navigation}) {
    const handleLogin = () => {
        navigation.navigate('Home')
    }
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity style={styles.button}>
        <AntIcon name='google' style={{fontSize:35 }}/>
        <Text  onPress={handleLogin} style={{paddingLeft:10}}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    button : {
        paddingHorizontal:30,
        paddingVertical:20,
        backgroundColor:'orange',
        borderRadius:5,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        
    }
})