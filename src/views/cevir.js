import React,{useContext,useState} from "react";
import {TextInput, Text, View, TouchableOpacity} from "react-native";
import {TranslateContext} from "../context/TranslateContext";

function Cevir() {
    const {translateFilterCeviri,value,setValue,translateText,addWorkFunc}=useContext(TranslateContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Türkçe</Text>
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
                placeholder={'Çevirmek istediğiniz kelimeyi yazınız'}
                value={value}
                onChangeText={value=> setValue(value)}
            >
            </TextInput>
            <TouchableOpacity
                onPress={translateFilterCeviri}
                onPressOut={addWorkFunc}
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
                   Çevir
                </Text>
            </TouchableOpacity>
            <Text>İngilizce</Text>
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
                {translateText}
            </Text>
        </View>
    );
}
export default Cevir
