import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import axiosConfig from '../helpers/axiosConfig';
import { formatDistanceToNowStrict } from 'date-fns';

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAtEndOfScrolling, setIsAtEndOfScrolling] = useState(false);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getAllTweets();
  }, [page]);

{/* Page adicionado e setado pois é uma mudanca de estado e agora a api passa a trabalha sobre pages*/}
 {/* Diferenca entre o setdata e o setData ... é que um substitui todo o array recebido, já o outro adiciona ao array existente 
  * é como se fosse um push, adicionando mais elementos ao array existente.
  * Acumula para novos elementos, e não substitui os antigos.
   */}
  function getAllTweets() {
    axiosConfig
      .get(`tweets?page=${page}`)
      .then(response => {
        {/* Se a página for 1, substitui o array */}
        {/* Se a página for maior que 1, incrementa no array existente */}
        {/*Se response.data.next.page for true entao nao é o final da lista */}
        if (page === 1) {
          setData(response.data.data);
        }
        else {
          setData([...data, ...response.data.data]);
        }

        if(response.data.next_page_url){
          setIsAtEndOfScrolling(true);
        }
        setIsLoading(false);
        setIsRefreshing(false);
      })

      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setIsRefreshing(false);
      });
  }
{/*Essa funcao ela é responsavel pelo o refresh ou seja definir a page o final da lista  */}
  function handleRefresh() {
    setPage(1);
    setIsAtEndOfScrolling(false);
    setIsRefreshing(true);
    getAllTweets();
  }

  function handleEnd() {
    setPage(page + 1);
    
  }

  // {
  // id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  // title: 'First Item',
  // },
  // {
  // id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  // title: 'Second Item',
  // },
  // {
  // id: '58694a0f-3da1-471f-bd96-145571e29d72',
  // title: 'Third Item',
  // }

  function gotoProfile() {
    navigation.navigate('Profile Screen');
  }

    function gotoSingleTweet(tweetId) {
      navigation.navigate('Tweet Screen', {
        tweetId:  tweetId });
    }

  function gotoNewTweet() {
    navigation.navigate('Tweet Screen');
  }

  // Molde do renderItem “FlatList, toda vez que você pegar um item da lista, desenhe ele desse jeito aqui.”
  const renderItem = ({ item: tweet }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => gotoProfile()}>
        <Image
          style={styles.avatar}
          source={{ uri: tweet.user.avatar }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.flexRow}>
          <Text numberOfLines={1} style={styles.tweetName}>
            {tweet.user.name}
          </Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            @{tweet.user.username}
          </Text>
          <Text>@middot;</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            {formatDistanceToNowStrict(tweet.created_at)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet(tweet.id)}>
          <Text style={styles.tweetContent}>
            {tweet.body}
          </Text>
        </TouchableOpacity>

        <View style={styles.tweetEngagement}>
          {/* component de comentario */}
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons name="comment" size={22} color="gray" style={{ marginRight: 2 }} />
            <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>

          {/* component de retuitar */}
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons name="retweet" size={22} color="gray" style={{ marginRight: 2 }} />
            <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>

          {/* component de coração */}
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <AntDesign name="heart" size={22} color="gray" />
            <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>

          {/* component de compartilhamento */}
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>108</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Quando fazemos um flatlist o renderitem é uma funçao que é chamada. */}
      {/* Nesse caso ela é chama na constante e está construido o item na tela com o DATA (agora é a api) */}
      {/* O data é a lista de informações. */}
      {/* O renderItem é a função que transforma cada informação em interface. */}

      {isLoading ? (
        <ActivityIndicator style={{ marginTop: 8 }} size="large" color="gray" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.tweetSeparator} />}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          onEndReached={handleEnd}
          onEndReachedThreshold={0}
          
          ListFooterComponent={() => !isAtEndOfScrolling && (
          <ActivityIndicator size="large" color="gray" />
        )}
        />
      )}
      {/*Ao final da lista mostra login Activitys */}

      <TouchableOpacity style={styles.floatingButton} onPress={() => gotoNewTweet()}>
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  tweetContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#22222',
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: 'gray',
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  textGray: {
    color: 'gray',
  },
  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d9bf1',
    position: 'absolute',
    bottom: 20,
    right: 12,
  },
  ml4: {
    marginLeft: 16,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e4e7eb',
  },
});
