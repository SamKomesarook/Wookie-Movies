import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

const ItemModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageBackground
          source={{
            uri: props.item.backdrop,
          }}
          style={styles.background}>
          <TouchableOpacity onPress={props.reset}>
            <Text style={styles.goBack}>X</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity onPress={props.reset}>
          <Text style={styles.Title}>{props.item.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden',
    flex: 1,
  },
  topSection: {
    flex: 1,
    display: 'flex',
  },
  goBack: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'left',
  },
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  bottomSection: {
    flex: 3,
  },
});

export default ItemModal;
