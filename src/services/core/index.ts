import { addService } from '../../api-client';
import { CoreAPIService } from './core-api-service';

addService('core', () => {
    return new CoreAPIService();
});
