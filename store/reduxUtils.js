export const createActionCreator = action => arg => ({
  type: action,
  data: arg,
});

export const createSignalAction = (base, reducerName) =>
  ["REQUEST", "SUCCESS", "PENDING", "FAILURE", "CLEAR"].reduce((prev, curr) => {
    const newPrev = prev;
    newPrev[curr] = `SIGNAL/${base}/${reducerName}/${curr}`;
    newPrev[curr.toLowerCase()] = createActionCreator(prev[curr]);
    return newPrev;
  }, {});
