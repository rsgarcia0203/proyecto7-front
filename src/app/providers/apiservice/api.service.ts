import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL:string = environment.apiUrl;
  private servicePrefix:string = environment.servicePrefix;
  private controller:string = '';

  public constructor(private http: HttpClient) { }

  public setController(controllerName:string):void {
    this.controller = `rest_${controllerName}`;
  }

  public getAllEntities<T>(): Observable<T> {
    return this.http.get(`${this.apiURL}/${this.servicePrefix}/${this.controller}/findAll/json`) as Observable<T>;
  }

  public findEntityByID<T>(id:string):Observable<T> {
    return this.http.get(`${this.apiURL}/${this.servicePrefix}/${this.controller}/findById/${id}/json`) as Observable<T>;
  }

  public saveEntity<T>(entity:T):Observable<Object> {
    return this.http.post(`${this.apiURL}/${this.servicePrefix}/${this.controller}/save`, entity);
  }

  public updateEntity<T>(id:string, entity:T):Observable<Object> {
    return this.http.put(`${this.apiURL}/${this.servicePrefix}/${this.controller}/update/${id}`, entity);
  }

  public deleteEntity<T>(id:string):Observable<Object> {
    return this.http.delete(`${this.apiURL}/${this.servicePrefix}/${this.controller}/delete/${id}`);
  }
}
