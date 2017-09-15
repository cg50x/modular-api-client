import { addService } from '../../api-client';
import { AdsAPIService } from './ads-api-service';

addService('ads', () => {
    return new AdsAPIService();
});
