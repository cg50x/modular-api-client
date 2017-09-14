import * as Promise from 'promise';
// This class only pretends to make http calls. Instead it just prints to the console.

export class HttpAdapter {
  get(url: string): Promise<any> {
    console.log(`GET ${url}`);
    return Promise.resolve(null);
  }
  post(url: string, params: any): Promise<any> {
    console.log(`POST ${url}`);
    console.log(`  params: ${params}`);
    return Promise.resolve(null);
  }
  put(url: string, params: any): Promise<any> {
    console.log(`PUT ${url}`);
    console.log(`  params: ${params}`);
    return Promise.resolve(null);
  }
  delete(url: string): Promise<any> {
    console.log(`DELETE ${url}`);
    return Promise.resolve(null);
  }
}
