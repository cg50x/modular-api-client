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

  public getStatus(): Promise<any> {
    return this.httpAdapter.get(`${this.baseUrl}/status`);
  }
  public getUsers(): Promise<any> {
    return this.httpAdapter.get(`${this.baseUrl}/users`);
  }
  public getUser(userId: string): Promise<any> {
    return this.httpAdapter.get(`${this.baseUrl}/users/${userId}`);
  }
  public putUser(userId: string, params): Promise<any> {
    return this.httpAdapter.put(`${this.baseUrl}/users/${userId}`, params);
  }
  public getUserFriends(userId: string): Promise<any> {
    return this.httpAdapter.put(`${this.baseUrl}/users/${userId}/friends`);
  }
  public deleteUserFriend(userId: string, friendId: string): Promise<any> {
    return this.httpAdapter.delete(`${this.baseUrl}/users/${userId}/friends/${friendId}`);
  }
  public postUserFriend(userId: string, params): Promise<any> {
    return this.httpAdapter.post(`${this.baseUrl}/users/${userId}/friends`, params);
  }
}
