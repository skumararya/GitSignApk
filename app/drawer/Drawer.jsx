import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from '../dashboard/index';
import Logout from '../usermanual/logout/Index';
const Drawercomponent = createDrawerNavigator();
const Drawer = () => {
  return (
    <Drawercomponent.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#2196f3",
      }}
    >
      <Drawercomponent.Screen name="Dashboard" component={Dashboard} />
      
      <Drawercomponent.Screen name="Logout" component={Logout} />
      {/* Add more Drawer Screens here */}
    </Drawercomponent.Navigator>
  )
}

export default Drawer
