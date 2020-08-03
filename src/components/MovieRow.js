import React from 'react';
import {View, Text , Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieRow({movie}) {
 
  
    return (
      <View style = {styles.container}> 
        <Image source = {{uri : movie.Poster}} style ={styles.poster}/>
        <Text style = {styles.title}>{movie.Title}</Text>
        <View style = {styles.iconContainer}></View>
        <Icon name ='heart-o' size ={36} color="red" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flexDirection : 'row',
    padding : 5,
    alignItems :'center'

  },
  poster : {
    height : 100,
    width : 70,
    resizeMode : 'contain'
  },
  title :{
    flex:2,
   fontSize: 15,
   fontWeight : '200',
   marginLeft:10
  },
  iconContainer : {
    flex : 1,
    alignItems :'center'
  }

})