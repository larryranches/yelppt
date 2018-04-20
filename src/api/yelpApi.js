import env from '../../env';

const BASE_URL = 'https://api.yelp.com/v3/businesses/search';
const RADIUS = 1610; // 1 mile radius in meters
const MAX_LIMIT = 50; // yelp fusion api can only receive max 50
const CATEGORIES = 'physicaltherapy';
const SORT_BY = 'best_match';

export async function getYelpResultsApi(searchLocation) {
  if (!env.YELP_API_KEY) {
    throw new Error('Please supply a Yelp Api Key!');
  }

  try {
    const response = await fetch(
      `${BASE_URL}?location=${searchLocation}&radius=${RADIUS}&categories=${CATEGORIES}&limit=${MAX_LIMIT}&sort_by=${SORT_BY}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${env.YELP_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
