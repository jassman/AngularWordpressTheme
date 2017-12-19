import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WpPost } from './post-list/post-list';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase + '';

  constructor(private http: HttpClient) { }

  /**
   * @returns Lista de posts
   */
  getPosts(): Observable<WpPost[]> {
      return this.http.get<WpPost[]>(this._wpBase + 'wp/v2/posts?_embed');
  }

  /**
   * @param slug Nombre del post
   * @returns Post coincidente con el slug
   */
  getPost(slug: string): Observable<WpPost[]> {
      return this.http.get<WpPost[]>(this._wpBase + `wp/v2/posts?slug=${slug}`);
  }

  /**
   * @param slug Nombre del post
   * @returns Post coincidente con el slug
   */
  getOptionsPageById(id: string): Observable<any[]> {
    return this.http.get<any[]>(this._wpBase + `acf/v3/posts/${id}`).do(res => res);
  }

}
