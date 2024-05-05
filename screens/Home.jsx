import { useQuery } from '@tanstack/react-query';
import Category from 'components/Category';
import Options from 'components/Options';
import Posts from 'components/Posts';
import { wp } from 'helpers/common';
import React, { useState } from 'react';
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

const Home = () => {
  const [activeOption, setActiveOption] = useState('All');

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
        <View style={styles.sectionContainer}>
          <Category />
        </View>

        {/* Sort Categories */}
        <View style={styles.sectionContainer}>
          <Options activeOption={activeOption} setActiveOption={setActiveOption} />
        </View>

        {/* Posts */}
        <View style={styles.sectionContainer}>
          <Posts activeOption={activeOption} />
        </View>
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
  },
  scrollView: {
    marginTop: 12,
    marginVertical: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  headerText: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#4d4d4d', // Adjust color as needed
  },
  headerImage: {
    height: wp(12),
    width: wp(12),
  },
  searchBarContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 9999,
    backgroundColor: '#f7f5f5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: wp(3.6),
    paddingLeft: 4,
    marginBottom: 4,
    letterSpacing: 1,
  },
  sectionContainer: {
    marginBottom: 10,
  },
});
