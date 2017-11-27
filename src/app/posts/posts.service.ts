import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase + '';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {

      return this.http.get<Post[]>(this._wpBase + 'wp/v2/posts');
  }

  getPost(slug: string): Observable<Post[]> {
      return this.http.get<Post[]>(this._wpBase + `wp/v2/posts?slug=${slug}`);
  }
  getMenu(): Observable<Post[]> {
    return this.http.get<any>(this._wpBase + 'wp-api-menus/v2/menus');
    }
}
