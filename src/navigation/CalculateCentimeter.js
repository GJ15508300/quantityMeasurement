export const CalculateCentimeter = (data, toindex2) => {

  switch (toindex2) {
    case 0:
      return data;
    case 1:
      return data / 100;
    case 2:
      return data / 100000;
    case 3:
      return data * 10;
    default:
      toindex2=1;
        return data/100;
  }
};
