import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  baseUrl = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  testando(msg: string) {
    console.log(msg)
  }

  create(usuario: Usuario) {
    console.log(usuario)
    this.http.post(`${this.baseUrl}add`, usuario).subscribe(
      resultado => {
        console.log(resultado)
      },
      erro => {
        if (erro.status == 400) {
          console.log(erro);
        }
      }
    );
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl).pipe(
      map((obj) => obj),
    );
  }

  delete(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuario>(url).pipe(
      map((obj) => obj),
    );
  }


}


