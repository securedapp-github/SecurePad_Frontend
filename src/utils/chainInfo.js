
export const chainInfo = (id) => {
    let name = "_";
    if(id == 80001){
      name = 'Polygon Testnet';
    }else if(id == 43113){
      name = 'Avalanche Testnet';
    }
    return `${name}`;
  };