

export const CalculateMilligram=(data,toindex2) =>
{
 switch(toindex2){
    case 0:
        return data/1e+6;
    case 1:
        return data;
    case 2:
        return data/1e+9;
    case 3:
        return data/453592;
        }
};
