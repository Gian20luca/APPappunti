import React, {useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Style} from './FormCss';
export const FormComponent = (props) => {
  const [parole, setParole] = useState('');
  const handleSubmit = () => {
      props.counter(pre=>pre+1)
    props.handleSubmit(parole);
    setParole('');
  };



  return (
    <View style={Style.container}>
      <TextInput
        style={Style.InputText}
        value={parole}
        placeholder="Insert Text..."
        onChangeText={(value) => setParole(value)}
      />
      <View style={Style.Viewbutton}>
       <Button title="Add" color="orange" disabled={!parole} onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};
