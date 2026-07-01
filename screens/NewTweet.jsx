import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NewTweet( { navigation}) {
  const [tweet, setTweet] = useState('');
  
  //função é declara aqui pois é onde o tweet é enviado para a api do backend
  //onpress usado lá embaixo para chamar a função quando o botão de tweetar for pressionado
  function sendTweet() {
    navigation.navigate('Tab');

  }

  return (
   <View style={styles.container}>
      <View styles={styles.tweetButtonContainer}>
        {/* esse faz a contagem de caracteres do tweet e se passar de 250 caracteres, muda a cor do texto */}
        <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}> 
          Characteres left: {280 - tweet.length}
          </Text>
        <TouchableOpacity style={styles.tweetButton} onPress={() => sendTweet()}>
          <Text style={styles.tweetButtonText}>New Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetBoxContainer}>
        <Image
        style={styles.avatar}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'

         }}
         />
         {/* esse faz o input de texto da caixa de tweet */}
         <TextInput 
         style={styles.input}
         onChangeText={setTweet}
         value={tweet}
         placeholder="What's happening?"
         placeholderTextColor="gray"
         multiline
         maxLength={280}
         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textGray: {
    color: 'gray',
  },

  textRed: {
    color: 'red',
  },

  ml4: {
    marginLeft: 16,
  },
  container: {
    flex: 1,
    backCgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 10,
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
  },
  tweetBoxContainer: {
    flexDirection:'row',
    paddingTop: 10,
  },
  avatar:{
    width: 42,
    height: 42,
    marginRigth: 8,
    marginTop: 10,
    borderRadius: 21,
  },
  input: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    padding: 10,
  },

  
  })
