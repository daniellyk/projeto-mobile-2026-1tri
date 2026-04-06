import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fullScreenBlue}>
          
          {/* Título original */}
          <Text style={styles.text}>Agendamentos!</Text>

          {/* Lista de Agendamentos (List Group) */}
          <View style={styles.listGroup}>
            
            <View style={styles.listGroupItem}>
              <Text style={styles.itemText}>Infecção do Trato Urinário (ITU)                    19:45 a 23:00</Text>
            </View>
            
            <View style={styles.listGroupItem}>
              <Text style={styles.itemText}>Pneumonia Hospitalar                               14:30 a 21:45</Text>
            </View>
            
            <View style={styles.listGroupItem}>
              <Text style={styles.itemText}>Infecção de Sítio Cirúgico                         16:00 a 22:00</Text>
            </View>
            
            <View style={styles.listGroupItem}>
              <Text style={styles.itemText}>Infecção da Corrente Sanguínea                     13:00 a 18:00</Text>
            </View>
            
            {/* O último item não recebe a borda inferior */}
            <View style={[styles.listGroupItem, styles.lastItem]}>
              <Text style={styles.itemText}>Câncer (Pulmão/Brônquios/Traqueia)                  15:00 a 20:00</Text>
            </View>

          </View>
          <SafeAreaProvider>
          
    </SafeAreaProvider>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', 
  },
  fullScreenBlue: {
    flex: 1,               
    backgroundColor: '#203298',
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',    
    padding: 20, // Um espaçamento interno para os itens não colarem nas bordas
  },
  text: {
    color: 'white',        
    fontSize: 24, // Aumentei um pouco para destacar como título
    fontWeight: 'bold',
    marginBottom: 20, // Espaço entre o título e a lista
  },
  // Estilos da lista baseados no Bootstrap
  listGroup: {
    alignSelf: 'stretch', // Faz a lista ocupar toda a largura disponível
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 6,
    overflow: 'hidden', 
    backgroundColor: '#fff', // Fundo branco para contrastar com o fundo azul da tela
  },
  listGroupItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  lastItem: {
    borderBottomWidth: 0, 
  },
  itemText: {
    fontSize: 16,
    color: '#212529',
  },
});

export default ViewBoxesWithColorAndText;
