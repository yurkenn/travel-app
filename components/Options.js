import { wp } from 'helpers/common';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Options = ({ activeOption, setActiveOption }) => {
  const options = ['All', 'Popular', 'Recommended', 'More'];

  return (
    <View style={styles.optionsContainer}>
      {options.map((option) => {
        const isActive = activeOption === option;
        const activeButton = isActive ? styles.activeButtonStyle : {};

        return (
          <TouchableOpacity
            key={option}
            onPress={() => setActiveOption(option)}
            style={[styles.button, activeButton]}>
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '600',
                color: isActive ? '#f35b0f' : 'rgba(0,0,0,0.6)',
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 30,
  },
  button: {
    padding: 10,
    borderRadius: 20,
  },
  activeButtonStyle: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
});
