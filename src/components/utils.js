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
