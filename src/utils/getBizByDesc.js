import _ from 'lodash';

export default function getBizByDesc(businesses) {
  return _.orderBy(businesses, b => b.rating).reverse();
}
