import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private controller:string = "cliente";

  public constructor(private http: HttpClient, private global:GlobalService) {}

  public getAllClients(): Observable<Client> {
      return this.http.get(`${this.global.apiUrl}/${this.global.servicePrefix}/${this.controller}/getAll`)
  }
}
