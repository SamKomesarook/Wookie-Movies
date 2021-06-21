/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './app/components/Header/Header';
import ItemModal from './app/components/ItemModal/ItemModal';
import axios from 'axios';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const resetSelected = () => {
    setSelectedMovie(null);
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const api = axios.create({
        baseURL: 'https://wookie.codesubmit.io/movies',
        headers: {'Authorization': 'Bearer Wookie2019'}
    });
      const res = await api.get();
      setMovies(res.data.movies);
      let genresArr = [];
  
      for (let movie of res.data.movies) {
      movie.genres.map((genre) => {
        if (!genresArr.includes(genre)) {
          genresArr.push(genre);
        }
      });
    }
    setGenres(genresArr)
    }

    fetchMyAPI()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.view}> 
        <Header />
        <FlatList 
          data={genres}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            let itemMovies = []
            movies.map(
              (movie, i) => {
                if(movie.genres.includes(item.item)){
                  itemMovies.push(movie)
                }
              }
            )
            return (
             <View>
                <Text style={styles.genreTitle}>
                  {item.item}
                </Text>
                <FlatList 
                  data={itemMovies}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={(singleItem) => {
                    return(
                      <TouchableOpacity onPress={() => setSelectedMovie(singleItem.item)}>
                      <View style={styles.movieContainer}>
                        <Text style={styles.highlight}>
                          {singleItem.item.title}
                        </Text>
                        </View>
                        </TouchableOpacity>
                  )}}
        />
                </View>
          )}}
        />
          </View> 
          {
            selectedMovie && 
            <Modal animationType="slide">
              <ItemModal item={selectedMovie} reset={resetSelected}/>
            </Modal>
          }
          
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    height: 200,
    width: 100,
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  genreTitle: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: '600',
  },
  view: {
    flex: 10,
    paddingTop: 6,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
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

export default App;
