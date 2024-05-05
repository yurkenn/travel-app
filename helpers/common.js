import { Dimensions } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const wp = (percentage) => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};

export const hp = (percentage) => {
  const height = deviceHeight;
  return (percentage * height) / 100;
};

export const getColumnCount = (width) => {
  if (deviceWidth >= 1024) {
    return 4;
  }
  if (deviceWidth >= 768) {
    return 3;
  }
  if (deviceWidth >= 414) {
    return 2;
  }
};

export const getImageSize = (height, width) => {
  if (width > height) {
    return 250;
    // landscape
  } else if (width < height) {
    return 300;
    // portrait
  } else {
    return 200;
    // square
  }
};
