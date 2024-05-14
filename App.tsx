
import React from 'react';
import type {PropsWithChildren} from 'react';
import {

  StyleSheet,
 
} from 'react-native';


// Importing your screens
import {NavigationContainer} from '@react-navigation/native'; // Navigation Container
import MyStack from './navigation'; // Your custom stack navigator



type SectionProps = PropsWithChildren<{
  title: string;
}>;


// The main App component
const App = () => {
    return(
          // Wrap your entire app with NavigationContainer for navigation
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
    )
}

// Styles for the components
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// Exporting the App component as the default export

export default App;
