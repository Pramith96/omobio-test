import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ButtonProps} from 'react-native';
import Register from './screen/register';

export default function App() {

  const [text, setText] = useState('');

  return <Register/>

  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
