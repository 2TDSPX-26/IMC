import { View, StyleSheet, ScrollView, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import TipCard from "../components/TipCard";

const tips = [
    {
        id: 1,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 2,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 3,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 4,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 5,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
]

type TipsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Tips'>;
  route: RouteProp<RootStackParamList, 'Tips'>
}

export default function TipsScreen({ navigation, route }: TipsScreenProps) {
    const { imc, classification } = route.params

    return(
        <View style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryLabel}>Seu IMC</Text>
                    <Text style={styles.imcValue}>{imc.toFixed(2)}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.summaryLabel}>Resultado</Text>
                    <Text style={styles.resultText}>{classification}</Text>
                </View>

                <Text>Hábitos recomendados</Text>

                {tips.map(item => (
                    <TipCard key={item.id} tip={item}/>
                ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF5E6',
    },
    container: {
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    summaryCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 28,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.1,
        textShadowRadius: 3,
        elevation: 1
    },
    divider: {
        height: 1,
        backgroundColor: '#E2DED8',
        marginVertical: 12
    },
    summaryLabel: {
        fontSize: 18,
        color: '#7A7A7A',
        textAlign: 'center',
        marginBottom: 10,
    },
    imcValue: {
        fontSize: 44,
        fontWeight: '800',
        color: '#333',
        textAlign: 'center'
    },
    resultText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 14,
    }
})
