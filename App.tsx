// import React, { Component } from 'react';
// import { View, Text, Image } from 'react-native';

// class App extends Component {
//   render() {
//     let nome = 'Biscoito da Sorte';

//     return (
//       <View>
//         <Text style={{ fontSize: 30 }}>{nome}</Text>

//         <Imagem />
//       </View>
//     );
//   }
// }

// export default App;

// class Imagem extends Component {
//   render() {
//     let img = 'https://reactnative.dev/img/tiny_logo.png';

//     return (
//       <Image
//         source={{ uri: img }}
//         style={{ width: 300, height: 300 }}
//       />
//     );
//   }
// }
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BiscoitoDaSorte from './src/components/BiscoitoDaSorte';
import { styles } from './src/styles/statusStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <BiscoitoDaSorte />
    </SafeAreaView>
  );
}