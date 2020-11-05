import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

export const Mahasiswa = (props) =>{
  const [hitung, pengatur] = useState(0)
  
  function updateCounter() {
    pengatur(hitung + 1);
  }
  function resetCounter(){
    pengatur(0);
  }

  return(
    <View>
      <Text>Halo nama saya, {props.name} !</Text>
      <Text>dan nrp saya = {props.nrp}</Text>
      <Text>klik : {hitung}</Text>
      <Button onPress={() => {updateCounter()}} title="Click Me"></Button>
      <Button onPress={() => {resetCounter()}} title="Reset Counter"></Button>
    </View>
  );
}