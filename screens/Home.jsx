import Category from 'components/Category';
import Header from 'components/Header';
import Options from 'components/Options';
import Posts from 'components/Posts';
import Search from 'components/Search';
import { wp } from 'helpers/common';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Home = () => {
  const [activeOption, setActiveOption] = useState('All');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Header */}
        <View style={styles.sectionContainer}>
          <Header />
        </View>

        {/* Search Bar */}
        <View style={styles.sectionContainer}>
          <Search />
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
  sectionContainer: {
    marginBottom: wp(4),
  },
});
