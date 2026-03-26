import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      {/* Adicione flex: 1 aqui para a SafeAreaView ocupar a tela toda */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#203298' }}>
        
        {/* Remova o height fixo e use flex: 1 para preencher o espaço */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Dr.Carlos Matheus</Text>
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;
