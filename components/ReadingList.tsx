import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    borderRadius: 15,
    backgroundColor: '#EEEEEE',
    margin: 100,
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
    <Text style={styles.listItem} key={link}>{link}</Text>
));

const ReadingList = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" style={styles.hamburgerMenu} size={24} color="black" />
      <ScrollView style={styles.scrollView}>
      <View style={styles.listContainer}>
        {buttonsListArr}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReadingList;