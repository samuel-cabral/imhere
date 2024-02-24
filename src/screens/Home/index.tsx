import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  function handleParticipantAdd() {
    console.log('Você adicionou um participante!');
  }

  function handleParticipantRemove() {
    console.log('Você removeu um participante!');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

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

      <Participant name="Bobô" onRemove={handleParticipantRemove} />
    </View>
  );
}