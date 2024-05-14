import React,{useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import SplashScreen from '../screens/SplashScreen';
import TicTacToeGame from '../screens/TicTacToeGame';
import GuessingGame from '../screens/GuessingGame';
import WordScrambleGame from '../screens/WordScrambleGame';
import GuessTheColorGame from '../screens/GuessTheColorGame';
import LoginPage from '../screens/LoginPage';

const Stack = createStackNavigator();

function MyStack() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    },4000);
  },[]
  );
  return (
    <Stack.Navigator>
             {showSplashScreen ? (<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />) :null}
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />       

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TicTacToeGame" component={TicTacToeGame} />
      <Stack.Screen name="GuessingGame" component={GuessingGame} />
      <Stack.Screen name="WordScrambleGame " component={WordScrambleGame} />
      <Stack.Screen name="GuessTheColorGame " component={GuessTheColorGame} />


    </Stack.Navigator>
  );
}

export default MyStack;
