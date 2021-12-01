

export const CalculateHectare=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data*10000;
    case 1:
        return data*1.55e+7;
    case 2:
        return data;
        }
};