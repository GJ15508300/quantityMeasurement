

export const CalculateInch=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data/1550;
    case 1:
        return data;
    case 2:
        return data/1.55e+7;
        }
};