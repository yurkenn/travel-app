import Category from 'components/Category';
import Header from 'components/Header';
import Options from 'components/Options';
import Posts from 'components/Posts';
import Search from 'components/Search';
import { wp } from 'helpers/common';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Home = () => {
  const [activeOption, setActiveOption] = useState('All');

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {/* Header */}
        <Animated.View style={styles.sectionContainer}>
          <Header />
        </Animated.View>

        {/* Search Bar */}
        <Animated.View style={styles.sectionContainer}>
          <Search />
        </Animated.View>

        {/* Categories */}
        <Animated.View style={styles.sectionContainer}>
          <Category />
        </Animated.View>

        {/* Sort Categories */}
        <Animated.View style={styles.sectionContainer}>
          <Options activeOption={activeOption} setActiveOption={setActiveOption} />
        </Animated.View>

        {/* Posts */}
        <Animated.View style={styles.sectionContainer}>
          <Posts activeOption={activeOption} />
        </Animated.View>
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
