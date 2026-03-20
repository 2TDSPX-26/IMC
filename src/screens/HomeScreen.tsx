import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MeasureAdjuster from '../components/MeasureAdjuster';
import ActionButton from '../components/ActionButton';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}

const MALE_DEFAULT = require('../../assets/images/Male3.png')
const FEMALE_DEFAULT = require('../../assets/images/Female3.png')

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const [name, setName] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)

  const image = gender === 'male' ? MALE_DEFAULT : FEMALE_DEFAULT

  const calculateIMC = () => {
    navigation.navigate('Result', {
       name: name, 
       gender: gender, 
       weight: weight, 
       height: height
      })
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

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode='contain'/>
      </View>

      <View style={styles.genderRow}>
        <TouchableOpacity onPress={() => setGender('male')} activeOpacity={0.5}>
          <Text style={[
            styles.genderText,
            gender === 'male' && styles.genderActive
          ]}>
            Homem
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')} activeOpacity={0.5}>
          <Text style={[
            styles.genderText,
            gender === 'female' && styles.genderActive
          ]}>
            Mulher
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.measuresContainer}>
          <MeasureAdjuster
            type='height'
            value={height}
            onIncrement={() => setHeight((prev) => prev + 1)}
            onDecrement={() => setHeight((prev) => Math.max(10, prev - 1))}
          />
          <MeasureAdjuster
            type='weight'
            value={weight}
            onIncrement={() => setWeight((prev) => prev + 1)}
            onDecrement={() => setWeight((prev) => Math.max(1, prev - 1))}
          />
      </View>

      <View style={styles.buttonContainer}>
        <ActionButton
          title='Calcular IMC'
          onPress={calculateIMC}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  measuresContainer: {
    width: '100%',
    marginBottom: 20,
  },
  genderActive: {
    fontWeight: 'bold'
  },
  genderText: {
    fontSize: 18,
    color: "#F5A623",
    fontWeight: '400',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 260,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
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
    backgroundColor: '#FFF5E6',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
});