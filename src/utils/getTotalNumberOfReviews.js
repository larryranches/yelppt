import _ from 'lodash';

export default function getTotalNumberOfReviews(businesses) {
  return _.sumBy(businesses, b => b.review_count);
}
