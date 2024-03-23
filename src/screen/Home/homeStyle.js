import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom:15,
        flex: 1,
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      textTitle: {
        fontSize: 30,
        color: 'black',
        fontWeight: '800',
        marginVertical:20
      },
})

export default styles