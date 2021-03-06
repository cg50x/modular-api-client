import { BaseAPIService } from '../../base-api-service';

export class CoreAPIService extends BaseAPIService {

  get apiVersion() {
    return '1.0.0';
  }
  get baseUrl() {
    return this.client.config.apiUrls.core;
  }
  get httpAdapter() {
    return this.client.httpAdapter;
  }

  public getStatus() {
    return this.httpAdapter.get(`${this.baseUrl}/status`);
  }
  public login(credentials) {
    return this.httpAdapter.post(`${this.baseUrl}/login`, credentials);
  }
}
