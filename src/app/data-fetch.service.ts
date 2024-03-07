import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
  /*
   Method to post my data that take a parameter called data of type any
   */
  postData(data: object): Observable<any> {
    return this.http.post<any>(`${this.url}`, data);
  }
}
