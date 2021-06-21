import React from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity
 } from 'react-native';
 
 const ItemModal = (props) => {
   return (
     <TouchableOpacity onPress={props.reset}>
      <Text style={styles.Title}>
      {props.item.title}
    </Text>
  </TouchableOpacity>
   );
 };
 
 const styles = StyleSheet.create({
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center'
  }
 });
 
 export default ItemModal;
 