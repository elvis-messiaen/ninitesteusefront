import { Parfum } from './../model/parfum.model';


import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ParfumService {
  constructor(private http: HttpClient) {}

  getAllParfum(): Observable<Parfum[]> {
    let host = environment.host;
    return this.http.get<Parfum[]>(host + '/parfum');
  }
}
