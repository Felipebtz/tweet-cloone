import { View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function ProfileScreen() {
  return (
  <View style={styles.container}>
      <Image 
        style={styles.backgroundImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
        }}
      />
      {/* O AVATAR É A FOTO DO USUARIO DE PERFIL*/}
      <View style={styles.avatarContainer}>
        <Image 
        style= {styles.avatar}
        source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />  
        {/* botão para seguir perfil follow*/}
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Seguir</Text>
        </TouchableOpacity>
    </View>

    <View styles={styles.nameContainer}>
      <Text styles={styles.profileName}>John Doe</Text>
      <Text styles={styles.profile}>@john_doe</Text>
    </View>

    <View style={styles.profileContainer}>
      <Text style={styles.profileContainerText}>Bio do usuario ceo, ceos, phs mestrado</Text>
    </View>

    <View style={styles.locationContainer}>
      <EvilIcons namme="location" size={24} color="gray" />
      <Text style={styles.locationText}>São Paulo, Brasil</Text>
    </View>

    <View style={styles.linkContainer}>
      <TouchableOpacity
      style={styles.linkItem}
      onPress={() => Linking.openURL('https://example.com')}
      >
        <EvilIcons name="link" size={24} color="gray" />
        <Text style={styles.linkColor}>example.com</Text>
      </TouchableOpacity>
      <View style={[styles.linkItem, styles.ml4]}>
        <EvilIcons name="calendar" size={24} color="gray" />
        <Text style={styles.textColor}>Ingressou em março 2026</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textGray: {
    color: 'gray',
  },
  ml4: {
    marginLeft: 16,
  },

  container: {
    flex: 1,
      backgroundColor: 'white',
  },
  // O background da image é a parte do banner em um perfil
  backgroundImage: {
    width: 800,
    height: 120,
  },

  avatarContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingHorizontal: 10,  
  marginTop: -34, // para sobrepor o avatar ao background
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'white',
  },
  followButton: {
    backgroundColor: '#0f1418',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,

  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 22,

  },
  profileHandle: {
    color: 'gray',
    marginTop: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 4,

  },
  linkColor: {
    color: "#1d9bf1",
  },
  linkItem: {
    flexDirection: 'row',
  }


})