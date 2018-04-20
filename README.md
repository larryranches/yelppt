[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# yelppt
React Native app using the Yelp Api to find physical therapists via user input location

<p float="left">
    <img src="https://github.com/larryranches/yelppt/blob/master/yelppt-ios.gif" width="300" /> 
  <img src="https://github.com/larryranches/yelppt/blob/master/yelppt-android.gif" width="300" />
</p>

## Instructions

1. Clone the repo

2. ```npm install```

3. Important! Add your Yelp Api key in the env.js file in the root inside the single quotes

```
const env = {
  YELP_API_KEY: '',
};

export default env;
```

4. ```react-native run-ios``` or ```react-native run-android```
