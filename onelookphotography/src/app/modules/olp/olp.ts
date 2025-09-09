import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpService } from '../../http-service/http.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Olp {
  private baseUrl = environment.apiUrl;

  constructor(private httpService: HttpService) {}

  getOLPMenuItems(url: string): Observable<any[]> {
    return of(url).pipe(
      switchMap(endpoint => 
        this.httpService.get<any[]>(`${this.baseUrl}/${endpoint}`)
      )
    );
  }
}
