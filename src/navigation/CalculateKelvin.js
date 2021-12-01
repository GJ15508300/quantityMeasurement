
export const CalculateKelvin=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return (data-273.15);
    case 1:
        return (data-273.15) * 9/5 + 32;
    case 2:
        return data;
        }
};