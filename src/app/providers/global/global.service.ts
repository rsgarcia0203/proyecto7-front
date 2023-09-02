import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public appName: string = 'Restaurant App';
  public apiUrl: string = 'http://localhost:3000';
  public servicePrefix: string = 'rest';
  constructor() { }
}
