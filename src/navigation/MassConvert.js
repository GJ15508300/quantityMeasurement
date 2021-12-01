import { CalculateKillogram } from "./CalculateKillogram";
import { CalculateMilligram } from "./CalculateMilligram";
import { CalculatePound } from "./CalculatePound";
import { CalculateTone } from "./CalculateTone";


export const MassConvert=function (data,fromindex1,toindex2) 
{
    let result ;
 switch(fromindex1){
    case 0:
        result = CalculateKillogram(data,toindex2);
        return result;
    case 1:
        result = CalculateMilligram(data,toindex2);
        return result;
    case 2:
        result = CalculateTone(data,toindex2);
        return result;
    case 3:
        result = CalculatePound(data,toindex2);
        return result;
    default :
        fromindex1=0;
        result = CalculateKillogram(data,toindex2);
        return result;
        }
} 