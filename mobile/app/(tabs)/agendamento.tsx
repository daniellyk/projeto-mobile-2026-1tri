import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import api from '../../services/api';

interface Medico {
  id: string;
  nome: string;
  especialidade: string;
}

const AgendamentoScreen = () => {
  const router = useRouter();
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState(true);

  const horariosPadrao = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  useEffect(() => {
    fetchMedicos();
  }, []);

  const fetchMedicos = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      
      const response = await api.get('/medicos', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setMedicos(response.data);
    } catch (error) {
      console.log("Erro ao buscar médicos:", error);
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    } finally {
      setLoading(false);
    }
  };

  const handleTimePress = (time: string, medicoNome: string) => {
    router.push({
      pathname: '/telafinal', 
      params: { selectedTime: time, doctorName: medicoNome }
    });
  };

  if (loading) {
    return (
      <View style={[styles.fullScreenBlue, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{color: 'white', marginTop: 10, textAlign: 'center'}}>Carregando médicos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <Text style={styles.headerText}>Agendamentos!</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {medicos.length > 0 ? (
              medicos.map((medico) => (
                <View key={medico.id} style={styles.listGroup}>
                  <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{medico.nome}</Text>
                    <Text style={styles.doctorSpecialty}>{medico.especialidade}</Text>
                  </View>
                  
                  <Text style={styles.groupTitle}>Horários disponíveis:</Text>
                  
                  <View style={styles.timeGrid}>
                    {horariosPadrao.map((time, index) => (
                      <TouchableOpacity
                        key={`${medico.id}-${index}`}
                        style={styles.timeButton}
                        onPress={() => handleTimePress(time, medico.nome)}
                      >
                        <Text style={styles.timeText}>{time}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))
            ) : (
              <Text style={{color: 'white', textAlign: 'center'}}>Nenhum médico encontrado.</Text>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  fullScreenBlue: { flex: 1, backgroundColor: '#2D43A6', padding: 20 },
  headerText: { fontSize: 26, color: 'white', fontWeight: 'bold', marginBottom: 25, textAlign: 'center' },
  listGroup: { backgroundColor: 'white', borderRadius: 16, padding: 18, marginBottom: 20, elevation: 4 },
  doctorInfo: { borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingBottom: 12, marginBottom: 12 },
  doctorName: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  doctorSpecialty: { fontSize: 14, color: '#2D43A6', fontWeight: '500' },
  groupTitle: { fontSize: 11, color: '#999', marginBottom: 12, fontWeight: 'bold', textTransform: 'uppercase' },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  timeButton: { backgroundColor: '#F4F6FF', paddingVertical: 10, width: '31%', borderRadius: 10, alignItems: 'center', marginBottom: 5 },
  timeText: { fontSize: 13, color: '#2D43A6', fontWeight: '700' },
});

export default AgendamentoScreen;