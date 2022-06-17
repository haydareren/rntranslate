import React, {useContext} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';
import {TranslateContext} from "../context/TranslateContext";


function History() {
    const {histories} = useContext(TranslateContext);

   const renderContactsItem = ({item, index}) => {
        return (
            <TouchableOpacity style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#e3f2fd' :'#e8eaf6' }]}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.tr} => {item.en}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    // const searchFilter = text => {
    //     const newData = data.filter(item => {
    //         const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
    //
    //         return listItem.indexOf(text.toLowerCase()) > -1;
    //     });
    //
    //     this.setState({
    //         contacts: newData,
    //     });
    // };

   // const renderHeader = () => {
   //      const {text} = this.state;
   //      return (
   //          <View style={styles.searchContainer}>
   //              <TextInput
   //                  onChangeText={text => {
   //                      this.setState({
   //                          text,
   //                      });
   //
   //                      this.searchFilter(text);
   //                  }}
   //                  value={text}
   //                  placeholder="Search..."
   //                  style={styles.searchInput}/>
   //          </View>
   //      )
   //  };

        return (
            <FlatList
                // ListHeaderComponent={renderHeader()}
                renderItem={renderContactsItem}
                keyExtractor={item => item.id}
                data={histories}/>
        );

}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft:'auto',
        marginRight:'auto'
    },
    name: {
        fontSize: 16
    },
    searchContainer: {
        padding: 10
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10
    }
});
export default History
