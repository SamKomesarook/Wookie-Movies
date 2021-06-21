/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ItemModal from '../app/components/ItemModal/ItemModal';
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('renders correctly', () => {
   renderer.create(<ItemModal item={{"item": {"backdrop": "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg", "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "classification": "13+", "director": "Christopher Nolan", "genres": ["Action", "Crime", "Drama"], "id": "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8", "imdb_rating": 9, "length": "2h 32min", "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.", "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg", "released_on": "2008-07-16T00:00:00", "slug": "the-dark-knight-2008", "title": "The Dark Knight"}}} />);
 });
 