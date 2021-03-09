import React from 'react';
import {View, Text} from 'react-native';
import { Styles } from './TitleCss';


export const TitleComponent = ()=>{
    return (
        <View style= {Styles.container}> 
            <Text style={Styles.title}>Note</Text>
        </View>
    )
}