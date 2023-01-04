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
    // no aceptar doble punto
    if (number.includes('.') && numberText === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // solo un punto decimal

      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero y hay un punto pueden entrar los demás numeros
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        //Evaluar si el num que entra es diferente de 0 y no tiene un punto se elimina 0
        // y entra el nuevo  num
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{previousNumber}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.fila}>
        <ButtonCalc texto="C" color="#9b9b9b" action={clean} />
        <ButtonCalc texto="+/-" color="#9b9b9b" action={positiveNegative} />
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
