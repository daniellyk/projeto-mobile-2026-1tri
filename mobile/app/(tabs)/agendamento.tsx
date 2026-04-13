import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  const router = useRouter();

  // Função para navegar até a página final com o horário selecionado
  const handleTimePress = (time: string) => {
    console.log(`Navegando com o horário: ${time}`);
    // Certifique-se que o arquivo de destino seja app/telafinal.tsx
    router.push({
      pathname: '/telafinal', 
      params: { selectedTime: time }
    });
  };

  const agendaData = [
    { id: 1, times: ["19:00", "19:45", "20:25", "21:00", "21:45", "22:25", "23:00"] },
    { id: 2, times: ["15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"] },
    { id: 3, times: ["16:00", "16:45", "17:25", "18:00", "18:45", "19:25", "20:00"] },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <Text style={styles.headerText}>Agendamentos!</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {agendaData.map((group) => (
              <View key={group.id} style={styles.listGroup}>
                <Text style={styles.groupTitle}>Escolha um horário:</Text>
                
                <View style={styles.timeGrid}>
                  {group.times.map((time, index) => (
                    <TouchableOpacity
                      key={`${group.id}-${index}`}
                      style={styles.timeButton}
                      onPress={() => handleTimePress(time)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.timeText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreenBlue: {
    flex: 1,
    backgroundColor: '#203298',
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listGroup: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeButton: { 
    backgroundColor: '#f0f2f5', 
    paddingVertical: 10, 
    paddingHorizontal: 12, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    minWidth: 75, 
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#203298',
    fontWeight: '600',
  },
});

export default ViewBoxesWithColorAndText;