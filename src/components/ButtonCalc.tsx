import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface TextoI {
  texto: string;
  color?: string;
  ancho?: boolean;
}

export const ButtonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
}: TextoI) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
