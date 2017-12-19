import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class HeaderService {

  private _wpBase = environment.wpBase  + '';

  constructor(private http: HttpClient) { }

 /**
   * @returns Titulo de la Pagina Web
   */
  getTitleWebPage(): Observable<any> {
    return this.http.get<any>(this._wpBase + '');
  }

 /**
   * @returns Menu items
   */
  getMenu(): Observable<any> {
    return this.http.get(this._wpBase + 'wp-api-menus/v2/menus')
              .do(res => res);
  }

  /**
   * @returns Menu items por id
   */
  getMenubyID(id: String): Observable<any> {
    return this.http.get<any>(this._wpBase + `wp-api-menus/v2/menus/${id}`);
  }

}
