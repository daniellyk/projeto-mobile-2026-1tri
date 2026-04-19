import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const AgendamentoScreen = () => {
  const router = useRouter();
  const { doctor } = useLocalSearchParams();
  const [especialidadeFiltro, setEspecialidadeFiltro] = useState('Todos');

  const especialidades = ['Todos', 'Cardiologia', 'Pneumologista', 'Ortopedista', 'Dermatologista', 'Neurologista'];
  const horariosPadrao = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const todosMedicos = [
    { nome: "Dr. Roberto Silva", crm: "CRM-12345-PR", especialidade: "Cardiologia", local: "Hospital Santa Cruz", convenios: "Unimed, Amil, Particular" },
    { nome: "Dra. Ana Beatriz", crm: "CRM-98765-PR", especialidade: "Cardiologia", local: "Clínica Heart", convenios: "Sulamérica, Cassi, Bradesco" },
    { nome: "Dr. Marcos Pontes", crm: "CRM-45612-PR", especialidade: "Cardiologia", local: "Hospital do Coração", convenios: "Unimed, Particular" },
    { nome: "Dra. Julia Meirelles", crm: "CRM-11223-PR", especialidade: "Dermatologista", local: "Centro Skin Care", convenios: "Unimed, Particular, Sanepar" },
    { nome: "Dr. Fabio Junior", crm: "CRM-33445-PR", especialidade: "Dermatologista", local: "Clínica Derma", convenios: "Amil, Particular" },
    { nome: "Dra. Leticia Spiller", crm: "CRM-55667-PR", especialidade: "Dermatologista", local: "Hospital Iguaçu", convenios: "Cassi, Bradesco, Unimed" },
    { nome: "Dr. Ricardo Arona", crm: "CRM-77889-PR", especialidade: "Pneumologista", local: "Clínica Pulmonar", convenios: "Todas as Redes" },
    { nome: "Dra. Sandra Rosa", crm: "CRM-99001-PR", especialidade: "Pneumologista", local: "Hospital da Respiração", convenios: "Unimed, Particular" },
    { nome: "Dr. Marlus Machado", crm: "CRM-11916-PR", especialidade: "Pneumologista", local: "Hospital Iguaçu", convenios: "Sulamérica, Unimed, Particular" },
    { nome: "Dr. Rodrigo Minotauro", crm: "CRM-22334-PR", especialidade: "Ortopedista", local: "Instituto de Fraturas", convenios: "Unimed, Amil, Sanepar" },
    { nome: "Dra. Amanda Ribas", crm: "CRM-44556-PR", especialidade: "Ortopedista", local: "Hospital do Esporte", convenios: "Cassi, Particular, Bradesco" },
    { nome: "Dr. Anderson Silva", crm: "CRM-66778-PR", especialidade: "Ortopedista", local: "Clínica Articular", convenios: "Unimed, Bradesco, Particular" },
    { nome: "Dr. Charles Xavier", crm: "CRM-88990-PR", especialidade: "Neurologista", local: "Centro de Neurociência", convenios: "Todas as Redes" },
    { nome: "Dra. Jean Grey", crm: "CRM-10112-PR", especialidade: "Neurologista", local: "Hospital Iguaçu", convenios: "Unimed, Amil, Particular" },
    { nome: "Dr. Stephen Strange", crm: "CRM-13141-PR", especialidade: "Neurologista", local: "Clínica Sanctum", convenios: "Particular, Sulamérica" },
  ];

  const medicosFiltrados = doctor
    ? todosMedicos.filter(m => m.nome === doctor)
    : (especialidadeFiltro === 'Todos'
      ? todosMedicos
      : todosMedicos.filter(m => m.especialidade === especialidadeFiltro));

  const selecionarHorario = (medico: any, horario: string) => {
    router.push({
      pathname: "/(tabs)/telafinal",
      params: { nome: medico.nome, hora: horario }
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          <Text style={styles.headerText}>
            {doctor ? 'Confirmar Horário' : 'Agendamentos!'}
          </Text>
          {!doctor && (
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
          )}
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            {medicosFiltrados.map((medico, index) => (
              <View key={index} style={styles.listGroup}>
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
                  <Text style={[styles.detailTitle, { marginTop: 10 }]}>Local de atendimento:</Text>
                  <Text style={styles.detailText}>{medico.local}</Text>
                </View>
                <View style={styles.divider} />
                <Text style={styles.timePrompt}>Escolha um horário para {medico.nome}:</Text>
                <View style={styles.timeGrid}>
                  {horariosPadrao.map((time, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.timeButton}
                      onPress={() => selecionarHorario(medico, time)}
                    >
                      <Text style={styles.timeText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
            {doctor && (
              <TouchableOpacity onPress={() => router.setParams({ doctor: '' })} style={styles.backAllButton}>
                <Text style={styles.backAllText}>Ver todos os médicos</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  fullScreenBlue: { flex: 1, backgroundColor: '#2D43A6' },
  headerText: { fontSize: width * 0.05, color: 'white', fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  filterContainer: { marginBottom: 15, paddingLeft: 20 },
  filterButton: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.15)', marginRight: 10 },
  filterButtonActive: { backgroundColor: '#fff' },
  filterText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  filterTextActive: { color: '#2D43A6' },
  listGroup: { backgroundColor: 'white', borderRadius: 15, padding: 20, marginBottom: 20, elevation: 5 },
  doctorHeader: { flexDirection: 'row', marginBottom: 15 },
  avatarPlaceholder: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#E8ECF4' },
  headerInfo: { marginLeft: 15, flex: 1 },
  crmText: { fontSize: 5, color: '#999', fontWeight: 'bold' },
  doctorName: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  specialtyLabel: { fontSize: 13, color: '#2D43A6', fontWeight: 'bold' },
  detailsSection: { marginTop: 5 },
  detailTitle: { fontSize: 11, fontWeight: 'bold', color: '#444' },
  detailText: { fontSize: 11, color: '#666', lineHeight: 16 },
  divider: { height: 1, backgroundColor: '#f0f0f0', marginVertical: 15 },
  timePrompt: { fontSize: 13, color: '#555', fontWeight: '600', textAlign: 'center', marginBottom: 15 },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  timeButton: { backgroundColor: '#2D43A6', width: '31%', paddingVertical: 12, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  timeText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  backAllButton: { alignItems: 'center', marginTop: 10, marginBottom: 30 },
  backAllText: { color: 'white', textDecorationLine: 'underline', opacity: 0.8 }
});

export default AgendamentoScreen;