import * as Promise from 'promise';
import { BaseAPIService } from './base-api-service';

export class UserAPIService extends BaseAPIService {

  get apiVersion() {
    return '1.0.1';
  }
  get baseUrl() {
    return this.client.config.apiUrls.user;
  }
  get httpAdapter() {
    return this.client.httpAdapter;
  }

  public getStatus() {
    return this.httpAdapter.get(`${this.baseUrl}/status`);
  }
  public getUsers() {
    return this.httpAdapter.get(`${this.baseUrl}/users`);
  }
  public getUser(userId: string) {
    return this.httpAdapter.get(`${this.baseUrl}/users/${userId}`);
  }
  public putUser(userId: string, params) {
    return this.httpAdapter.put(`${this.baseUrl}/users/${userId}`, params);
  }
  public getUserFriends(userId: string) {
    return this.httpAdapter.put(`${this.baseUrl}/users/${userId}/friends`);
  }
  public deleteUserFriend(userId: string, friendId: string) {
    return this.httpAdapter.delete(`${this.baseUrl}/users/${userId}/friends/${friendId}`);
  }
  public postUserFriend(userId: string, params) {
    return this.httpAdapter.post(`${this.baseUrl}/users/${userId}/friends`, params);
  }
}
