import { createAPIClient, addService } from './api-client';
import { CoreAPIService } from './core-api-service';
import { UserAPIService } from './user-api-service';
import { AdsAPIService } from './ads-api-service';

export const client = createAPIClient();

addService('core', () => {
    return new CoreAPIService();
});

addService('ads', () => {
    return new AdsAPIService();
});

addService('user', () => {
    return new UserAPIService();
});
