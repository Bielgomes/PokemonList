import React from "react"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../screens/Dashboard";
import { Favorites } from "../screens/Favorites";

import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { MasterTools } from "../screens/MasterTools";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#ABB4BD',
                tabBarActiveTintColor: '#555555',
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            <Screen
                name='Explore'
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />)
                }}
            />

            <Screen
                name='Favoritos'
                component={Favorites}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome 
                            name='heart'
                            size={size}
                            color={color}
                        />)
                }}
            />

            <Screen
                name='Ferramentas'
                component={MasterTools}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome5
                            name='dice-d20'
                            size={size}
                            color={color}
                        />)
                }}
            />
        </Navigator>
    )
}