

export  const CalculateSquaremeter=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data;
    case 1:
        return data*1550;
    case 2:
        return data/10000;
    default:
        toindex2=1;
        return data*1550;
        }
};