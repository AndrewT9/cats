import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){}

  public getData(url: string, queryParams?: any): Observable<any>{

    let httpParams = new HttpParams();
    if(queryParams){
      Object.keys(queryParams).forEach(el=>{
        httpParams = httpParams.append(el, queryParams[el]);
      })
    }
    return this.http.get(url, { params: httpParams });
  }
}
