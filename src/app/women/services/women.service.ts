import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Woman } from '../interfaces/woman.interface';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  constructor(private http: HttpClient) { }

getWomen(): Observable<Woman[]> {
  return this.http.get<Woman[]>('http://localhost:3000/');
}

}
