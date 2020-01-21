import React from "react";
import { StyleSheet, Text, Dimensions,View ,FlatList,TouchableOpacity,Image} from "react-native";
import PropTypes from 'prop-types';

const ListItem = (props)=>{
return(
    <TouchableOpacity style={styles.touchableStyle} >
    <Image
      style={{width: 150, height: 280 ,}}
      source={{uri: props.singleMedia.thumbnails.w160}}
    />
    <View  style={styles.textV}>
      <Text>{props.singleMedia.title}</Text>
      <Text style={styles.textContent}>{props.singleMedia.description}</Text>
    </View>
  </TouchableOpacity>
)

};

export default ListItem;

const styles = StyleSheet.create({

    touchableStyle:{
      width: Dimensions.get('window').width,
      minHeight:300,
      flex:1,
      flexDirection:'row',
      backgroundColor:'gray',
      marginBottom:5,
      paddingLeft:10,
      alignItems:'center'
     
  
     
    },
    textV:{
      height:300,
      paddingLeft:30,
      paddingTop:50,
      
     
    },
    textContent:{

      height:300,
     paddingRight:160,
     paddingTop:10,
    }
 
  });
