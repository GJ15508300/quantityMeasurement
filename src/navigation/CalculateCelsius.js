
 export const CalculateCelsius=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data;
    case 1:
        return ((data* 9/5)+32);
    case 2:
        return data+273.15;
    default:
         toindex2=1;
         return ((data* 9/5)+32);
        }
}
