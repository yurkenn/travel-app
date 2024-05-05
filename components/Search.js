import { wp } from 'helpers/common';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';

const Search = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
        <TextInput placeholder="Search for places" style={styles.searchInput} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBarContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
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
});
