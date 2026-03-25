import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import ActionButton from '../components/ActionButton';

type ResultScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
  route: RouteProp<RootStackParamList, 'Result'>
}

const maleImages: Record<string, any> = {
  'Magreza': require('../../assets/images/Male1.png'),
  'Abaixo do peso': require('../../assets/images/Male2.png'),
  'Peso ideal': require('../../assets/images/Male3.png'),
  'Sobrepeso': require('../../assets/images/Male4.png'),
  'Obesidade': require('../../assets/images/Male5.png'),
}

const femaleImages: Record<string, any> = {
  'Magreza': require('../../assets/images/Female1.png'),
  'Abaixo do peso': require('../../assets/images/Female2.png'),
  'Peso ideal': require('../../assets/images/Female3.png'),
  'Sobrepeso': require('../../assets/images/Female4.png'),
  'Obesidade': require('../../assets/images/Female5.png'),
}

export default function ResultScreen({ navigation, route }: ResultScreenProps) {

  const { name, gender, weight, height } = route.params;

  function calculateIMC(weight: number, height: number): number {
    const finalHeight = height / 100;
    return weight / (finalHeight * finalHeight)
  }

  const imc = calculateIMC(weight, height)

  function classifyIMC(): string {
    if (imc < 16) return 'Magreza' 
    if (imc < 18.5) return 'Abaixo do peso'
    if (imc < 25) return 'Peso ideal'
    if (imc < 30) return 'Sobrepeso'
    return 'Obesidade'
  }

  const classification = classifyIMC();
  const images = gender === 'male' ? maleImages : femaleImages
  const image = images[classification]

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
        <Text style={styles.name}>{name}</Text>

        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode='contain' />
        </View>

        <Text style={styles.resultLabel}>
          O resultado do IMC é: <Text style={styles.resultValue}>{imc.toFixed(2)}</Text>
        </Text>

        <View style={styles.buttonContainer} >
          <ActionButton
            title='Recalcular IMC'
            onPress={() => navigation.goBack()}
          />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 24,
  },
  resultValue: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultLabel: {
    fontSize: 17,
    color: '#333',
    marginBottom: 8
  },
  image: {
    width: 240,
    height: 320,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});