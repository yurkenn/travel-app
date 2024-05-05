import { wp } from 'helpers/common';
import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { getAllPosts } from 'services/api';

const Home = () => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../assets/welcome.jpg')} style={styles.headerImage} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchInputContainer}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput placeholder="Search for places" style={styles.searchInput} />
          </View>
        </View>

        {/* Categories */}
        {/* <View style={styles.sectionContainer}>
          <Categories />
        </View> */}

        {/* Sort Categories */}
        {/* <View style={styles.sectionContainer}>
          <SortCategories />
        </View> */}

        {/* Destinations */}
        {/* <View style={styles.sectionContainer}>
          <Destinations />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: wp(10),
    padding: wp(5),
  },
  scrollView: {
    marginTop: 3,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  headerText: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#333', // Adjust color as needed
  },
  headerImage: {
    height: wp(12),
    width: wp(12),
  },
  searchBarContainer: {
    marginHorizontal: 5,
    marginBottom: 4,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 25,
    backgroundColor: '#F0F0F0', // Adjust background color as needed
    padding: 10,
    paddingLeft: 20,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: wp(3.5),
    paddingLeft: 5,
    marginBottom: 5,
  },
  sectionContainer: {
    marginBottom: 4,
  },
});
