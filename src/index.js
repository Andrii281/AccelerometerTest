import { View, Text, StyleSheet, SafeAreaView, Dimensions, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import { Accelerometer } from 'expo-sensors';

const AccelerometerTest = () => {
  const [ data, setData ] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    let subscriptions = Accelerometer.addListener(data => {
      setData(data)
    })
    return () => subscriptions?.remove();
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.swichContainer}>
        <Text>x: {data.x}</Text>
        <Text>y: {data.y}</Text>
        <Text>z: {data.z}</Text>
      </View>
    </SafeAreaView>
  )
}

export default AccelerometerTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
