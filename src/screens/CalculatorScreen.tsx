import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    positiveNegative,
    btnDelete,
    btnDividir,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    getNumber,
    calcular,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultadoPequeno}>{previousNumber}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.fila}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="7" action={getNumber} />
        <ButtonCalc text="8" action={getNumber} />
        <ButtonCalc text="9" action={getNumber} />
        <ButtonCalc text="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="4" action={getNumber} />
        <ButtonCalc text="5" action={getNumber} />
        <ButtonCalc text="6" action={getNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="1" action={getNumber} />
        <ButtonCalc text="2" action={getNumber} />
        <ButtonCalc text="3" action={getNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="0" ancho action={getNumber} />
        <ButtonCalc text="." action={getNumber} />

        <ButtonCalc text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
// gris #2D2D2D
// naranja #FF9427
