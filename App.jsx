import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [Nota1, setNota1] = useState('');
  const [Nota2, setNota2] = useState('');
  const [media, setMedia] = useState(null);

  const calcularMedia = () => {
    const n1 = parseFloat(Nota1);
    const n2 = parseFloat(Nota2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Nota não válida");
      return;
    }

    const mediaCalculada = (n1 + n2) / 2;
    setMedia(mediaCalculada);
  };

  const verificarAprovacao = () => {
    if (media === null) {
      alert("Calcule primeiro sua média");
      return;
    }

    if (media >= 6) {
      alert("Você foi aprovado");
    } else {
      alert("Você foi reprovado");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sua média
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={Nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={Nota2}
        onChangeText={setNota2}
      />

    <Button
    title='Calcule a media'
    onPress={calcularMedia}
    />

    <Button
    title='Verifique aprovação'
    onPress={verificarAprovacao}/>
  {media !== null && <Text>Sua média é: {media}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: 200,
  },
});
