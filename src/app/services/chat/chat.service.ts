import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { RequestResult } from '../../types/request-result/request-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apiService: ApiService) { }

  getConversations(slug: string): Observable<RequestResult> {
    return new Observable<any>(observer => {
      this.apiService.get(`${slug}`).subscribe(
        (resp: HttpResponse<any>) => {
          observer.next({ data: resp.body, ok: resp.ok, error: null });
        },
        (err: HttpErrorResponse) => {
          observer.next({ ok: err.ok, error: err.error });
        }
      );
    });
  }

  getMessages(id: string): Observable<RequestResult> {
    return new Observable<any>(observer => {
      this.apiService.get(`${id}`).subscribe(
        (resp: HttpResponse<any>) => {
          observer.next({ data: resp.body, ok: resp.ok, error: null });
        },
        (err: HttpErrorResponse) => {
          observer.next({ ok: err.ok, error: err.error });
        }
      );
    });
  }
}
