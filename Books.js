import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';

const DATA = [
    
    { id: '1', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '2', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '3', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '4', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '5', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '6', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '7', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '8', title: 'کتاب کا نام',  image: require('./book.png') },
    { id: '9', title: 'کتاب کا نام',  image: require('./book.png') },

];

function Books() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Books</Text>
            <TextInput style={styles.searchInput} placeholder="Search Book Name" />
            <FlatList 
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.bookContainer}>
                        <Image source={item.image} style={styles.bookImage} />
                        <Text style={styles.bookTitle}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    searchInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
  
    bookImage: {
        width: 115,
        height: 185,
        margin: 5,
        resizeMode: 'contain'
    },
    bookTitle: {
        marginTop: 5,
        textAlign: 'center'
    }
});

export default Books;