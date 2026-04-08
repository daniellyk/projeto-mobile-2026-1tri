import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // biblioteca de ícones

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      {/* fundo da aplicação */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2D43A6' }}>
       
        {/* card da interface */}
        <View style={styles.mainCard}>
         
          {/* header */}
          <View style={{ marginBottom: 30 }}>
            <View style={{ width: 30, height: 30, backgroundColor: '#FFFFFF33', borderRadius: 5 }} /> {/* Simulando Ícone Menu */}
            <Text style={styles.title}>Bom Dia, Fulano{"\n"}</Text>
            <Text style={styles.subtitle}>....dnweibfiwbgbi</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Insira qual consulta deseja realizar:</Text>

          {/* linha 1 - Cardiologista */}
          <View style={styles.row}>
            <Icon name="heart-pulse" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Cardiologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </View>

          {/* linha 2 - Pneumologista */}
          <View style={styles.row}>
            <Icon name="lungs" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Pneumologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </View>

          {/* linha 3 - Ortopedista */}
          <View style={styles.row}>
            <Icon name="bone" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Ortopedista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </View>

          {/* linha 4 - Dermatologista */}
          <View style={styles.row}>
            <Icon name="face-man" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Dermatologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

{/* CSS do react */}
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ViewBoxesWithColorAndText;
