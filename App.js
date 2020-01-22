import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import List from "./components/List";

const mediaArray = [
  {
    key: "0",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    thumbnails: {
      w160: "http://placekitten.com/160/161"
    },
    filename: "http://placekitten.com/2048/1920"
  },
  {
    key: "1",
    title: "Title 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    thumbnails: {
      w160: "http://placekitten.com/160/162"
    },
    filename: "http://placekitten.com/2041/1922"
  },
  {
    key: "2",
    title: "Title 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    thumbnails: {
      w160: "http://placekitten.com/160/163"
    },
    filename: "http://placekitten.com/2039/1920"
  }
];

const App = () => {
      return (
        
        <View style={styles.container}>
          <View style={styles.statusBar}>

          </View>
           <View style={styles.imageHolder}>
             <View style={styles.textHolder}>
               <Text style={styles.floatTExt}>1444 Homeless cats</Text>
             </View>
           <Image source = {require('./images/cat.jpg')} />
           </View>
              <List mediaArray={mediaArray} />

          </View>
          );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: "center",
    justifyContent: "center"
  },
  main:{
    flex:1,
  },
  floatTExt:{
  
   zIndex:4,
   color:'white'
   

   
  },

  statusBar:{
    padding:16,
    backgroundColor:'green',
    width: Dimensions.get('window').width,
  },
  imageHolder:{
   marginBottom:10,
  },
  textHolder:{
   position:'absolute',
   zIndex:4,
   top:30,
   left:10,
   backgroundColor:'rgba(192,192,192,0.6)',
   borderWidth:2,
   padding:2,
   borderColor:'white',
   
   
  }
 
});
export default App;
