export const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

export const parseJson = data => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};

export const getRangeOptionLabel = ({ min, max, suffix }) => {
  switch (true) {
    case !min || min === 0:
      return `Less than ${max}${suffix}`;
    case !max || max === Infinity:
      return `More than ${min}${suffix}`;
    default:
      return `From ${min}${suffix} to ${max}${suffix}`;
  }
};
