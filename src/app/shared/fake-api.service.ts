import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FakeAPIService {
  constructor(private http: HttpClient) {}

  public apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  public getUser(): Observable<any> {
    const obs: Observable<any> = this.http.get(this.apiUrl);
    const response = (data: any) => data as JSON;
    return obs.pipe(map(response));
  }
}
