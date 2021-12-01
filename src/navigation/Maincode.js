import React, { Component, useState } from "react";
import SelectDropdown from 'react-native-select-dropdown'
import { View, StyleSheet,TextInput,Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { IMAGENAME } from './scr/Mass.jpg';
const MainValues = [ "Length", "Mass", "Temperature", "Area"]
const TemperatureValues = ["Celsius", "Fahrenheit", "Kelvin"]
const Lengthvalues = ["centimeter", "Meter", "Killometer", "Millimeter"]
const MassValues = ["killogram","Milligram", "tonne", "Pound"]
const Areavalues = ["Square Meter", "Square inch", "Hectare"]
//export const IMAGENAME = require('./icon.png');

function convert(value,value1,value2) 
{
    {value1 == 'centimeter'  && value2 == 'Meter'?  value=value/100 : null}
    {value1 == 'centimeter'  && value2 == 'Killometer'?  value=value/100000 : null}
    {value1 == 'centimeter'  && value2 == 'Millimeter'?  value=value*10 : null}
    {value1 == 'centimeter'  && value2 == 'centimeter'?  value=value : null}
    {value1 == 'Meter'  && value2 == 'Meter'?  value=value : null}
    {value1 == 'Meter'  && value2 == 'centimeter'?  value=value*100 : null}
    {value1 == 'Meter'  && value2 == 'Killometer'?  value=value/1000 : null}
    {value1 == 'Meter'  && value2 == 'Millimeter'?  value=value*1000 : null}
    {value1 == 'Killometer'  && value2 == 'Millimeter'?  value=value*1e+6 : null}
    {value1 == 'Killometer'  && value2 == 'centimeter'?  value=value*100000 : null}
    {value1 == 'Killometer'  && value2 == 'Meter'?  value=value*1000 : null}
    {value1 == 'Killometer'  && value2 == 'Killometer'?  value=value : null}
    {value1 == 'Millimeter'  && value2 == 'Millimeter'?  value=value : null}
    {value1 == 'Millimeter'  && value2 == 'Killometer'?  value=value/1e+6 : null}
    {value1 == 'Millimeter'  && value2 == 'Meter'?  value=value/1000 : null}
    {value1 == 'Millimeter'  && value2 == 'centimeter'?  value=value/10 : null}

    {value1 == 'killogram'  && value2 == 'killogram'?  value=value : null}
    {value1 == 'killogram'  && value2 == 'Milligram'?  value=value*1e+6 : null}
    {value1 == 'killogram'  && value2 == 'tonne'?  value=value/1000 : null}
    {value1 == 'killogram'  && value2 == 'Pound'?  value=value*2.205 : null}
    {value1 == 'tonne'  && value2 == 'killogram'?  value=value*100 : null}
    {value1 == 'tonne'  && value2 == 'Milligram'?  value=value*1e+9 : null}
    {value1 == 'tonne'  && value2 == 'tonne'?  value=value : null}
    {value1 == 'tonne'  && value2 == 'Pound'?  value=value*2205 : null}
    {value1 == 'Milligram'  && value2 == 'killogram'?  value=value/1e+6 : null}
    {value1 == 'Milligram'  && value2 == 'Milligram'?  value=value : null}
    {value1 == 'Milligram'  && value2 == 'tonne'?  value=value/1e+9 : null}
    {value1 == 'Milligram'  && value2 == 'Pound'?  value=value/453592 : null}
    {value1 == 'Pound'  && value2 == 'killogram'?  value=value/2.205 : null}
    {value1 == 'Pound'  && value2 == 'Milligram'?  value=value*453592 : null}
    {value1 == 'Pound'  && value2 == 'tonne'?  value=value/2205 : null}
    {value1 == 'Pound'  && value2 == 'Pound'?  value=value : null}

    {value1 == 'Celsius'  && value2 == 'Celsius'?  value=value : null}
    {value1 == 'Celsius'  && value2 == 'Fahrenheit'?  value=((value * 9/5)+32): null}
    {value1 == 'Celsius'  && value2 == 'Kelvin'?  value=(value+273.15) : null}
    {value1 == 'Fahrenheit'  && value2 == 'Celsius'?  value=(value - 32) * 5/9 : null}
    {value1 == 'Fahrenheit'  && value2 == 'Fahrenheit'?  value=value : null}
    {value1 == 'Fahrenheit'  && value2 == 'Kelvin'?  value=(value - 32) * (5/9) + (273.15) : null}
    {value1 == 'Kelvin'  && value2 == 'Celsius'?  value=value-273.15 : null}
    {value1 == 'Kelvin'  && value2 == 'Fahrenheit'?  value=(value-273.15) * 9/5 + 32 : null}
    {value1 == 'Kelvin'  && value2 == 'Kelvin'?  value=value : null}

    {value1 == 'Square Meter'  && value2 == 'Square inch'?  value=value*1550 : null}
    {value1 == 'Square Meter'  && value2 == 'Hectare'?  value=value/10000 : null}
    {value1 == 'Square Meter'  && value2 == 'Square Meter'?  value=value : null}
    {value1 == 'Hectare'  && value2 == 'Hectare'?  value=value : null}
    {value1 == 'Hectare'  && value2 == 'Square Meter'?  value=value*10000 : null}
    {value1 == 'Hectare'  && value2 == 'Square inch'?  value=value*1.55e+7 : null}
    {value1 == 'Square inch'  && value2 == 'Hectare'?  value=value/1.55e+7 : null}
    {value1 == 'Square inch'  && value2 == 'Square Meter'?  value=value/1550 : null}
    {value1 == 'Square inch'  && value2 == 'Square inch'?  value=value : null}



    return (         
      value
    );
        
}



    function dropdownlist() {
        const [value,setValue]=useState('');   
        const [myindex,setindex]=useState(' ');
        const [text, onChangeText] = useState("Enter Number");
        const [value1,setValue1]=useState(''); 
        const [value2,setValue2]=useState('');        
        
       
    return (
      <View style={styles.container} >
          {value=='Length' ?
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

<Text>{value}--------------{myindex}</Text>
        <View>

        
            {/* if condition starts */}


        {value == 'Length'? 
                <View style={styles.sameline}>
      
                <View style={styles.col}>
               
                <SelectDropdown	
                data={Lengthvalues}
                onSelect={(selectedItem1, index) => {   
                            setValue1(selectedItem1)
                    }}
                />
                
                <TextInput
                style={{height: 40}} 
                placeholder="Type here to translate!"       
                onChangeText={text => onChangeText(text)}                
                />
                </View>
            
            <View style={styles.col}>
            <SelectDropdown	
                data={Lengthvalues}
                onSelect={(selectedItem, index) => {
                    setValue2(selectedItem)
                }}              
                /> 
           
                <Button                          
                        title={convert(text,value1,value2) }
                        color="gray"  
                    />                        
                </View>
        </View> 
            : null } 



        {value == 'Mass'?  
            <View style={styles.sameline}>
            <View style={styles.col}>

            <SelectDropdown	
            data={MassValues}
            onSelect={(selectedItem1, index) => {   
                        setValue1(selectedItem1)
                }}
            />
            
            <TextInput
            style={{height: 40}} 
            placeholder="Type here to translate!"       
            onChangeText={text => onChangeText(text)}                
            />
            </View>
        
        <View style={styles.col}>
        <SelectDropdown	
            data={MassValues}
            onSelect={(selectedItem, index) => {
                setValue2(selectedItem)
            }}              
            /> 
        
            <Button                          
                    title={convert(text,value1,value2) }
                    color="gray"  
                />                        
            </View>
    </View> 
        : null } 
 


          {value == 'Temperature'? 
                <View style={styles.sameline}>
                <View style={styles.col}>
    
                <SelectDropdown	
                data={TemperatureValues}
                onSelect={(selectedItem1, index) => {   
                            setValue1(selectedItem1)
                    }}
                />
                
                <TextInput
                style={{height: 40}} 
                placeholder="Type here to translate!"       
                onChangeText={text => onChangeText(text)}                
                />
                </View>
            
            <View style={styles.col}>
            <SelectDropdown	
                data={TemperatureValues}
                onSelect={(selectedItem, index) => {
                    setValue2(selectedItem)
                }}              
                /> 
            
                <Button                          
                        title={convert(text,value1,value2) }
                        color="gray"  
                    />                        
                </View>
        </View> 
            : null } 



{value == 'Area'? 
            <View style={styles.sameline}>
            <View style={styles.col}>

            <SelectDropdown	
            data={Areavalues}
            onSelect={(selectedItem1, index) => {   
                        setValue1(selectedItem1)
                }}
            />
            
            <TextInput
            style={{height: 40}} 
            placeholder="Type here to translate!"       
            onChangeText={text => onChangeText(text)}                
            />
            </View>
        
        <View style={styles.col}>
        <SelectDropdown	
            data={Areavalues}
            onSelect={(selectedItem, index) => {
                setValue2(selectedItem)
            }}              
            /> 
       
            <Button                          
                    title={convert(text,value1,value2) }
                    color='#006400'
                />                        
            </View>
    </View> 
        : null } 




   
  </View>
  
  
  <Text>{text}------------- converted to ---------------{ convert(text,value1,value2)  }</Text>
 
      </View>
    );
  }
  
  export default dropdownlist;



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
      }
  });