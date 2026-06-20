import { View, Text } from 'react-native'
import React from 'react'

export default function NewTweet() {
  return (
   <View style={styles.container}>
      <View styles={styles.tweetButtonContainer}>
        <Text> Characteres left: 200</Text>
        <TouchableOpacity style={styles.tweetButton}>
          <Text style={styles.tweetButtonText}>New Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetBoxContainer}>
        <Image
        style={styles.avatar}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: 'gray',
  },
  ml4: {
    marginLeft: 16,
  },
  container: {
    flex: 1,
    backCgroundColor: 'white',
  },
  tweetButtonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  tweetButton: {
    backgroundColor: '#1d9bf1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  }
})
