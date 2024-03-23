
import React, { useState } from 'react';
import { StyleSheet, Text, View , ScrollView , Alert, TouchableOpacity} from 'react-native';
import Task from '../../component/task/Task'
import Form from '../../component/form/Form'
import styles from './homeStyle'
import AntIcon from "react-native-vector-icons/AntDesign";

export default function Home({navigation}) {
  const [taskList , setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }

  const handleDeleteTask = (index)=> {
    Alert.alert('Notification', 'You definitely want to delete the task', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        let taskListnow = [...taskList]
        taskListnow.splice(index , 1)
        setTaskList(taskListnow)
      }},
    ]);
  }
  return (
   
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}><AntIcon name='back' style={{fontSize:30}}/></TouchableOpacity>
    <Text style={styles.textTitle}>Todo List</Text>

    <ScrollView>
      {taskList.map((value , index) =>{
        return <Task index={index} value = {value} handleDeleteTask = {()=> {handleDeleteTask(index)}}/>
      })}
    </ScrollView>
      
        <Form handleAddTask = {handleAddTask}/>
    
  </View>
  );
}
