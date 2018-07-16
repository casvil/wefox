import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/from';

import { ApiItem } from './models/api/api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://wf-challenge-ceanyth.herokuapp.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.apiUrl);
  }
}
