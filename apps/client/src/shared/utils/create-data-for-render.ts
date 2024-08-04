export const createDataForRender = <T, U>(
  arr1: T[],
  arr2: U[],
): { id: number; description: T; info: U }[] => {
  if (arr1.length !== arr2.length) {
    return [];
  }

  return arr1.map((value, index) => ({
    id: index + 1,
    description: value,
    info: arr2[index],
  }));
};
