import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, Image } from 'react-native';


export default function LoginScreen({ navigation }) {

    const onPressLogin = () => {
        Alert.alert("Login button pressed!");
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('./sohaib.png')}
            
                style={styles.image}
            />
            <Text style={styles.title}>Welcome to Sohaib Zahid</Text>
            <Text style={styles.title}>Login</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <Button 
                    title="Login" 
                    onPress={onPressLogin} 
                    color="#0077B6" 
                />
            </View>

            <Text style={styles.linkText}>
                Don't have an account? 
                <Text style={styles.link} onPress={() => navigation.navigate('Signup')}> Signup</Text>
            </Text>
            
            <Text style={styles.linkText}>
    GO to Books Screen
    <Text style={styles.link} onPress={() => navigation.navigate('Books')}>Go to Books Screen</Text>
</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 75,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#444',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
    },
    linkText: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
    },
});
