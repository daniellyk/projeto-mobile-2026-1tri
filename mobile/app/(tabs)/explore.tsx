import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      {/*fundo da aplicação*/}
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


          {/* linha */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            {/* círculo do ícone*/}
            <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, flex: 0.2 }} />
           
            {/* blocos do texto onde vai ficar as funções*/}
            <View style={{ flex: 0.7, paddingHorizontal: 15 }}>
              <View style={{ height: 15, backgroundColor: 'white', width: '80%', marginBottom: 8 }} />
              <View style={{ height: 10, backgroundColor: '#FFFFFF66', width: '100%' }} />
            </View>


            {/* círculo do lado para colocar a seta */}
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
  }
});


export default ViewBoxesWithColorAndText;


