export const CalculateMeter = (data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data*100;
    case 1:
        return data;
    case 2:
        return data/1000;
    case 3:
        return data*1000;
    default:
        toindex2=1;
        return data;
        }
};