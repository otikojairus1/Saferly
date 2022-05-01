import { View, Text, TouchableOpacity,ScrollView, TextInput} from 'react-native'
import React from 'react'
import {Primary, Orange} from '../colors/colors'
import { Foundation, Feather, AntDesign, MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import { Image,  } from 'native-base';

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
      <View style={{flex:2, marginLeft:12, flexDirection:"row", }}>
      
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

      {/* START OF Contacts */}

      
      
      <ConversationList name={"Judie Gishuru"} dp={"https://images.unsplash.com/photo-1591933319095-9bc25b14b0b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=351&q=80"} />
      <ConversationList name={"Anet WAmboi"} dp={"https://images.unsplash.com/photo-1571951178107-b061c6ae01aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
      <ConversationList name={"Alice Wesonga"} dp={"https://images.unsplash.com/photo-1613876215075-276fd62c89a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
      <ConversationList name={"Mildred Tenai"} dp={"https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}/>
      <ConversationList name={"Juliet anet"} dp={"https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}/>
      <ConversationList name={"Mwanaisha hamidu"} dp={"https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}/>
      <ConversationList name={"Conzolata mzima"} dp={"https://images.unsplash.com/photo-1527201987695-67c06571957e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80"}/>
    {/* end of contacts */}


      <TouchableOpacity style={{height:50, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:10, elevation:5, backgroundColor:Orange, width:"90%"}}>
        <Text style={{fontSize:20, fontWeight:"bold", color:"#fff"}}>Alert Contacts</Text>
      </TouchableOpacity>
    </View>
  )
}


function ConversationList({dp, name}){
  return(
    <TouchableOpacity style={{height: 70, flexDirection:"row",  marginTop:1, justifyContent :"center", width:"90%",}}>
    <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
      <Image alt='dp' style={{height:60, borderRadius:60, width:60}} source={{uri:dp} }/>
    </View>
    <View style={{flex:4,justifyContent:'center', marginLeft:20}}>
      <View style={{}}>
        <Text style={{fontSize:20, fontWeight:"bold",}}>{name}</Text>
        <Text style={{fontSize:20, fontWeight:"bold", color:"grey"}}>Police Nyahururu </Text>
      </View>
    </View>
  </TouchableOpacity>
  );
}