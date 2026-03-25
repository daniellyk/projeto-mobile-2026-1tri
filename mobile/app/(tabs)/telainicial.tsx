import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      {/* O container principal é o fundo verde claro */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2D43A6' }}>
        
        {/* O "Card" Azul Principal */}
        <View style={styles.mainCard}>
          
          {/* Header Area */}
          <View style={{ marginBottom: 30 }}>
            <View style={{ width: 30, height: 30, backgroundColor: '#FFFFFF33', borderRadius: 5 }} /> {/* Simulando Ícone Menu */}
            <Text style={styles.title}>Good Morning{"\n"}David</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Our Health Services</Text>

          {/* Exemplo de Linha de Serviço usando seu modelo de flex */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            {/* Círculo do Ícone */}
            <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, flex: 0.2 }} />
            
            {/* Conteúdo de Texto */}
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <View style={{ height: 15, backgroundColor: 'white', width: '80%', marginBottom: 8 }} />
              <View style={{ height: 10, backgroundColor: '#FFFFFF66', width: '100%' }} />
            </View>

            {/* Checkmark lateral */}
            <View style={{ height: 25, width: 25, backgroundColor: '#FFFFFF33', borderRadius: 15, flex: 0.1 }} />
          </View>

         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <View style={{ height: 15, backgroundColor: 'white', width: '60%', marginBottom: 8 }} />
              <View style={{ height: 10, backgroundColor: '#FFFFFF66', width: '90%' }} />
            </View>
            <View style={{ height: 25, width: 25, backgroundColor: '#FFFFFF33', borderRadius: 15, flex: 0.1 }} />
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    backgroundColor: '#2D43A6', 
    marginTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#B0C4DE',
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF33',
    marginVertical: 25,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 25,
  }
});

export default ViewBoxesWithColorAndText;