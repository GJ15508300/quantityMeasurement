import { CalculateSquaremeter } from "./CalculateSquaremeter";
import { CalculateInch } from "./CalculateInch";
import { CalculateHectare } from "./CalculateHectare";
export const AreaConvert=function(data,fromindex1,toindex2) 
{
    let result;
 switch(fromindex1){
    case 0:
        result= CalculateSquaremeter(data,toindex2);
        return result
    case 1:
        result=CalculateInch(data,toindex2);
        return result
    case 2:
        result= CalculateHectare(data,toindex2);
        return result
    default:
        fromindex1=0;
        result= CalculateSquaremeter(data,toindex2);
        return result
    
        }
}
