
import React from "react";
import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from "react-native";
import PropTypes from 'prop-types';
import ListItem from '../components/ListItem'


 const List = (props) => {
    console.log(props);
    return (
      <FlatList 
        style={styles.flatStyle}
        data={props.mediaArray}
        renderItem={({item}) => <ListItem singleMedia={item} />}
      />
    );
  };

  export default List;


  const styles = StyleSheet.create({
  
    flatStyle:{
      flex:1,
      backgroundColor:'black',
   
  
    }
  
  });