import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import {Primary, Orange} from '../colors/colors'
import { Foundation, Feather, AntDesign, MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';

export default function Contacts() {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center" }}>
           <View style={{height:90,  flexDirection:'row', width:"100%", backgroundColor:Primary}}>
        <TouchableOpacity style={{flex:1, justifyContent:"center", paddingLeft:10, alignItems:"flex-start"}}>
        <Foundation name="align-left" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex:3, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#fff", fontSize:22}}>Saferly Contacts</Text>

      </View>
      <View style={{flex:2, flexDirection:"row", }}>
      
        <TouchableOpacity style={{flex:1, alignItems:"center", justifyContent:"center" }}>
          <View style={{height:50, borderRadius:15, justifyContent:"center",alignItems:"center", width:50, backgroundColor:Orange}}>
          <AntDesign name="plus" size={24} color="#fff" />
          </View>
        </TouchableOpacity>

      </View>
    

      </View>
            {/* start of search component */}
            <View style={{width:"100%", height:80,borderBottomLeftRadius:35,   borderBottomRightRadius:35, backgroundColor:Primary}}>

            <View style={{width:"90%", flexDirection:"row", borderRadius:15, paddingBottom:20, marginLeft:17, marginRight:17, height: 60, marginTop:10, backgroundColor:"#fff",}}>
        <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
        <AntDesign name="search1" size={20} color="black" />
        </View>
        <View style={{flex:4, alignItems:"center", justifyContent:"center",}}>
          <TextInput style={{width:"100%"}} placeholder='Search people reports'/>
        </View>
     

      </View>
            </View>
     
      {/* end of search */}

      {/* end of appbar */} 
    </View>
  )
}