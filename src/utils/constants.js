import { getRangeOptionLabel } from 'utils/helpers';

export const allOption = {
  label: 'All',
  value: 'all'
};

const createRangeOption = ({ min, max, suffix }) => ({
  label: getRangeOptionLabel({ min, max, suffix }),
  value: JSON.stringify({
    min,
    max
  })
});

export const priceOptions = [
  allOption,
  createRangeOption({ max: 15, suffix: '$' }),
  createRangeOption({ min: 15, max: 30, suffix: '$' }),
  createRangeOption({ min: 30, suffix: '$' })
];
