import React, { Component, useState } from "react";
import SelectDropdown from 'react-native-select-dropdown'
import { View, StyleSheet,TextInput,Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { AreaConvert } from "./AreaConvert";
import { MassConvert } from "./MassConvert";
import { LengthCal } from "./LengthCal";
import { TemperatureConvert } from "./TemperatureConvert";
 
const MainValues = [ "Length", "Mass", "Temperature", "Area"]
const TemperatureValues = ["Celsius", "Fahrenheit", "Kelvin"]
const Lengthvalues = ["centimeter", "Meter", "Killometer", "Millimeter"]
const MassValues = ["killogram","Milligram", "tonne", "Pound"]
const Areavalues = ["Square Meter", "Square inch", "Hectare"]

    function Qmain() { 
        const [value,setValue]=useState('');   
        const [myindex,setindex]=useState(' ');
        const [lefttext, setleftText] = useState(" ");
        const [righttext,setrighttext] = useState(" ");
        const [value1,setValue1]=useState(''); 
        const [index1,setindex1]=useState(' ')
        const [value2,setValue2]=useState('');  
        const [index2,setindex2]=useState(' ')      
       
        

        
        console.log("left text",lefttext);
        console.log("Right txt",righttext);
        
        
    function indexconvert(data,fromindex1,toindex2,firstindex,side)
        {
        console.log("my index datas---data",data,"fromindex1",fromindex1,"toindex2",toindex2,"firstindex",firstindex);
        switch(firstindex)
            {
        case 0:
            return side==="lft" ? setrighttext(LengthCal(data,fromindex1,toindex2)) : setleftText(LengthCal(data,fromindex1,toindex2));

        case 1:
            return side==="lft" ? setrighttext(MassConvert(data,fromindex1,toindex2)) : setleftText(LengthCal(data,fromindex1,toindex2));
        case 2: 
            return side==="lft" ? setrighttext(TemperatureConvert(data,fromindex1,toindex2)) : setleftText(LengthCal(data,fromindex1,toindex2));
        case 3:
            return side==="lft" ? setrighttext(AreaConvert(data,fromindex1,toindex2)) : setleftText(LengthCal(data,fromindex1,toindex2));
            }
        }
       
    return (
      <View style={styles.container} >
          {value==='Length' ?
<Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_cu-25T1VwDSbFZM0IiFrjURrBYHIdCm2A&usqp=CAU'}}  
       style={{width: 370, height: 200}} />  : null }
       {value=='Mass' ?
<Image source={{uri: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2021/02/28170423/Mass.png'}}  
       style={{width: 370, height: 200}} />  : null }

{value=='Temperature' ?
<Image source={{uri: 'https://www.worldatlas.com/r/w768/upload/db/2e/0f/shutterstock-691981369.jpg'}}  
       style={{width: 370, height: 200}} />  : null }

{value=='Area' ?
<Image source={{uri: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/the-difference-between-area-and-perimeter_ver_1.png'}}  
       style={{width: 370, height: 200}} />  : null }
         
        <SelectDropdown	
          data={MainValues}
          onSelect={(selectedItem, index) => {
            setValue(selectedItem)   ;
            setindex(index)         
        }}         
        />
        

        <View>        
            {/* if condition starts */}

 
        {value === 'Length'? 
                <View style={styles.sameline}>   
                <View style={styles.col}>
               
            <SelectDropdown	
                    defaultValue={'centimeter'} 
                    
                    data={Lengthvalues}
                    onSelect={(selectedItem1, index) => {   
                    setValue1(selectedItem1)
                    setindex1(index)     
                    indexconvert(lefttext,index1,index2,myindex,"lft")    }}       />                
            <TextInput
                    style={{height: 40}} 
                    placeholder="mr txt"
                      
    onChangeText={text =>{setleftText(text);indexconvert(text,index1,index2,myindex,"lft")}}
                    value={lefttext.toString()}       />
            </View>
            <View style={styles.col}> 
            <SelectDropdown	
                    defaultValue={'Meter'}
                    data={Lengthvalues}
                    onSelect={(selectedItem, index) => {
                    setValue2(selectedItem)
                    setindex2(index)  
                    indexconvert(righttext,index1,index2,myindex,"rht")              }}        />
                             
            <TextInput
                    style={{height: 40}} 
                    placeholder="Type here to !"                      
    onChangeText={text =>{indexconvert(text,index1,index2,myindex,"rht")}}
                    Value={righttext.toString()}            /> 
                                                      
        </View>      
                
        </View> 
            : null }  









        {value === 'Mass'?  
            <View style={styles.sameline}>
            <View style={styles.col}>

            <SelectDropdown	
            defaultValue={'killogram'}
            data={MassValues}
            onSelect={(selectedItem1, index) => {   
                        setValue1(selectedItem1)
                        setindex1(index)
                        indexconvert(lefttext,index1,index2,myindex,"lft") 
                }}
            />
            
            <TextInput
            style={{height: 40,backgroundColor:'blue'}} 
            placeholder="Type here to translate!"       
            onChangeText={text =>{setleftText(text);indexconvert(text,index1,index2,myindex,"lft")}}
            value={lefttext.toString()}                    
            />
            </View>
        
        <View style={styles.col}>
        <SelectDropdown	
            defaultValue={'Milligram'}
            data={MassValues}
            onSelect={(selectedItem, index) => {
                setValue2(selectedItem)
                setindex2(index)
                indexconvert(righttext,index1,index2,myindex,"rht")  
            }}              
            /> 
        
        <TextInput
                    style={{height: 40}} 
                    placeholder="Type here to !"                      
    onChangeText={text =>{setrighttext(text);indexconvert(text,index1,index2,myindex,"rht")}}
                    Value={righttext.toString()}              />                       
            </View>
    </View> 
        : null } 
 


          {value === 'Temperature'? 
                <View style={styles.sameline}>
                <View style={styles.col}>
    
                <SelectDropdown	
                defaultValue={'Celsius'}
                data={TemperatureValues}
                onSelect={(selectedItem1, index) => {   
                            setValue1(selectedItem1)
                            setindex1(index)
                            indexconvert(lefttext,index1,index2,myindex,"lft") 
                    }}
                />
                
                <TextInput
                style={{height: 40}} 
                placeholder="Type here to translate!"       
                onChangeText={text =>{setleftText(text);indexconvert(text,index1,index2,myindex,"lft")}}
                value={lefttext.toString()}                  
                />
                </View>
            
            <View style={styles.col}>
            <SelectDropdown	
                defaultValue={'Fahrenheit'}
                data={TemperatureValues}
                onSelect={(selectedItem, index) => {
                    setValue2(selectedItem)
                    setindex2(index)
                    indexconvert(righttext,index1,index2,myindex,"rht")  
                }}              
                /> 
            
            <TextInput
                    style={{height: 40}} 
                    placeholder="Type here to !"                      
    onChangeText={text =>{setrighttext(text);indexconvert(text,index1,index2,myindex,"rht")}}
                    Value={righttext.toString()}              />                            
                </View>
        </View> 
            : null } 



{value === 'Area'? 
            <View style={styles.sameline}>
            <View style={styles.col}>

            <SelectDropdown	
            defaultValue={'Square Meter'}
            data={Areavalues}
            onSelect={(selectedItem1, index) => {   
                        setValue1(selectedItem1)
                        setindex1(index)
                        indexconvert(lefttext,index1,index2,myindex,"lft") 
                }}
            />
            
            <TextInput
            style={{height: 40}} 
            placeholder="Type here to translate!"       
            onChangeText={text =>{setleftText(text);indexconvert(text,index1,index2,myindex,"lft")}}
            value={lefttext.toString()}         
            />
            </View>
        
        <View style={styles.col}>
        <SelectDropdown	
            defaultValue={'Square inch'}
            data={Areavalues}
            onSelect={(selectedItem, index) => {
                setValue2(selectedItem)
                setindex2(index)
                indexconvert(righttext,index1,index2,myindex,"rht")  
            }}              
            /> 
       
       <TextInput
                    style={{height: 40}} 
                    placeholder="Type here to !"                      
    onChangeText={text =>{setrighttext(text);indexconvert(text,index1,index2,myindex,"rht")}}
                    Value={righttext.toString()}              />                             
            </View>
    </View> 
        : null } 




   
  </View>
  <View style={styles.button}>
            <Text >Left text box value </Text>
                <Button 
                    title={lefttext.toString()}
                    />     
           </View>
  
  <View style={styles.button}>
         <Text> Right text box value</Text>
         
                <Button 
                    title={righttext.toString()}
                    />     
            </View>
 
      </View>
    );
  }
  
  export default Qmain;



  const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 30,
     justifyContent: 'flex-start',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      sameline:
      {
        padding: 5,
          justifyContent: 'space-around',
          flexDirection: 'row',
         
      },
      col: {
          justifyContent:'center',
          flexDirection:'column',
          padding:0,
          borderBottomColor:'red',
          backgroundColor:'gray',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 2,
        borderRadius: 1,
        elevation: 3,        
      },
  });