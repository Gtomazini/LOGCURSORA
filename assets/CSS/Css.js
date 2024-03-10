import { StyleSheet } from 'react-native';


const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    button__home:{
      marginRight: 40,
    },
    darkbg:{
      backgroundColor:"#fff"
    },
    login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginTop: 5,
      marginBottom: 15,
      display: text
    }),
    login__form:{
      width: "80%"
    },
    login__input:{
      backgroundColor: "#EBEBEB",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },
    login__button:{
      padding: 12,
      backgroundColor: "#800000ff",
      alignSelf: "center",
      borderRadius:5
    },
    login__buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      color:"white"
    },
    login__logomarca:{
      marginBottom:10
    }
  });

  export {css};