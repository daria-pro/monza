export const getFilterOptions = (array, key) => {
  let filteredArray = [];
  const lowerCaseKey = key.toLowerCase();
  for (const item of array) {
    if (!filteredArray.includes(item[lowerCaseKey])) {
      filteredArray.push(item[lowerCaseKey]);
    }
  }
  return filteredArray.sort((a, b) => a - b);
};

export const toNumber = (str) => {
  let filteredNumbers = str.replace(/\D/g, "");
  return parseInt(filteredNumbers);
};
