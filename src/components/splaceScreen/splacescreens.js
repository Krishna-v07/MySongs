import React,{useEffect} from 'react';
import { StatusBar, View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/images/Megatronics.png';

const splaceScreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => {
      navigation.replace('deshboard')
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Animatable.Image
          animation="zoomIn"
          duraton="1500"
          source={logo}
          resizeMode="stretch"
        />
      </View>
    </View>
  )
}

export default splaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFFF"
  },

  LogoText: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    margin: 29.1,
    fontWeight: '300',
    color: 'blue'
  },
})
