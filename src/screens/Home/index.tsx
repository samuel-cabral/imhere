import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Bobô', 'Ronaldo', 'Rivaldo', 'Cafu', 'Roberto Carlos', 'Dida', 'Ronaldinho', 'Kaká', 'Edmílson', 'Lúcio', 'Juninho Pernambucano', 'Gilberto Silva', 'Ricardinho', 'Denílson', 'Luizão', 'Vampeta', 'Roque Júnior', 'Júnior', 'César Sampaio', 'Marcos'];

  function handleParticipantAdd() {
    if (participants.includes('Ronaldo')) {
      return Alert.alert('Participante já existe', 'Ronaldo já está na lista de participantes.');
    }
    console.log('Você adicionou um participante!');
  }

  function removeParticipant(name: string) {
    Alert.alert(`Você removeu o participante ${name}!`);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de participantes?`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Remover',
        onPress: () => removeParticipant(name)
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quarta, 14 de fevereiro</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardAppearance="dark"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={participant => participant}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />

    </View>
  );
}