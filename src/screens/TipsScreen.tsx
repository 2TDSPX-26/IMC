import { View, StyleSheet, ScrollView, Text } from "react-native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import TipCard from "../components/TipCard";

import { Ionicons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

const tips = [
    {
        id: 1,
        title: 'Hidratação',
        description: 'Beba água ao longo do dia para ajudar no bom funcionamento do organismo.',
        icon: <Ionicons name='water-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 2,
        title: 'Alimentação equilibrada',
        description: 'Prefira alimentos naturais e evite excesso de produtos ultraprocessados.',
        icon: <MaterialCommunityIcons name='food-apple-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 3,
        title: 'Atividade física',
        description: 'Procure praticar exercícios regularmente, com orientação adequada.',
        icon: <FontAwesome5 name="dumbbell" size={24} color="#F0A81F" />,
    },
    {
        id: 4,
        title: 'Sono de qualidade',
        description: 'Dormir bem ajuda no equilíbrio do corpo e na manutenção da saúde.',
        icon: <Ionicons name='moon-outline' size={28} color='#F0A91F' />,
    },
    {
        id: 5,
        title: 'Acompanhamento profissional',
        description: 'Sempre que possível, consulte médico ou nutricionista para orientações personalizadas.',
        icon: <Ionicons name='medkit-outline' size={28} color='#F0A91F' />,
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

                <Text style={styles.sectionTitle}>Hábitos recomendados</Text>

                {tips.map(item => (
                    <TipCard key={item.id} tip={item}/>
                ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 14,
    },
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
