import { BaseAPIService } from './base-api-service';

export class AdsAPIService extends BaseAPIService {

  get apiVersion() {
    return '1.2.0';
  }
  get baseUrl() {
    return this.client.config.apiUrls.ads;
  }
  get httpAdapter() {
    return this.client.httpAdapter;
  }

  public getStatus() {
    return this.httpAdapter.get(`${this.baseUrl}/status`);
  }
  public getAds() {
    return this.httpAdapter.get(`${this.baseUrl}/ads`);
  }
  public getAd(adId: string) {
    return this.httpAdapter.get(`${this.baseUrl}/ads/${adId}`);
  }
  public postAd(adId: string, params) {
    return this.httpAdapter.post(`${this.baseUrl}/ads/${adId}`, params);
  }
  public putAd(adId: string, params) {
    return this.httpAdapter.put(`${this.baseUrl}/ads/${adId}`, params);
  }
  public deleteAd(adId: string, params) {
    return this.httpAdapter.delete(`${this.baseUrl}/ads/${adId}`);
  }
  public publishAd(adId: string) {
    return this.httpAdapter.post(`${this.baseUrl}/ads/${adId}/publish`, null);
  }
  public getAdViewers(adId: string) {
    return this.httpAdapter.get(`${this.baseUrl}/ads/${adId}/viewers`);
  }
}
