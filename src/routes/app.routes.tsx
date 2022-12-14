import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { Platform } from 'react-native';
import { FindPool } from '../screens/FindPool';

import { NewPool } from '../screens/NewPool';
import { PoolDetails } from '../screens/PoolDetails';
import { Pools } from '../screens/Pools';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        position: 'absolute',
        height: sizes[22],
        borderTopWidth: 0, 
        backgroundColor: colors.gray[800],
      }, 
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0,
      }
    }}>
      <Screen
        name='NewPool'
        component={NewPool}
        options={{
          tabBarLabel: 'Novo Bolão',
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={iconSize} />
        }}
      />
      <Screen
        name='Pools'
        component={Pools}
        options={{
          tabBarLabel: 'Meus Bolões',
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={iconSize} />,
        }}
      />
      <Screen
        name='FindPool'
        component={FindPool}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='PoolDetails'
        component={PoolDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}