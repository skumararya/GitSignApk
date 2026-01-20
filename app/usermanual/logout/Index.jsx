import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
const Index = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
    // 👉 Clear any saved user/session here if needed (AsyncStorage, Redux, etc.)
    navigation.navigate("Login");
  };

  return (
    <>
    <TouchableOpacity onPress={handleLogout}>
        <Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default Index
