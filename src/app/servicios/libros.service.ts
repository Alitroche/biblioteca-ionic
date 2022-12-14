import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url: string = "http://localhost:3000/libro";

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }

  public post(libro: Libro): Observable<any>{
    return this.http.post(this.url, libro, { responseType: 'text'});
  }

  public put(libro: Libro): Observable<any>{
    return this.http.put(this.url, libro, { responseType: 'text' });
  }

  public delete(libro: Libro): Observable<any>{
    return this.http.delete(`${this.url}/${libro.id}`, {responseType: 'text'});
  }
}
