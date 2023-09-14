
export const chainInfo = (id) => {
  let name = "_";
  if(id == 80001){
    name = 'Polygon Testnet';
  }else if(id == 43113){
    name = 'Avalanche Testnet';
  }else if(id == 8081){
    name = 'Shardeum Testnet';
  }
  return `${name}`;
};

export const chainFactory = (id) => {
  let contract;
  if(id == 80001){
    contract = '0xD024900E4CAE83019cD4c19df950a0a6329584Ed';
  }else if(id == 41){
    contract = '0x17d8aB0Fd5Ee0a844622eaFF4db1f1d5dF5DdB01';
  }else if(id == 8081){
    contract = '0xe48ff597F0fA1d837e49Bc90025792EC828A6f86';
  }else if(id == 1287){
    contract = '0x6d9BD4e1A1D7Daeb39b9C203643fDCA3751CC3F4';
  }
  return `${contract}`;
};