
export const CalculateKillometer=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data*100000;
    case 1:
        return data*1000;
    case 2:
        return data;
    case 3:
        return data*1e+6;
    default:
        toindex2=1;
        return data*1000;
        }
}