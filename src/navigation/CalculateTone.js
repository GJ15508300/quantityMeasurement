
export const CalculateTone=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data*100;
    case 1:
        return data*1e+9;
    case 2:
        return data;
    case 3:
        return data*2205;
        }
};