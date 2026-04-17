import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { 
  ActivityIndicator, 
  Alert, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Dimensions 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const AgendamentoScreen = () => {
  const [especialidadeFiltro, setEspecialidadeFiltro] = useState('Todos');

  const especialidades = ['Todos', 'Cardiologia', 'Pneumologista', 'Ortopedista', 'Dermatologista', 'Neurologista'];
  const horariosPadrao = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const todosMedicos = [
    // CARDIOLOGIA
    { id: 1, nome: "Dr. Roberto Silva", crm: "CRM-12345-PR", especialidade: "Cardiologia", local: "Hospital Santa Cruz", convenios: "Unimed, Amil, Particular" },
    { id: 2, nome: "Dra. Ana Beatriz", crm: "CRM-98765-PR", especialidade: "Cardiologia", local: "Clínica Heart", convenios: "Sulamérica, Cassi, Bradesco" },
    { id: 3, nome: "Dr. Marcos Pontes", crm: "CRM-45612-PR", especialidade: "Cardiologia", local: "Hospital do Coração", convenios: "Unimed, Particular" },
    
    // DERMATOLOGISTA
    { id: 4, nome: "Dra. Julia Meirelles", crm: "CRM-11223-PR", especialidade: "Dermatologista", local: "Centro Skin Care", convenios: "Unimed, Particular, Sanepar" },
    { id: 5, nome: "Dr. Fabio Junior", crm: "CRM-33445-PR", especialidade: "Dermatologista", local: "Clínica Derma", convenios: "Amil, Particular" },
    { id: 6, nome: "Dra. Leticia Spiller", crm: "CRM-55667-PR", especialidade: "Dermatologista", local: "Hospital Iguaçu", convenios: "Cassi, Bradesco, Unimed" },
    
    // PNEUMOLOGISTA
    { id: 7, nome: "Dr. Ricardo Arona", crm: "CRM-77889-PR", especialidade: "Pneumologista", local: "Clínica Pulmonar", convenios: "Todas as Redes" },
    { id: 8, nome: "Dra. Sandra Rosa", crm: "CRM-99001-PR", especialidade: "Pneumologista", local: "Hospital da Respiração", convenios: "Unimed, Particular" },
    { id: 9, nome: "Dr. Marlus Machado", crm: "CRM-11916-PR", especialidade: "Pneumologista", local: "Hospital Iguaçu", convenios: "Sulamérica, Unimed, Particular" },

    // ORTOPEDISTA
    { id: 10, nome: "Dr. Rodrigo Minotauro", crm: "CRM-22334-PR", especialidade: "Ortopedista", local: "Instituto de Fraturas", convenios: "Unimed, Amil, Sanepar" },
    { id: 11, nome: "Dra. Amanda Ribas", crm: "CRM-44556-PR", especialidade: "Ortopedista", local: "Hospital do Esporte", convenios: "Cassi, Particular, Bradesco" },
    { id: 12, nome: "Dr. Anderson Silva", crm: "CRM-66778-PR", especialidade: "Ortopedista", local: "Clínica Articular", convenios: "Unimed, Bradesco, Particular" },

    // NEUROLOGISTA
    { id: 13, nome: "Dr. Charles Xavier", crm: "CRM-88990-PR", especialidade: "Neurologista", local: "Centro de Neurociência", convenios: "Todas as Redes" },
    { id: 14, nome: "Dra. Jean Grey", crm: "CRM-10112-PR", especialidade: "Neurologista", local: "Hospital Iguaçu", convenios: "Unimed, Amil, Particular" },
    { id: 15, nome: "Dr. Stephen Strange", crm: "CRM-13141-PR", especialidade: "Neurologista", local: "Clínica Sanctum", convenios: "Particular, Sulamérica" },
  ];

  const medicosFiltrados = especialidadeFiltro === 'Todos' 
    ? todosMedicos 
    : todosMedicos.filter(m => m.especialidade === especialidadeFiltro);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <Text style={styles.headerText}>Agendamentos!</Text>

          <View style={styles.filterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {especialidades.map((esp) => (
                <TouchableOpacity 
                  key={esp} 
                  style={[styles.filterButton, especialidadeFiltro === esp && styles.filterButtonActive]}
                  onPress={() => setEspecialidadeFiltro(esp)}
                >
                  <Text style={[styles.filterText, especialidadeFiltro === esp && styles.filterTextActive]}>{esp}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            {medicosFiltrados.map((medico) => (
              <View key={medico.id} style={styles.listGroup}>
                <View style={styles.doctorHeader}>
                  <View style={styles.avatarPlaceholder} />
                  <View style={styles.headerInfo}>
                    <Text style={styles.crmText}>{medico.crm}</Text>
                    <Text style={styles.doctorName}>{medico.nome}</Text>
                    <Text style={styles.specialtyLabel}>{medico.especialidade}</Text>
                  </View>
                </View>

                <View style={styles.detailsSection}>
                  <Text style={styles.detailTitle}>+ Convênios atendidos:</Text>
                  <Text style={styles.detailText}>{medico.convenios}</Text>
                  
                  <Text style={[styles.detailTitle, { marginTop: 10 }]}>📍 Local de atendimento:</Text>
                  <Text style={styles.detailText}>{medico.local}</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.timePrompt}>Qual a melhor data e hora?</Text>
                <View style={styles.timeGrid}>
                  {horariosPadrao.map((time, idx) => (
                    <TouchableOpacity key={idx} style={styles.timeButton}>
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
  container: { flex: 1 },
  fullScreenBlue: { flex: 1, backgroundColor: '#2D43A6' },
  headerText: { fontSize: width * 0.07, color: 'white', fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  filterContainer: { marginBottom: 15, paddingLeft: 20 },
  filterButton: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.15)', marginRight: 10 },
  filterButtonActive: { backgroundColor: '#fff' },
  filterText: { color: '#fff', fontWeight: 'bold' },
  filterTextActive: { color: '#2D43A6' },
  listGroup: { backgroundColor: 'white', borderRadius: 15, padding: 15, marginBottom: 20, elevation: 4 },
  doctorHeader: { flexDirection: 'row', marginBottom: 15 },
  avatarPlaceholder: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#eee' },
  headerInfo: { marginLeft: 15, flex: 1 },
  crmText: { fontSize: 10, color: '#999', fontWeight: 'bold' },
  doctorName: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  specialtyLabel: { fontSize: 12, color: '#2D43A6', fontWeight: 'bold' },
  detailsSection: { marginTop: 5 },
  detailTitle: { fontSize: 11, fontWeight: 'bold', color: '#444' },
  detailText: { fontSize: 11, color: '#666', lineHeight: 15 },
  divider: { height: 1, backgroundColor: '#f0f0f0', marginVertical: 15 },
  timePrompt: { fontSize: 13, color: '#333', fontWeight: '600', textAlign: 'center', marginBottom: 10 },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  timeButton: { backgroundColor: '#2D43A6', width: '31%', paddingVertical: 10, borderRadius: 10, marginBottom: 8, alignItems: 'center' },
  timeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});

export default AgendamentoScreen;