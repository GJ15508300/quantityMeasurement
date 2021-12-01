
export const CalculateKillogram=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data;
    case 1:
        return data*1e+6;
    case 2:
        return data/1000;
    case 3:
        return data*1e+6;
    default:
        return data*1e+6;
        }
};