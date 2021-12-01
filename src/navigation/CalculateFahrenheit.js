
export const CalculateFahrenheit=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return (data- 32) * 5/9;
    case 1:
        return data;
    case 2:
        return (data- 32) * (5/9) + (273.15);
        }
}
 