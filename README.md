# modular-api-client
A modular API client example

## Notes

```
import { client } from 'modular-api-client';

// Set the config
client.config({});
// Authenticate the client
client.login(credentials);

// Core service - Methods/Endpoints provided by the core service core.example.com
client.core.login();
client.core.getStatus();
client.core.apiVersion;

// User service - user.example.com
client.user.getStatus();
client.user.getUsers();
client.user.getUser();
client.user.putUser();
client.user.getUserFriends();
client.user.deleteUserFriend();
client.user.postUserFriend();
client.user.apiVersion;

// Ads Service - ads.example.com
client.ads.getStatus();
client.ads.getAds();
client.ads.getAd(adId);
client.ads.postAd(params); ads.example.com/:
client.ads.putAd(adId, params); ads.example.com/:id
client.ads.deleteAd(adId); ads.example.com/ad/:id
client.ads.publishAd(adId); /ads.example.com/ads/publish
client.ads.getAdViewers(adId); GET ads.example.com/ads/:id/viewers
client.ads.apiVersion;

// other methods
client.create(config); // Create a new api client instance with the given config
client.checkCompatibility() // returns whether the client is compatible with the api services

// How to add a service

import { client } from 'modular-api-client';

client.addService('ads', function () {
  return new AdsService();
});

// The Modularity

Import just the services or endpoints that you need.

// Import just ads service
import { client } from 'modular-api-client/base';
import 'modular-api-client/add/services/ads';

client.ads.getStatus(); // works
client.user.getStatus(); // breaks

// Import ads service and the getAds
import { client } from 'modular-api-client/base';
import 'modular-api-client/add/services/ads/base';
import 'modular-api-client/add/services/ads/endpoints/get-ads'

client.ads.getAds();
client.ads.postAd(); // breaks

// Adding a service makes it available to all created clients

import { client } from 'modular-api-client/base';

const client2 = client.create(config2);

client.ads.getAds(); // breaks
client2.ads.getAds(); // breaks

import 'modular-api-client/add/services/ads';

client2.ads.getAds(); // works
client.ads.getAds(); // works

// Can choose to add all services by default
import { client } from 'modular-api-client';

client.core.getStatus(); // works
client.ads.getStatus(); // works
client.user.getStatus(); // works

```