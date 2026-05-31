import { View, Text, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TweetScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Text>TweetScreen</Text>
      <TouchableOpacity style={styles.flexrow}>
         <Image style= {styles.avatar}
                 source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      /> 
      <View>
        <Text style={styles.tweetName}> Andre Madarang</Text>
        <Text style={styles.tweetHandle}>@drehimself</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-theree-vertical" size={24} color="gray" />
      </TouchableOpacity>
      </View>
      <View style={styles.tweetContentCotainer} >
        <Text style={styles.tweetContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam repellendus repellat reprehenderit voluptatibus animi labore! Voluptates, libero. Commodi cumque distinctio inventore aspernatur rerum unde ut voluptatum eveniet accusantium sapiente.
        </Text>
      </View>
      <View style={styles.tweetEngagement}>
        <View style={styles.flexRow}>
          <Text style={styles.tweetEngagementNumber}>628</Text>
          <Text style={styles.tweetEngagementLabel}>Betweets</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.tweetEngagementNumber, styles.ml4]}> 38</Text>
          <Text style={styles.tweetEngagementLabel}> Quote tweets </Text>
        </View>
          <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}> 2,428 </Text>
          <Text style={styles.tweetEngagementLabel}>  Likes </Text>
        </View>
      </View>
      <View style={[styles.tweetEngagemen, styles.spaceAround]}>
      <TouchableOpacity style={styles.flexRow}>
                <EvilIcons name="comment" size={32} color="gray" style={{ marginRight: 2}} />
                <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.flexRow}>
                <EvilIcons name="retweet" size={32} color="gray" style={{ marginRight: 2}} />
                <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
                <EvilIcons name="heart" size={32} color="gray" style={{ marginRight: 2}} />
                <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow}>
                <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} 
                size={32} 
                color="gray" 
                style={{ marginRight: 2}} />
                <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow:{
    flexDirection: 'row',

  },
  profileContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
   },
   tweetName: {
    fontWeight: 'bold',
    color: 'gray',
    margimTop: 4,

   },
   tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tweetEngagementNumber: {
    fontWeight: 'bold',
  },

  tweetEngagementLabel:{
    color: 'gray',
    marginLeft: 6,
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  ml4: {
    marginLeft: 16,
   },

});