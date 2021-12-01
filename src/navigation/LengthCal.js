import {  CalculateCentimeter } from "./CalculateCentimeter";
import { CalculateKillometer } from "./CalculateKillometer";
import { CalculateMeter } from "./CalculateMeter";
import { CalculateMillimeter } from "./CalculateMillimeter";


export const LengthCal= function (data,fromindex1,toindex2) 
{
    let result;
 switch(fromindex1){
    
    case 0:
         result= CalculateCentimeter(data,toindex2);
        console.log("Length result ",result);
        return result
    case 1:
         result=  CalculateMeter(data,toindex2);
        console.log("Length result ",result);
        return result
    case 2:
         result= CalculateKillometer(data,toindex2);
        console.log("Length result ",result);
        return result
    case 3:
         result= CalculateMillimeter(data,toindex2);
        console.log("Length result ",result);
        return result 
    default:       
        fromindex1=0;
        result= CalculateCentimeter(data,toindex2);
        console.log("Length result ",result,"---fromindex",fromindex1,"toindex",toindex2);
        return result
        }
}
