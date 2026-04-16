import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function TabLayout() {
  const [estaLogado, setEstaLogado] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checarLogin = async () => {
      const token = await AsyncStorage.getItem('@token');
      
      if (!token) {
        // Se NÃO tem token, manda de volta para a tela de login
        router.replace('/'); 
        setEstaLogado(false);
      } else {
        setEstaLogado(true);
      }
    };

    checarLogin();
  }, []);

  // Enquanto verifica o token, mostra um carregando
  if (estaLogado === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2D43A6" />
      </View>
    );
  }

  // Se estiver logado, ele libera as abas (Tabs)
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="agendamento" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}