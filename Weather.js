import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining',
    subtitle: 'For more info look outside.',
    icon: 'weather-rainy'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny',
    subtitle: "The sun is so bright!",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outisde of the house.',
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: "I know it's boring.",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Nope.',
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: "It's like raining.",
    icon: 'weather-hail'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: "Can't see anything, hmm..",
    icon: 'weather-hail'
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Mist',
    subtitle: "Oh, it's humid.",
    icon: 'weather-fog'
  }
};

export default function Weather({ weatherName, temperature }) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color='white'
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temperature}>{temperature}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  temperature: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 24
  }
});
