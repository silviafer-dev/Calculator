import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
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

  const btnDelete = () => {
    // let negative = '';
    // let tempNumber = number;
    // if (number.includes('-')) {
    //   negative = '-';
    //   tempNumber = number.substring(1);
    // }

    // if (tempNumber.length > 1) {
    //   setNumber(negative + tempNumber.slice(0, -1));
    // } else {
    //   setNumber('0');
    // }

    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0');
    }
    // setNumber(number.slice(0, -1));
    setNumber(number.substring(0, number.length - 1));
  };

  const cambiarNumeroPorAnterior = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

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

        <ButtonCalc text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
// gris #2D2D2D
// naranja #FF9427
