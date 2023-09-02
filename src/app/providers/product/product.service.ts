import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private controller:string = "rest_Producto";

  public constructor(private http: HttpClient, private global:GlobalService) {}

  public getAllProducts(): Observable<Object> {
    return this.http.get(`${this.global.apiUrl}/${this.global.servicePrefix}/${this.controller}/findAll/json`)
  }

  public getProductsFiltersBy(type:string):Observable<Object> {
    let body = {"filterBy": type};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    // Realizar una solicitud HTTP POST con el objeto JSON en el cuerpo
    return this.http.post(`${this.global.apiUrl}/${this.global.servicePrefix}/${this.controller}/getFilterBy`, body, { headers });
  }
}
