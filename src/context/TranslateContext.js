import {createContext,useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import axios from "axios";

export const TranslateContext = createContext();

const TranslateContextProvider = (props)=>{
    const [histories,setHistories] = useState([

    ]);
    const [value,setValue]=useState('')
    const [translateText,setTranslateText]=useState('')


    const [valueENG,setValueENG]=useState('')
    const [translateTextENG,setTranslateTextENG]=useState('')


    const translateFilterCeviri = ()=>{
        let data = {
            q : value,
            source: 'tr',
            target: 'en'
        }
       axios.post(`https://libretranslate.de/translate`, data)
            .then((response) => {
                setTranslateText(response.data.translatedText)
            })
        }

    const translateFilterCeviriENG = ()=>{
        let data = {
            q : valueENG,
            source: 'en',
            target: 'tr'
        }
        axios.post(`https://libretranslate.de/translate`, data)
            .then((response) => {
                setTranslateTextENG(response.data.translatedText)
            })
    }

    const addWorkFunc = () =>{
        setHistories([...histories,{id:uuidv4(),tr:value,en:translateText}])
    }
    const addWorkFuncENG = () =>{
        setHistories([...histories,{id:uuidv4(),tr:valueENG,en:translateTextENG}])
    }

    return(
        <TranslateContext.Provider value={{histories,translateFilterCeviri,value,setValue,translateText,addWorkFunc,valueENG,setValueENG,translateTextENG,translateFilterCeviriENG,addWorkFuncENG}}>
            {props.children}
        </TranslateContext.Provider>
    )
}
export default TranslateContextProvider;
