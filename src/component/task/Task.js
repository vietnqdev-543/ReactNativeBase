import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView , SafeAreaView} from 'react-native';
import React from 'react'
import styles from './style'
export default function Task(props) {
  
  const index =props.index + 1
  const indexText = index < 10 ? `0${index}` : index
  const value = props.value

  return (
    <View>
      <TouchableOpacity onPress={props.handleDeleteTask}>
        <View style={styles.item}>
          <View style={[styles.box, index % 2 ? styles.bgColor1 : styles.bgColor2 ]}>
            <Text style={styles.index}>{indexText}</Text>
          </View>
          <Text style={styles.content}>{value}</Text>
        </View>
      </TouchableOpacity>
  </View>
  )
}

