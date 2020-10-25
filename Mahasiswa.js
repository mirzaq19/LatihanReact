import { React, useState } from 'react';
import {Text, View} from 'react-native';

export const Mahasiswa = (props) =>{
  const [counter, setCounter] = useState(0)
  
  function updateCounter() {
    setCounter(counter + 1);
  }

  return(
    <View>
      <Text>Halo nama saya, {props.name} !</Text>
      <Text>dan nrp saya = {props.nrp}</Text>
      <Text>klik : {counter}</Text>
      <Button onPress={() => {updateCounter()}} title="Click Me"></Button>
    </View>
  );
}