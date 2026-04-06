import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome7 from '@expo/vector-icons/FontAwesome';
import FontAwesome8 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
      name="explore"
     options={{
      title: 'Armazém', // Mudei o título também, caso queira
      tabBarIcon: ({ color }) => (
      <FontAwesome5 name="warehouse" size={24} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="telafinal" // ou o nome que preferir para essa rota
  options={{
    title: 'Check-in', // Título que aparece abaixo do ícone
    tabBarIcon: ({ color }) => (
      <FontAwesome6 name="calendar-check" size={24} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="agendamento" // Nome da rota
  options={{
    title: 'Agenda', // Título que aparece na aba
    tabBarIcon: ({ color }) => (
      <FontAwesome5 name="calendar-day" size={24} color={color} />
    ),
  }}
/>
<Tabs.Screen
  name="listagem-doutores" // Nome da rota
  options={{
    title: 'lista', // Título que aparece na aba
    tabBarIcon: ({ color }) => (
      <FontAwesome6 name="rectangle-list" size={24} color={color}  />
    ),
  }}
/>
    </Tabs>
  );
}
