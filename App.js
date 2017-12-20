import React from 'react';
import {
  StyleSheet, Text, View, ActivityIndicator,
  StatusBar
} from 'react-native';
import Weather from './Weather';

const API_KEY = '';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      temperature: null,
      name: null
    };

    this._getWeather = this._getWeather.bind(this);
  }

  _getWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => this.setState({
        isLoaded: true,
        temperature: data.main.temp,
        name: data.weather[0].main
      }))
  }

  render() {
    const { isLoaded, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {
          isLoaded ?
            <Weather />
            :
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the weather</Text>
              {
                error ?
                  <Text style={styles.errorText}>{error}</Text>
                  :
                  null
              }
            </View>
        }
      </View>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => this.setState({error})
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  first: {
    flex: 1,
    backgroundColor: 'green'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100
  }
});
