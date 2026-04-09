import { View, Text, StyleSheet } from 'react-native'

type Tip = {
    id: number
    title: string
    description: string
    icon: React.ReactNode
}

type TipCardProps = {
    tip: Tip
}

export default function TipCard({ tip }: TipCardProps) {
    return(
        <View style={styles.tipCard}>
            <View style={styles.iconContainer}>{tip.icon}</View>
            <View  style={styles.tipTextContainer}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    tipCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    },
    iconContainer: {
        width: 36,
        alignItems: 'center',
        marginRight: 14,
        marginTop: 2
    },
    tipTextContainer: {
        flex: 1
    },
    tipTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6
    },
    tipDescription: {
        fontSize: 15,
        color: '#6F6F6F',
        lineHeight: 22,
    }
})