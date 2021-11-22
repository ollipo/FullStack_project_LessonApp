module.exports = {
  env: {
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }],
    'no-param-reassign': [2, {
      props: false,
    }],
  },
};
