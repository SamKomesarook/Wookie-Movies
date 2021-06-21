import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
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
          <View style={styles.topRow}>
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
          <ScrollView style={styles.scrollable}>
            <View style={styles.row}>
              <Text style={styles.info}>
                {new Date(props.item.released_on).toDateString()}
              </Text>
              <Text style={styles.info}>{props.item.length}</Text>
              <Text style={styles.info}>{props.item.director}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.info}>
                Starring: {props.item.cast.join(', ')}
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.info}>Plot: {props.item.overview}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollable: {},
  safeContainer: {
    flex: 1,
    flexGrow: 1,
  },
  info: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 12,
  },
  topRow: {
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
    width: 200,
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
    marginBottom: 12
  },
  bottomSection: {
    flex: 3,
    marginHorizontal: 8,
  },
});

export default ItemModal;
