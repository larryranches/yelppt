import _ from 'lodash';

export default function getAverageRating(businesses) {
  const average = _.meanBy(businesses, b => b.rating);

  return _.round(average, 2).toFixed(2);
}
