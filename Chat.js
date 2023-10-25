import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,
    FlatList, Image
} from 'react-native';

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export default function Chat() {
  

  const navigation = useNavigation();

  const loginBtnPressed = () => {
   
    navigation.navigate('Chat')

  }
  useEffect(()=>{
    // Alert.alert('Array index Values', myArray[4].time)
  },[])

  var myArray = [
    {key:0, title:'Sohaib', msg:'AOA', time:getCurrentTime(), img:'', city:'LHR'},
    {key:1, title:'Ali', msg:'AOA', time:getCurrentTime(), img:'', city:'KH'},
    {key:2, title:'Akram', msg:'AOA', time:getCurrentTime(), img:'', city:'ISLB'},
    {key:3, title:'Tahir', msg:'AOA', time:'12:10', img:''},
    {key:4, title:'Akram', msg:'AOA', time:'12:10', img:'', city:'ISLB'},
    {key:5, title:'Akram', msg:'AOA', time:'12:10', img:'', city:'ISLB'},
    {key:6, title:'Akram', msg:'AOA', time:'12:10', img:'', city:'ISLB'},
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={myArray}
        renderItem={({item}) => 
        (
 <TouchableOpacity style={{flex:1, flexDirection:'row', height:80, marginBottom:30, backgroundColor:'lightgrey', alignItems:'center', justifyContent:'center'}}>
                            <View style={{flex:0.25}}>

    <Image
        style={{width: 66,
            height: 66, borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "red", marginLeft:10}}
        source={require('./sohaib.png')}
      />

                            </View>
                            <View style={{flex:0.50}}>
                            
                            <Text> {item.title} </Text>
                            <Text> {item.city} </Text>
                            <Text> {item.msg} </Text>

                            </View>
                            <View style={{flex:0.25}}>
                            <Text> {item.time} </Text>

                            </View>
            </TouchableOpacity>
        )
        }
        keyExtractor={item => item.id}
      />
      
      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{color:'white'}}>Go to Next.... </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
