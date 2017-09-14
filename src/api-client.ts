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
