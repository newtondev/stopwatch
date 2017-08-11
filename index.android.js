import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

class StopWatch extends Component {

  render() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={this.border('red')}>
          <Text>
            00:00:00
          </Text>
        </View>
        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of Laps
        </Text>
      </View>

    </View>
  }

  startStopButton() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  }

  lapButton() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
