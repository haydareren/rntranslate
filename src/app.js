
import {View,Text} from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
function App() {
   return(

      <NavigationContainer>
          <Tab.Navigator
              screenOptions={{
                  tabBarIconStyle: { display: "none" },
                  tabBarLabelStyle: {
                      fontWeight: "700",
                      fontSize: 15
                  },
              }}
          >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
      </NavigationContainer>

   )
}
export default App
