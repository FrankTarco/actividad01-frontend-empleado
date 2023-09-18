import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Modalidad } from '../models/modalidad.model';
import { Observable } from 'rxjs';

const baseUrrModalidad = AppSettings.API_ENDPOINT+ '/modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private http:HttpClient) { }

  registrarModalidad(obj:Modalidad): Observable<any>{
    return this.http.post(baseUrrModalidad, obj);
  }

}
