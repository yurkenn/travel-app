import Category from 'components/Category';
import Header from 'components/Header';
import Options from 'components/Options';
import Posts from 'components/Posts';
import Search from 'components/Search';
import { wp } from 'helpers/common';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const Home = () => {
  const [activeOption, setActiveOption] = useState('All');

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        entering={FadeIn.duration(1000)}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {/* Header */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.sectionContainer}>
          <Header />
        </Animated.View>

        {/* Search Bar */}
        <Animated.View entering={FadeInDown.delay(400).springify()} style={styles.sectionContainer}>
          <Search />
        </Animated.View>

        {/* Categories */}
        <Animated.View entering={FadeInDown.delay(600).springify()} style={styles.sectionContainer}>
          <Category />
        </Animated.View>

        {/* Sort Categories */}
        <Animated.View entering={FadeInDown.delay(800).springify()} style={styles.sectionContainer}>
          <Options activeOption={activeOption} setActiveOption={setActiveOption} />
        </Animated.View>

        {/* Posts */}
        <Animated.View
          entering={FadeInDown.delay(1000).springify()}
          style={styles.sectionContainer}>
          <Posts activeOption={activeOption} />
        </Animated.View>
      </Animated.ScrollView>
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
