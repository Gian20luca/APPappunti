import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {FormComponent} from './components/formComponent/FormComponent';
import {ListComponent} from './components/listComponent/ListComponent';
import {TitleComponent} from './components/titleComponent/TitleComponent';

const App = () => {
  const [allParole, setAllParole] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleSubmit = (parola) => {
    setAllParole((allParole) => {
      return [...allParole, {parola: parola, id: counter}];
    });
  };

  const delet = (id) => {
    setAllParole((preAllParole) => {
      return preAllParole.filter((items) => items.id !== id);
    });
  };

  console.log(allParole);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <TitleComponent />
      <FormComponent handleSubmit={handleSubmit} counter={setCounter} />
      <ListComponent allParole={allParole} delet={delet} />
    </ScrollView>
  );
};

export default App;
