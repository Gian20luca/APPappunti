import React from 'react';

import {FlatList, View, Text, Button} from 'react-native';
import {Style} from './ListCss';

export const ListComponent = (props) => {

    
  return (
    <View>
      <FlatList
        data={props.allParole}
        renderItem={({item}) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> {item.parola}</Text>
            <Text  style={Style.button} onPress={()=>props.delet(item.id)}>x</Text>
             
            
          </View>
        )}
        style={Style.flatList}
      />
    </View>
  );
};
