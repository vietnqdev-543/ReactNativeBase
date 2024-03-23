import { StyleSheet, Text, View, TextInput, TouchableOpacity , Keyboard , KeyboardAvoidingView, Platform} from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function form(props) {
    const [task, setTask] = useState('')
    
    const handleClick = () => {
         if(task === ''){
            alert('Please enter a task !!!')
            return false
         }else{
            props.handleAddTask(task)
            setTask('')
            Keyboard.dismiss()
         }
        
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
                value={task}
                style={styles.input} 
                placeholder='Enter text' 
                onChangeText={(text) => setTask(text)} 
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleClick}
            >
                <Text style={{ fontWeight: '800', color: 'white' }}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#4AD0F0',
        color: 'white',
        borderRadius: 50,
    },
    input: {
        height: 50,
        width: '82%',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        borderColor: '#4AD0F0',

    },
})