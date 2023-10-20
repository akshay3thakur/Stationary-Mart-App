import { Pressable, StyleSheet, Text, View, Image, Linking} from 'react-native'
import React from 'react'

const PlayScreen = ({navigation}) => {
  const openWebsite = () => {
    Linking.openURL('https://akshay3thakur.github.io/Stationary-Mart-Website/');
  };
  return (
    
    <View style={styles.container}>
  <Image
    source={require('../android_club_vitc_logo.jpeg')}
    style={styles.logo}
    resizeMode="contain"
  />
  <Pressable style={styles.button} onPress={() => navigation.navigate("Insert")}>
    <Text>Shop Products</Text>
  </Pressable>
  <Pressable style={styles.button} onPress={() => navigation.navigate('View')}>
    <Text>View Products</Text>
  </Pressable>
  <Pressable style={styles.button} onPress={() => navigation.navigate('HelpCenter')}>
    <Text>Help Center</Text>
  </Pressable>
  <Pressable style={styles.button} onPress={openWebsite}>
        <Text>Shop on our Website</Text>
      </Pressable>
</View>
    
  )
}

export default PlayScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 10,
  },
  logo: {
    width: 200, 
    height: 200, 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
    margin: 10,
  },
});
