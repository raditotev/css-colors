import {
  allColors,
  redColors,
  pinkColors,
  orangeColors,
  yellowColors,
  purpleColors,
  greenColors,
  blueColors,
  brownColors,
  lightColors,
  grayColors,
} from '../assets/colors';

const colorGroups = {
  all: allColors,
  red: redColors,
  pink: pinkColors,
  orange: orangeColors,
  yellow: yellowColors,
  purple: purpleColors,
  green: greenColors,
  blue: blueColors,
  brown: brownColors,
  light: lightColors,
  gray: grayColors,
};

export const getColors = (group) => colorGroups[group];
export const getColorGroups = Object.keys(colorGroups);
