import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#38BDF8',
        tabBarInactiveTintColor: '#94A3B8',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Entypo name="controller-jump-to-start" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="listagem-doutores"
        options={{
          title: 'lista',
          tabBarIcon: ({ color }) => <FontAwesome6 name="rectangle-list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="agendamento"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => <FontAwesome5 name="calendar-day" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="telafinal"
        options={{
          title: 'Check-in',
          tabBarIcon: ({ color }) => <FontAwesome6 name="calendar-check" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}