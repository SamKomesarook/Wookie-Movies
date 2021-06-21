import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = () => {
  return <Text style={styles.Title}>Wookie{'\n'}Movies</Text>;
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
  },
});

export default Header;
