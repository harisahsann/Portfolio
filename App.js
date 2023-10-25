import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from './NewScreen';
import Chat from './Chat';
import Books from './Books';
import movies from './movies';


import { StyleSheet, View, TextInput, Button, Text, Alert, Image } from 'react-native';

const Stack = createStackNavigator();

function Signup({ navigation }) {

    const onPressSignUp = () => {
        Alert.alert("Sign Up button pressed!");
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('./sohaib.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Welcome to Sohaib Zahid</Text>
            <Text style={styles.title}>Signup</Text>

            <TextInput
                placeholder="Username"
                style={styles.input}
            />
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
                    title="Signup" 
                    onPress={onPressSignUp} 
                    color="#0077B6" 
                />
            </View>
            <Text style={styles.linkText}>
                Already have an account? 
                <Text style={styles.link} onPress={() => navigation.navigate('NewScreen')}> Login</Text>
            </Text>
            <Text style={styles.linkText}>
                Go To the Chat Scrren
                <Text style={styles.link} onPress={() => navigation.navigate('Chat')}> Chat </Text>
            </Text>
            <Text style={styles.linkText}>
                Go To the Movies Scrren
                <Text style={styles.link} onPress={() => navigation.navigate('movies')}> Movies </Text>
            </Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="NewScreen" component={NewScreen} />
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="Books" component={Books} />
                <Stack.Screen name="movies" component={movies} />

                <Stack.Screen 
      name="Ali" 
      component={Chat}
      options={{
        headerShown:false
      }}
    />
            </Stack.Navigator>
        </NavigationContainer>
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
