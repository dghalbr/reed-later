import React from 'react';
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: 60,
    borderRadius: 15,
    backgroundColor: '#EEEEEE',
    margin: 0,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  scrollView: {
    padding: 20,
    borderRadius: 15,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  hamburgerMenu: {
    paddingLeft: 10,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

const data: string[] = [
  'http://www.example.com/',
  'http://www.example.net/board/appliance.aspx',
  'http://anger.example.org/anger/bone',
  'http://example.com/bed/bait#bikes',
  'https://bedroom.example.com/advice?basketball=alarm&bomb=bomb#bell',
  'http://example.com/',
]

const buttonsListArr = data.map(link => (
    // <Text style={styles.listItem} key={link}>{link}</Text>
    <>
    <TouchableOpacity key={link} onPress={() => Linking.openURL(link)}>
      <Text style={styles.listItem} key={link}>{link}</Text>
      {link != data[data.length -1] &&
        <View style={styles.horizontalRule} />
      }      
    </TouchableOpacity>
    </>
));

const ReadingList = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" style={styles.hamburgerMenu} size={24} color="black" />
      <Text style={styles.heading}> Reed-Later List </Text>
      <ScrollView style={styles.scrollView}>
      <View style={styles.listContainer}>
        {buttonsListArr}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReadingList;