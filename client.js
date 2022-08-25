const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'T5JIUdMBYOL8PftDWOIkS2tcW',
  appSecret: 'LZnuQc1eD7y3TSejmeATPMIeC4GEmBO6choSgK1TMkuLY9r1qT',
  accessToken: '1562790678127857666-GgLQceeMDxCbO1EUXAE4oHVESNbvh9',
  accessSecret: 'aKFGxNBMBzaZT4j6K5eAPlItluY85g3To45yGfTvsUch5',
});

const rwClient = client.readWrite;

module.exports = rwClient;
