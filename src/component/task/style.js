import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 6
  },
  box: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  index: {
    color: 'white',
    fontWeight: '800'
  },
  content: { 
    paddingHorizontal: 20, 
    marginRight: 20, 
    fontSize: 14 ,
    textTransform: 'capitalize',
  },
  bgColor1: { backgroundColor: '#4AD0F0' },
  bgColor2: { backgroundColor: '#42F44F' },
  
});

export default styles