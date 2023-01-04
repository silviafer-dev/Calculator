import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const getNumber = (numberText: string) => {
    setNumber(number + numberText);
  };
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{previousNumber}</Text>
      <Text style={styles.resultado}>{number}</Text>

      <View style={styles.fila}>
        <ButtonCalc texto="C" color="#9b9b9b" action={clean} />
        <ButtonCalc texto="+/-" color="#9b9b9b" action={clean} />
        <ButtonCalc texto="del" color="#9b9b9b" action={clean} />
        <ButtonCalc texto="/" color="#FF9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="7" action={getNumber} />
        <ButtonCalc texto="8" action={getNumber} />
        <ButtonCalc texto="9" action={getNumber} />
        <ButtonCalc texto="x" color="#FF9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="4" action={getNumber} />
        <ButtonCalc texto="5" action={getNumber} />
        <ButtonCalc texto="6" action={getNumber} />
        <ButtonCalc texto="-" color="#FF9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="1" action={getNumber} />
        <ButtonCalc texto="2" action={getNumber} />
        <ButtonCalc texto="3" action={getNumber} />
        <ButtonCalc texto="+" color="#FF9427" action={clean} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="0" ancho action={getNumber} />
        <ButtonCalc texto="." action={getNumber} />

        <ButtonCalc texto="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
// gris #2D2D2D
// naranja #FF9427
