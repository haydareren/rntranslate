import React,{useContext,useState} from "react";
import {TextInput, Text, View, TouchableOpacity} from "react-native";
import {TranslateContext} from "../context/TranslateContext";

function Translate() {
    const {translateFilterCeviriENG,valueENG,setValueENG,translateTextENG,addWorkFuncENG}=useContext(TranslateContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>English</Text>
            <TextInput
                style={{
                    textAlign:'center',
                    fontSize:16,
                    borderRadius: 10,
                    borderColor:'darkblue',
                    width: '80%',
                    height: 80,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
                placeholder={'Translate to Turkish'}
                value={valueENG}
                onChangeText={valueENG=> setValueENG(valueENG)}
            >
            </TextInput>
            <TouchableOpacity
                onPress={translateFilterCeviriENG}
                onPressOut={addWorkFuncENG}
                style={{
                    width: '50%',
                    backgroundColor: '#F4410B',
                    margin:50,
                    borderRadius: 5,
                    paddingVertical: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                <Text
                    style={{
                        color: '#eee',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    Translate
                </Text>
            </TouchableOpacity>
            <Text>Turkish</Text>
            <Text

                style={{
                    borderRadius: 10,
                    borderColor:'darkred',
                    width: '80%',
                    height: 80,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    fontSize:16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                {translateTextENG}
            </Text>
        </View>
    );
}
export default Translate
