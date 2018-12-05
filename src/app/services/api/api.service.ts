import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_ENDPOINT: string = 'http://5c06d5f2c16e120013947ad4.mockapi.io';

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  get(path: string, options: any = {}) {
    options.headers = this.getHeaders();
    options.observe = 'response';

    return this.http.get<HttpResponse<any>>(`${this.API_ENDPOINT}/${path}`, options);
  }

  post(path: string, body: any = {}, options: any = {}) {
    options.headers = this.getHeaders();
    options.observe = 'response';

    return this.http.post<HttpResponse<any>>(`${this.API_ENDPOINT}/${path}`, body, options);
  }

}
