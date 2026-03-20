import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ActionButtonProps {
    title: string;
    onPress: () => void;
}

export default function ActionButton({ title, onPress }: ActionButtonProps) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F5A623',
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 40,
        alignItems: 'center',
        width: '100%',
        shadowColor: '#F5A623',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})