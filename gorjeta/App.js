import React, {useState} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


const Tela = styled.View`
  flex: 1;
  align-items: center;
`
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 25px;
`
const Input = styled.TextInput`
  width: 90%;
  background-color: #eee;
  heigth: 50px;
  font-size: 30px;
  padding-left: 20px;
  border-radus: 10px;
  margin-top: 10px;
`
const BtnCalcular = styled.Button`
  margin-top: 20px;

`
const Resultado = styled.View`
  background-color: #eee;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
  padding-botton: 20px;
`
const TituloResultado = styled.Text`
  font-size: 20px;
  margin-top: 15px;

`
const ItemResultado = styled.Text`
  font-size: 16px;
`

export default function App() {
  const [conta, alteraConta] = useState('123')

  return (
    <Tela>
    <Titulo> Calculadora de Gorjeta </Titulo>
      <Input keyboardType="numeric" placeholder="Digite o valor da conta" value={conta} onChangeText={ function alteraInput(textodigitado) {alteraConta(textodigitado)} } />
      <BtnCalcular title="Calcular 10%" onPress={ () => {} } />
      <Resultado>
      <TituloResultado> Valor da Conta </TituloResultado>
      <ItemResultado> {conta} </ItemResultado>

      <TituloResultado> Valor da Gorjeta </TituloResultado>
      <ItemResultado> {conta*0.1} </ItemResultado>

      <TituloResultado> Valor Total </TituloResultado>
      <ItemResultado> {(conta * 1.1).toFixed(2)}</ItemResultado>
      </Resultado>
    </Tela>
  );
}