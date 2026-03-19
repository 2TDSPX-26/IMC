import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const [name, setName] = useState('')

  const goToResult = () => {
    navigation.navigate('Result')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user-alt" size={18} color="#333" style={styles.inputIcon} />
        <TextInput
          placeholder='Digite seu nome'
          placeholderTextColor="#CCC"
          value={name}
          onChangeText={setName}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
});