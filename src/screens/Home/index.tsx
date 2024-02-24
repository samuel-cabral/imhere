import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>(['Ronaldo']);
  const [newParticipant, setNewParticipant] = useState('');

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert('Participante já existe', `${name} já está na lista de participantes.`);
    }

    setParticipants((state) => [...state, name]);
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
          value={newParticipant}
          onChange={e => setNewParticipant(e.nativeEvent.text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(newParticipant)}>
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