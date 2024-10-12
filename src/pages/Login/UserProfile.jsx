
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export const UserProfile = () => {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo, {user.username}!</Text> {/* Substitua 'username' conforme a estrutura do seu objeto de usuário */}
            {/* Aqui você pode adicionar mais informações do usuário */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0', // ou qualquer cor que você desejar
        borderRadius: 8,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
