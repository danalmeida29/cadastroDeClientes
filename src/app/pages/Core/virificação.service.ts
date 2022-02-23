import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap} from 'rxjs/operators';
import { BASE_URL } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class VirificaçãoService {

  constructor(private http:HttpClient) { }

  verificarCpf(cpf: Number){
    var urlString = `${BASE_URL}/clientesPF`;
    return this.http.get(urlString)
    .pipe(
      map((dados: any)=> dados.clientesPF),
      //tap(console.log),
      map((dados:{cpf: number}[] ) => dados.filter(v => v.cpf === cpf)),
      //tap(console.log),
      map((dados: any[]) => dados.length > 0),
      //tap(console.log)
    );
  }



}
