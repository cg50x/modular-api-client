(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Test = {})));
}(this, (function (exports) { 'use strict';

// This class only pretends to make http calls. Instead it just prints to the console.
var HttpAdapter = /** @class */ (function () {
    function HttpAdapter() {
    }
    HttpAdapter.prototype.get = function (url) {
        console.log("GET " + url);
        return Promise.resolve(true);
    };
    HttpAdapter.prototype.post = function (url, params) {
        console.log("POST " + url);
        console.log("  params: " + params);
        return Promise.resolve(true);
    };
    HttpAdapter.prototype.put = function (url, params) {
        console.log("PUT " + url);
        console.log("  params: " + params);
        return Promise.resolve(true);
    };
    HttpAdapter.prototype.delete = function (url) {
        console.log("DELETE " + url);
        return Promise.resolve(true);
    };
    return HttpAdapter;
}());

var APIClient = /** @class */ (function () {
    function APIClient() {
        this.httpAdapter = new HttpAdapter();
    }
    APIClient.prototype.setConfig = function (newConfig) {
        this.config = newConfig;
    };
    APIClient.prototype.create = function (config) {
        var newInstance = createAPIClient();
        newInstance.setConfig(config);
        return newInstance;
    };
    APIClient.prototype.checkCompatibility = function () {
        // TODO implement this
    };
    APIClient.prototype.login = function (credentials) {
    };
    return APIClient;
}());
function createAPIClient() {
    return new APIClient();
}
function addService(key, createServiceFn) {
    var serviceInstance = createServiceFn();
    Object.defineProperty(APIClient.prototype, key, {
        get: function () {
            var currClient = this;
            // Create a new object from the service whose client prop points to the client
            var newService = Object.create(serviceInstance);
            newService.client = currClient;
            // Attach the new service directly to the client object so that the service doesn't get created again.
            Object.defineProperty(currClient, key, {
                get: function () {
                    return newService;
                }
            });
            return newService;
        }
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var BaseAPIService = /** @class */ (function () {
    function BaseAPIService() {
    }
    return BaseAPIService;
}());

var CoreAPIService = /** @class */ (function (_super) {
    __extends(CoreAPIService, _super);
    function CoreAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CoreAPIService.prototype, "apiVersion", {
        get: function () {
            return '1.0.0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreAPIService.prototype, "baseUrl", {
        get: function () {
            return this.client.config.apiUrls.core;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreAPIService.prototype, "httpAdapter", {
        get: function () {
            return this.client.httpAdapter;
        },
        enumerable: true,
        configurable: true
    });
    CoreAPIService.prototype.getStatus = function () {
        return this.httpAdapter.get(this.baseUrl + "/status");
    };
    CoreAPIService.prototype.login = function (credentials) {
        return this.httpAdapter.post(this.baseUrl + "/login", credentials);
    };
    return CoreAPIService;
}(BaseAPIService));

var UserAPIService = /** @class */ (function (_super) {
    __extends(UserAPIService, _super);
    function UserAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserAPIService.prototype, "apiVersion", {
        get: function () {
            return '1.0.1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAPIService.prototype, "baseUrl", {
        get: function () {
            return this.client.config.apiUrls.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserAPIService.prototype, "httpAdapter", {
        get: function () {
            return this.client.httpAdapter;
        },
        enumerable: true,
        configurable: true
    });
    UserAPIService.prototype.getStatus = function () {
        return this.httpAdapter.get(this.baseUrl + "/status");
    };
    UserAPIService.prototype.getUsers = function () {
        return this.httpAdapter.get(this.baseUrl + "/users");
    };
    UserAPIService.prototype.getUser = function (userId) {
        return this.httpAdapter.get(this.baseUrl + "/users/" + userId);
    };
    UserAPIService.prototype.putUser = function (userId, params) {
        return this.httpAdapter.put(this.baseUrl + "/users/" + userId, params);
    };
    UserAPIService.prototype.getUserFriends = function (userId) {
        return this.httpAdapter.get(this.baseUrl + "/users/" + userId + "/friends");
    };
    UserAPIService.prototype.deleteUserFriend = function (userId, friendId) {
        return this.httpAdapter.delete(this.baseUrl + "/users/" + userId + "/friends/" + friendId);
    };
    UserAPIService.prototype.postUserFriend = function (userId, params) {
        return this.httpAdapter.post(this.baseUrl + "/users/" + userId + "/friends", params);
    };
    return UserAPIService;
}(BaseAPIService));

var AdsAPIService = /** @class */ (function (_super) {
    __extends(AdsAPIService, _super);
    function AdsAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AdsAPIService.prototype, "apiVersion", {
        get: function () {
            return '1.2.0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdsAPIService.prototype, "baseUrl", {
        get: function () {
            return this.client.config.apiUrls.ads;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdsAPIService.prototype, "httpAdapter", {
        get: function () {
            return this.client.httpAdapter;
        },
        enumerable: true,
        configurable: true
    });
    AdsAPIService.prototype.getStatus = function () {
        return this.httpAdapter.get(this.baseUrl + "/status");
    };
    AdsAPIService.prototype.getAds = function () {
        return this.httpAdapter.get(this.baseUrl + "/ads");
    };
    AdsAPIService.prototype.getAd = function (adId) {
        return this.httpAdapter.get(this.baseUrl + "/ads/" + adId);
    };
    AdsAPIService.prototype.postAd = function (adId, params) {
        return this.httpAdapter.post(this.baseUrl + "/ads/" + adId, params);
    };
    AdsAPIService.prototype.putAd = function (adId, params) {
        return this.httpAdapter.put(this.baseUrl + "/ads/" + adId, params);
    };
    AdsAPIService.prototype.deleteAd = function (adId, params) {
        return this.httpAdapter.delete(this.baseUrl + "/ads/" + adId);
    };
    AdsAPIService.prototype.publishAd = function (adId) {
        return this.httpAdapter.post(this.baseUrl + "/ads/" + adId + "/publish", null);
    };
    AdsAPIService.prototype.getAdViewers = function (adId) {
        return this.httpAdapter.get(this.baseUrl + "/ads/" + adId + "/viewers");
    };
    return AdsAPIService;
}(BaseAPIService));

var client = createAPIClient();
addService('core', function () {
    return new CoreAPIService();
});
addService('ads', function () {
    return new AdsAPIService();
});
addService('user', function () {
    return new UserAPIService();
});

exports.client = client;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
