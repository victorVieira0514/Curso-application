import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Professor } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professorUrl = 'http://localhost:8080/professor';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any> {
    return this.http.get(this.professorUrl, {  })
      .toPromise();
  }
  
  read(): Observable<any> {
    return this.http.get<any>(this.professorUrl).pipe(
      map((obj) => obj)
    )
  }
  
  create(professor: any): Observable<any> {
    return this.http.post<any>(this.professorUrl, professor).pipe(
      map((obj) => obj)
    );
  }

  atualizar(professor: any): Promise<any> {
    return this.http.put<any>(`${this.professorUrl}/${professor.codigo}`, professor, {  })
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.professorUrl}/${codigo}`, {  })
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.professorUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const professor = response;
        return professor;
      });
  }
}
