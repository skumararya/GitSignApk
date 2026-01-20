import { TouchableOpacity, View } from 'react-native';
const index = ({navigation }) => {
  return (
    <View>
        <View>dashboard Page</View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {/* <MaterialIcons name="home" size={30} color="#000" /> */}
      </TouchableOpacity>
    </View>
    
  )
}

export default index
