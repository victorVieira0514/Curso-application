import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursosUrl = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    return this.http.get<any>(this.cursosUrl).pipe(
      map((obj) => obj)
    )
  }

  create(curso: any): Observable<any> {
    return this.http.post<any>(this.cursosUrl, curso).pipe(
      map((obj) => obj)
    );
  }

  atualizar(curso: any): Promise<any> {
    return this.http.put<any>(`${this.cursosUrl}/${curso.codigo}`, curso, {  })
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.cursosUrl}/${codigo}`, {  })
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.cursosUrl}/${codigo}`, {  })
      .toPromise()
      .then((response:any) => {
        return response;
      });
  }
}
