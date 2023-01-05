import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
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

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.dividir:
        if (previousNumber === '0') {
          return;
        }
        setNumber(`${num2 / num1}`);

        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadores.restar:
        setNumber(`${num2 - num1}`);
    }

    setPreviousNumber('0');
  };
  return {
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
  };
};
