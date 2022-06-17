
import {View,Text} from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cevir from "./views/cevir";
import Translate from "./views/translate";
import History from "./views/history";
import TransleteContextProvider from '../src/context/TranslateContext'
const Tab = createBottomTabNavigator();
function App() {
   return(
       <TransleteContextProvider>
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
              <Tab.Screen name="Tur->Ing" component={Cevir} />
              <Tab.Screen name="Ing->Tur" component={Translate} />
              <Tab.Screen name="History" component={History} />
          </Tab.Navigator>
      </NavigationContainer>
       </TransleteContextProvider>

   )
}
export default App
