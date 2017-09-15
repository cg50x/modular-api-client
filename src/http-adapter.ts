import * as Promise from 'promise';

// This class only pretends to make http calls. Instead it just prints to the console.

export class HttpAdapter {
  get(url: string) {
    console.log(`GET ${url}`);
    return Promise.resolve(true);
  }
  post(url: string, params: any) {
    console.log(`POST ${url}`);
    console.log(`  params: ${params}`);
    return Promise.resolve(true);
  }
  put(url: string, params: any) {
    console.log(`PUT ${url}`);
    console.log(`  params: ${params}`);
    return Promise.resolve(true);
  }
  delete(url: string) {
    console.log(`DELETE ${url}`);
    return Promise.resolve(true);
  }
}
