import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Orange, Primary, Bg } from '../colors/colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';

export default function Dashboard({openDrawer, navigation}) {
  return (
    <View style={{flex:1, backgroundColor:Bg, justifyContent:"center", alignItems:"center"}}>
      <View style={{height:120, borderBottomLeftRadius:35,  borderBottomRightRadius:35, flexDirection:'row', width:"100%", backgroundColor:Primary}}>
        <TouchableOpacity onPress={openDrawer} style={{flex:1, justifyContent:"center", paddingLeft:10, alignItems:"flex-start"}}>
        <Foundation name="align-left" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex:3, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#fff", fontSize:28}}>Saferly</Text>

      </View>
      <View style={{flex:2, flexDirection:"row", }}>
        <TouchableOpacity style={{flex:1, alignItems:"center", justifyContent:"center" }}>
          <View style={{height:50, borderRadius:15, alignItems:"center", justifyContent:"center",width:50, backgroundColor:Orange}}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, alignItems:"center", justifyContent:"center" }}>
          <View style={{height:50, borderRadius:15, justifyContent:"center",alignItems:"center", width:50, backgroundColor:Orange}}>
          <SimpleLineIcons name="options-vertical" size={17} color="#fff" />
          </View>
        </TouchableOpacity>

      </View>

      </View>

      {/* end of appbar */}
      {/* start of search component */}
      <View style={{width:"90%", flexDirection:"row", borderRadius:15, marginLeft:17, marginRight:17, height: 60, marginTop:10, backgroundColor:"#fff",}}>
        <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
        <AntDesign name="search1" size={20} color="black" />
        </View>
        <View style={{flex:4, alignItems:"center", justifyContent:"center",}}>
          <TextInput style={{width:"100%"}} placeholder='Search people reports'/>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Feather name="align-left" size={24} color={Orange} />
        </View>

      </View>
      {/* end of search */}

      {/* start of tabs */}
      <View style={{ marginBottom:20, height:120, width:"90%", justifyContent:"space-between", marginTop:10, flexDirection:"row", }}>
    <TouchableOpacity onPress={()=>{}} style={{height: 140, alignItems:"center",justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <FontAwesome5 name="hands" size={24} color={Orange} />
    <Text style={{fontSize:20, fontWeight:"bold"}}>Get a Service</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{height: 140, alignItems:"center", justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <MaterialCommunityIcons name="palm-tree" size={44} color={Orange}/>
    <Text style={{fontSize:20, fontWeight:"bold"}}>Invest in Safety</Text>
    </TouchableOpacity>
      </View>
      {/* end of tabs */}
         {/* start of tabs */}
         <View style={{ marginBottom:20, height:120, width:"90%", justifyContent:"space-between", marginTop:10, flexDirection:"row", }}>
    <TouchableOpacity style={{height: 140, alignItems:"center",justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <Feather name="plus-square" size={44} color={Orange} />
    <Text style={{fontSize:20, fontWeight:"bold"}}>Add a Report</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{height: 140, alignItems:"center", justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <Octicons name="verified" size={44} color={Orange} />
    <Text style={{fontSize:20, fontWeight:"bold"}}>Verify Someone</Text>
    </TouchableOpacity>
      </View>
      {/* end of tabs */}
         {/* start of tabs */}
         <View style={{ marginBottom:20, height:120, width:"90%", justifyContent:"space-between", marginTop:10, flexDirection:"row", }}>
    <TouchableOpacity style={{height: 140, alignItems:"center",justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <AntDesign name="contacts" size={44} color={Orange} />
    <Text style={{fontSize:20, fontWeight:"bold"}}>My Contacts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{height: 140, alignItems:"center", justifyContent:"center", width: 155, borderRadius:16, backgroundColor:"#fff"}}>
    <FontAwesome5 name="map-marked-alt" size={44} color={Orange} />
    <Text style={{fontSize:20, fontWeight:"bold"}}>Track Me</Text>
    </TouchableOpacity>
      </View>
      {/* end of tabs */}
      {/* start of button */}
      <TouchableOpacity style={{width:"90%", marginTop:20, height:60, borderRadius:10, alignItems:"center", justifyContent:"center", backgroundColor:Orange}}>
        <Text style={{fontSize:19, fontWeight:"bold", color:"#fff"}}>Alert Contacts</Text>

      </TouchableOpacity>


      {/* end of button */}
      
      
    </View>
  )
}