export default function getTotalPtWithRatings(businesses) {
  return businesses.filter(b => b.rating && b.rating > 0).length;
}
