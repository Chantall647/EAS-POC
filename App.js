import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useEffect } from 'react';

export default function App() {

  const appVersion = Constants?.manifest?.version;


// useEffect(()=>{
//   const getProductList = async () => {
//     try{
//       const jsonValue = await AsyncStorage.getItem('productList')
//       console.log(jsonValue)
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     }
//   }
//   getProductList()
// },[selectedProducts])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{appVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
