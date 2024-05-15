import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { wp } from 'helpers/common';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { searchPosts } from 'services/api';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const { data, error, isLoading } = useQuery({
    queryKey: ['searchPost', search],
    queryFn: () => searchPosts(search),
    enabled: search.trim().length > 0,
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search-outline" size={20} strokeWidth={3} color="gray" />
          <TextInput
            placeholder="Search for posts"
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          {
            // Show cancel button if search is not empty
            search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Ionicons name="close" size={20} color="gray" />
              </TouchableOpacity>
            )
          }
        </View>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      {data && (
        <View style={styles.resultsContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {data.map((item) => (
              <TouchableOpacity
                key={item._id}
                style={styles.item}
                onPress={() =>
                  navigation.navigate('PostDetail', { post: item, isFavorite: false })
                }>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>
                  {item.description
                    ? item.description.substring(0, 100)
                    : 'No description available'}
                  ...
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  resultsContainer: {
    maxHeight: 200, // Adjust height as needed
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});
