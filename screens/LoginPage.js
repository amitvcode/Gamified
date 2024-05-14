import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet,TouchableOpacity} from 'react-native';

import Green1 from '../assets/images/loginscreenlogo.png'

const LoginPage = ({ navigation }) => { // Receive navigation prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
   
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
 <Image
      source={Green1}
      style={styles.banner}
      resizeMode="contain"
    />


      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

<TouchableOpacity onPress={handleLogin} style={{
   width:'40%',
   marginTop:50,
   bottom:170,
   borderColor:'#20ad5f',
   borderRadius: 11,
   borderWidth:1,
   backgroundColor:'#20ad5f',
   justifyContent:'center',
   alignItems:'center',
   
  }}>
    <Text style={{margin:5,padding:9,color:'#fff',fontWeight:'bold'}}>LOGIN</Text>
    </TouchableOpacity>


    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#fff",
    
    
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    fontWeight:"bold"

  },
  input: {
    
    width: '80%',
    height: 40,
    marginBottom:30,
    borderColor: 'gray',
    paddingHorizontal: 20,
    borderBottomWidth:1.4,
    borderColor:"#20ad5f",
    fontWeight:"bold",
    fontSize:15,
    bottom:190
    

  },
  
  banner: {
    width:'70%',
    flex:1,
    bottom:90
  }
});

export default LoginPage;
