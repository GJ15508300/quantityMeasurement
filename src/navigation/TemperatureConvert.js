import { CalculateCelsius } from "./CalculateCelsius";
import { CalculateKelvin } from "./CalculateKelvin";
import { CalculateFahrenheit } from "./CalculateFahrenheit";


export const TemperatureConvert=function (data,fromindex1,toindex2) 
{
    let result;
 switch(fromindex1)
 {
    case 0:
        result= CalculateCelsius(data,toindex2);
        return result;
    case 1:
        result= CalculateFahrenheit(data,toindex2);
        return result;
    case 2:
        result= CalculateKelvin(data,toindex2);
        return result;
    default:
        fromindex1=0;
        result= CalculateCelsius(data,toindex2);
        return result;
    
        }
}
 