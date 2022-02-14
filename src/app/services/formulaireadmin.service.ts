import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class FormulaireadminService {
  constructor(private http: HttpClient) {}

  public getall(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.URL}/cardtype`);
  }

  public getOne(id: number | string): Observable<Category> {
    return this.http.get<Category>(`${environment.URL}/cardtype/${id}`);
  }

  public create(card: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.URL}/cardtype`, card);
  }

  public delete(id: number | string): Observable<Category> {
    return this.http.delete<Category>(`${environment.URL}/cardtype/${id}`);
  }

  public update(cardtype: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.URL}/cardtype`, cardtype);
  }
}

