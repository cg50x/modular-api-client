import { addService } from '../../api-client';
import { UserAPIService } from './user-api-service';

addService('user', () => {
    return new UserAPIService();
});
