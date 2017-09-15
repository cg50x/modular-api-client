import { HttpAdapter } from './http-adapter';
import { APIClientConfig } from './api-client-config';

export class APIClient {
    public config: APIClientConfig;
    public httpAdapter: HttpAdapter;
    public accessToken: string;
    constructor() {
        this.httpAdapter = new HttpAdapter();
    }

    public setConfig(newConfig: APIClientConfig) {
        this.config = newConfig;
    }

    public create(config: APIClientConfig): APIClient {
        const newInstance = createAPIClient();
        newInstance.setConfig(config);
        return newInstance;
    }

    public checkCompatibility() {
        // TODO implement this
    }

    public login(credentials) {
    }
}

export function createAPIClient() {
    return new APIClient();
}

export function addService(key: string, createServiceFn: Function): void {
    const serviceInstance = createServiceFn();
    Object.defineProperty(APIClient.prototype, key, {
        get: function () {
            const currClient = this;
            // Create a new object from the service whose client prop points to the client
            const newService = Object.create(serviceInstance);
            newService.client = currClient;

            // Attach the new service directly to the client object so that the service doesn't get created again.
            currClient[key] = newService;

            return newService;
        }
    });
}
