import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase  + 'wp/v2/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {

      return this.http.get<any>(this._wpBase + '/menus');
  }


}
