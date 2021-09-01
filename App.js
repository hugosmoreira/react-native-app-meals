import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';


const isAndroid = Platform.OS == 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.search}>
          <Searchbar />        
        </View>
        <View style={styles.list}>
          <Text>Search</Text>        
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
     
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});