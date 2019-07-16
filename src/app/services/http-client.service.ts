import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { rootUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string, options?: any): Observable<any> {
    if (options) {
      return this.httpClient.get(rootUrl + url, options);
    }

    return this.httpClient.get(rootUrl + url, { observe: 'body' });
  }


  public post(url: string, body: any, options?: any): Observable<any> {
    if (options) {
      return this.httpClient.post(rootUrl + url, body, options);
    }

    return this.httpClient.post(rootUrl + url, body, { observe: 'body' });
  }


  public put(url: string, body: any, options?: any): Observable<any> {
    if (options) {
      return this.httpClient.put(rootUrl + url, body, options);
    }

    return this.httpClient.put(rootUrl + url, body, { observe: 'body' });
  }

  public delete(url: string, options?: any): Observable<any> {
    if (options) {
      return this.httpClient.delete(rootUrl + url, options);
    }

    return this.httpClient.delete(rootUrl + url, { observe: 'body' });
  }

}
