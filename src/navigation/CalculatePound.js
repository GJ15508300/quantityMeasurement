
export const CalculatePound=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data/2.205;
    case 1:
        return data*453592;
    case 2:
        return data/2205;
    case 3:
        return data;
        }
};
