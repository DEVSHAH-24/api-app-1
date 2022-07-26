import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const url = "https://catfact.ninja/fact";

export default function App() {
  const [data,setData] = useState('');
  const [isLoadingData, setisLoadingData] = React.useState(false);

  function callonClick() {
    fetch(url)
      .then((response) =>
        response != null ? response.json() : "Check your network"
      )
      .then((r) => {
        setData(r);
      //  setisLoadingData(false);
      });
  }
  useEffect(()=> {
    callonClick();
  },[])

  
  return (
    <View style={styles.container}>
      <Text>{data.fact + " " + data.length}</Text>
      <Button title= "Refresh" onPress={callonClick}>
      </Button>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
