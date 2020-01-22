import React from "react";
import { StyleSheet, Text, Dimensions,View ,FlatList,TouchableOpacity,Image} from "react-native";
import PropTypes from 'prop-types';

const ListItem = (props)=>{
return(
    <TouchableOpacity style={styles.touchableStyle} >
    <Image
      style={{width: 150, height: 150 , borderRadius:70}}
      source={{uri: props.singleMedia.thumbnails.w160}}
    />
    <View  style={styles.textV}>
      <Text style={{fontWeight:"bold",color:"orange"}}>{props.singleMedia.title}</Text>
      <Text style={styles.textContent}>{props.singleMedia.description}</Text>
    </View>
  </TouchableOpacity>
)

};

export default ListItem;

const styles = StyleSheet.create({

    touchableStyle:{
     // width: Dimensions.get('window').width,
      width:390,
      minHeight:300,
      flex:1,
      flexDirection:'row',
      backgroundColor:'#feecd4',
      marginBottom:5,
      paddingLeft:3,
      alignItems:'center',
      borderWidth:3,
      borderColor:'black',
     
  
     
    },
    textV:{
      height:300,
      paddingLeft:20,
      paddingTop:30,
      
     
    },
    textContent:{

      height:300,
     paddingRight:160,
     paddingTop:10,
    }
 
  });
