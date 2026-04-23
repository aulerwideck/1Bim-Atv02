import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/statusStyles';

const FRASES_DA_SORTE: string[] = [
  'Pequenas ações hoje pavimentam o caminho para grandes conquistas amanhã.',
  'Sua criatividade será a chave para superar um desafio inesperado.',
  'Um encontro casual trará uma perspectiva valiosa para os seus planos.',
  'A resposta que você procura está na clareza dos seus objetivos.',
  'Saber o momento de mudar de direção é um sinal de sabedoria.',
  'Seu talento não passará despercebido por quem realmente importa.',
  'O universo conspira a favor de quem age com integridade e coragem.',
  'Equilibrar foco e descanso fará sua produtividade saltar esta semana.',
  'Um risco calculado hoje renderá frutos doces em um futuro próximo.',
  'Mantenha o entusiasmo; ele é o combustível que ilumina as oportunidades.',
];

const IMAGEM_BISCOITO_FECHADO = require('../../assets/biscoito-fechado.jpeg');
const IMAGEM_BISCOITO_ABERTO = require('../../assets/biscoito-aberto.jpeg');

export default function BiscoitoDaSorte() {
  const [biscoitoAberto, setBiscoitoAberto] = useState<boolean>(false);

  const [fraseSorteada, setFraseSorteada] = useState<String>('');

  // Sorteia uma nova frase e atualiza a imagem exibida na tela.
  function quebrarBiscoito (): void {
    const indiceSorteado = Math.floor(Math.random() * FRASES_DA_SORTE.length);

    setBiscoitoAberto(true);

    setFraseSorteada(FRASES_DA_SORTE[indiceSorteado]);
  };

  function resetarBiscoito (): void {
    
    setBiscoitoAberto(false);

    setFraseSorteada('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biscoito da Sorte</Text>
      <Text style={styles.subtitulo}>
        Clique no botao para quebrar o biscoito e descobrir sua frase.
      </Text>

      <Image
        source={ biscoitoAberto ? IMAGEM_BISCOITO_ABERTO : IMAGEM_BISCOITO_FECHADO }
        style={styles.imagemBiscoito}
        resizeMode="contain"
      />

      <View style={styles.fraseBox}>
        <Text style={styles.fraseTexto}>
          {fraseSorteada || 'Sua mensagem aparecera aqui.'}
        </Text>
      </View>

      <TouchableOpacity style={styles.botaoPrimario} onPress={quebrarBiscoito}>
        <Text style={styles.textoBotao}>Quebrar biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={resetarBiscoito}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
