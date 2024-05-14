

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';


import Green1 from '../assets/images/green1.png'
import Green2 from '../assets/images/green2.png'

import Green4 from '../assets/images/green4.png'

import green5 from '../assets/images/green5.png'






const Home = ({navigation}) => {
    return(
      <ScrollView>
      <View style={styles.container}>
      <Text style={{fontSize:32,fontWeight:"bold"}}>𝔾𝕒𝕞𝕚𝕗𝕚𝕖𝕕 𝕃𝕖𝕒𝕣𝕟𝕚𝕟𝕘 𝔸𝕡𝕡</Text>
  <View style={styles.bannerContainer}>
  <Image
      source={Green1}
      style={styles.banner}
      resizeMode="contain"
    />
  <TouchableOpacity
    onPress={() => navigation.navigate("TicTacToeGame")}
    style={styles.button1}>
    <Text style={styles.buttonText}>TicTacToe</Text>
  </TouchableOpacity>

    <Image
      source={Green2}
      style={styles.banner}
      resizeMode="contain"
    />
    <TouchableOpacity
    onPress={() => navigation.navigate("Quiz")}
    style={styles.button2}>
    <Text style={styles.buttonText}>Play Quiz</Text>
  </TouchableOpacity>
  <Image
      source={Green4}
      style={styles.banner}
      resizeMode="contain"
    />
    <TouchableOpacity
    onPress={() => navigation.navigate("WordScrambleGame ")}
    style={styles.button2}>
    <Text style={styles.buttonText}>ArrangeMe</Text>
  </TouchableOpacity>
  <Image
      source={green5}
      style={styles.banner}
      resizeMode="contain"
    />
    <TouchableOpacity
    onPress={() => navigation.navigate("GuessingGame")}
    style={styles.button2}>
    <Text style={styles.buttonText}>GuessMe</Text>
  </TouchableOpacity>
  
  
  </View>
  
  
  </View>
  </ScrollView>
      
        
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor:"#fcfcfc",
        
      },
  
    banner: {
        height: 300,
        width: 300,
        
  
      },
      bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      
  
      },
      button1: {
        width: '100%',
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
      button2: {
        width: '100%',
        backgroundColor: '#20ad5f',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
      buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
      },
  });
export default Home;
