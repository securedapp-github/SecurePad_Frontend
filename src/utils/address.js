
export const formatAddress = (address) => {
    const prefixLength = 6; // Number of characters to keep at the beginning
    const suffixLength = 4; // Number of characters to keep at the end
    const separator = '...'; // Separator between the shortened parts
  
    const prefix = address.substring(0, prefixLength);
    const suffix = address.substring(address.length - suffixLength);
  
    return `${prefix}${separator}${suffix}`;
  };