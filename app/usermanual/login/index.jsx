import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import HomeImage from '../assets/images/mainscreens/login.jpg';
import { useNavigation } from "@react-navigation/native";

const index = () => {

    const navigation = useNavigation(); 

  return (
   <View style={styles.container}>
               <TouchableOpacity onPress={() => navigation.replace("Drawerlayout")}>
                 {/* <Image source={HomeImage} style={styles.image}   resizeMode="contain"  /> */}
                 <Text>Login page</Text>
          </TouchableOpacity>  
           {/* <View style={{color:"#000",backgroundColor:'yellow',flex:1,width:'100%'}}>Hii</View>  */}
          </View>
  )
}

const styles = StyleSheet.create({
  container: {
//   flex: 1, // fills full screen
   alignItems: 'center',
   justifyContent: 'flex-start',
//    backgroundColor:'#000',


height:'100%',

  },
  image: { 
    // flex: 1,  
    width: '100%',   // full width
    height:'100%',
  },
 
});

export default index
