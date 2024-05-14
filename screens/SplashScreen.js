import { View, Text,StatusBar,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import  logo from '../assets/images/game-logo.jpg'
export default function SplashScreen({navigation}) {

  return (
    <View>
        <StatusBar hidden={true}/>
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image
                  source={logo}
                  style={styles.banner}
                  resizeMode="contain"
                />
                 <Text style={styles.text1}>LEARN WHILE PLAY</Text>

                <Text style={styles.text2}>Made with ❤ from Bharat</Text>


            </View>
            
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor:"#fff"
      },
      text1: {
        fontWeight:"bold",
        fontSize:26,
        color:"#6ccc9c",
        paddingBottom:90,
        marginBottom:90


      },
      text2: {
        fontWeight:"bold",
        fontSize:13,
        color:"#000",
        paddingBottom:40,
        marginBottom:30
      


      },
  
    banner: {
        height: 300,
        width: 300,
    
        
        
        
        
  
      },
      bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent:'space-between',
        paddingTop:50

        
  
      },
   
  });