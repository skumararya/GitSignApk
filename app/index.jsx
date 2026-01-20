import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fingerprinticon from '../assets/images/fingerprint-cricle.png';
import homemainimg from '../assets/images/splash-bg.png';
const Home = () => {
  // const router = useRouter()
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
    if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
    <ImageBackground source={homemainimg} style={styles.imgsection} resizeMode="cover" >
    <Text style={styles.homeheading}>Attendance Tracker</Text>
    {/* <MaterialIcons name="home" size={""} color={"#000"} /> */}
   <View style={styles.fingerprintwrap}>
    <Image source={fingerprinticon} style={styles.fingerprint}   resizeMode="contain"  />
    </View>
    </ImageBackground>
     
    <View style={styles.bottomSection}>
        <Text style={styles.h2}>Report To Work</Text>
        <Text style={styles.h1}>From Anywhere</Text>
        <Text style={styles.p}>
          Mobile Attendance Powered the user to clock in & out from anywhere using their mobile
        </Text>
         <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]} // gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.primaryButton}
      >
         {/* <Link href="/dashboard">
          <Text style={styles.buttonText}>
            Next
          </Text>
    </Link>  */}
    <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
    </LinearGradient> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills screen
    // alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:'45',
   
   },

fingerprintwrap: {
  position: "absolute",
  bottom: wp("-15%"),              // distance from bottom
  left: 0,
  right: 0,
  alignItems: "center",    // center horizontally
},
       fingerprint:{
width: wp("30%"),        // responsive size
  height: wp("30%"), 
   },
   bottomSection:{flex:1,alignItems:'center', justifyContent: 'flex-end',paddingBottom:40},
homeheading:{
  position:'relative',
  color:'#fff',
   fontSize:18,
   textTransform:'uppercase',
   fontWeight:600,
   paddingTop:15,
   paddingLeft:15,
  fontFamily: "Roboto_400Regular",
},

  imgsection:{
     height:hp('50%'),
     width:wp('100%'),
     position:"relative"
  },
  h2:{fontSize:18,color:'#ff7b00ff',marginTop:10,fontFamily: "Roboto_400Regular",},
  h1:{color:'#200094ff',marginTop:30,
   fontSize:28,
   textTransform:'uppercase',
   fontFamily: "Roboto_700Bold",
   fontWeight:600,},
  p:{fontSize:14,color:'#ccc',marginTop:20,marginBottom:15,paddingLeft:40,paddingRight:40,textAlign:'center',fontFamily: "Roboto_400Regular",},
   buttonText: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: "Roboto_400Regular",
    letterSpacing:5
  },
  primaryButton:{
     paddingVertical: 20,
    width: wp("90%"),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default Home
