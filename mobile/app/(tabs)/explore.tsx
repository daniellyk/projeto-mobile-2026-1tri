import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewBoxesWithColorAndText = () => {
  const router = useRouter();

  const handlePress = (especialidade: string) => {
    router.push({
      pathname: "/(tabs)/listagem-doutores",
      params: { especialidade: especialidade }
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2D43A6' }}>
        
        <View style={styles.mainCard}>
          
          <View style={{ marginBottom: 30 }}>
            <View style={{ width: 30, height: 30, backgroundColor: '#FFFFFF33', borderRadius: 5 }} />
            <Text style={styles.title}>Bom Dia, Mateus!{"\n"}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Selecione a especialidade:</Text>

          <TouchableOpacity 
            style={styles.row} 
            onPress={() => handlePress('Cardiologista')}
            activeOpacity={0.7}
          >
            <Icon name="heart-pulse" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Cardiologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.row} 
            onPress={() => handlePress('Pneumologista')}
            activeOpacity={0.7}
          >
            <Icon name="lungs" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Pneumologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.row} 
            onPress={() => handlePress('Ortopedista')} 
            activeOpacity={0.7}
          >
            <Icon name="bone" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Ortopedista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.row} 
            onPress={() => handlePress('Dermatologista')}
            activeOpacity={0.7}
          >
            <Icon name="face-man" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Dermatologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.row} 
            onPress={() => handlePress('Neurologista')}
            activeOpacity={0.7}
          >
            <Icon name="brain" size={40} color="white" style={{ flex: 0.2 }} />
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <Text style={styles.name}>Neurologista</Text>
            </View>
            <Icon name="chevron-right" size={25} color="#FFFFFF99" style={{ flex: 0.1 }} />
          </TouchableOpacity>

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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 5,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ViewBoxesWithColorAndText;