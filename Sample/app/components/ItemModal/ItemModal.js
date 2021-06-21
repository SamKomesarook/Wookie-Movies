import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';

const ItemModal = props => {
  return (
    <SafeAreaView style={styles.safeContainer}>
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
        <View style={styles.row}>
          <Image
            source={{
              uri: props.item.poster,
            }}
            style={styles.poster}
            height={160}
            width={120}
          />
          <View style={styles.movieTitle}>
            <Text style={styles.title}>{props.item.title}</Text>
          </View>
        </View>
        <Text style={styles.title}>
          {new Date(props.item.released_on).toDateString()}
        </Text>
        <Text style={styles.title}>{props.item.length}</Text>
        <Text style={styles.title}>{props.item.director}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    top: -50,
    marginLeft: 20,
  },
  movieTitle: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  background: {
    overflow: 'visible',
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.5,
  },
  poster: {
    overflow: 'visible',
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
  title: {
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
