
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({pais: ''})
  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          guardarbusqueda={guardarbusqueda}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: "2.5%",
  }
});
