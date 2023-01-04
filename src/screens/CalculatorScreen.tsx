import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        <ButtonCalc texto="C" color="#9b9b9b" />
        <ButtonCalc texto="+/-" color="#9b9b9b" />
        <ButtonCalc texto="del" color="#9b9b9b" />
        <ButtonCalc texto="/" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="7" />
        <ButtonCalc texto="8" />
        <ButtonCalc texto="9" />
        <ButtonCalc texto="x" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="4" />
        <ButtonCalc texto="5" />
        <ButtonCalc texto="6" />
        <ButtonCalc texto="-" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="1" />
        <ButtonCalc texto="2" />
        <ButtonCalc texto="3" />
        <ButtonCalc texto="+" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="0" ancho />
        <ButtonCalc texto="." />

        <ButtonCalc texto="=" color="#FF9427" />
      </View>
    </View>
  );
};
// gris #2D2D2D
// naranja #FF9427
