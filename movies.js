import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import useApiData from './GetApiHook.js';

export default function movies() {
    const [data, fetchData] = useApiData("https://reactnative.dev/movies.json");
    useEffect(() =>{
        fetchData();
},[])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <Image
                            style={styles.listImage}
                            source={require('./sohaib.png')}
                        />
                        <View style={styles.textContainer}>
                            <Text>{item.title}</Text>
                            <Text>{item.releaseYear}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
            {/* <TouchableOpacity style={styles.fetchButton} onPress={fetchData}>
                <Text>Fetch Data</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    listImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
    },
    fetchButton: {
        padding: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
    }
});
