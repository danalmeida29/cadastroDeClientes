import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Cliente } from '../shared/cliente';
import { BASE_URL } from 'src/app/app.api';
import { compilePipeFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) { }

   //----------------------------------------------- | --------------------------------------------------------\\

  getListCliente() {
    var urlString = `${BASE_URL}/clientesPF`;
    return this.http.get(urlString);
  }

  loadByID(id: any){
    return this.http.get<Cliente>(`${BASE_URL}/clientesPF/${id}`).pipe(take(1));
  }

  private createCliente(FormData: Cliente) {
    return this.http.post(`${BASE_URL}/clientesPF`, FormData);
  }

  private updateCliente(FormData: Cliente) {
    return this.http.put(`${BASE_URL}/clientesPF/${FormData.id}`, FormData).pipe(take(1));
  }

  save(FormData: Cliente){
    if(FormData.id){
      return this.updateCliente(FormData);
    }
    return this.createCliente(FormData);
  }

  updateList(clientesList:any){
    return this.http.put(`${BASE_URL}/clientesPF`, clientesList);
  }

  deletarCliente(id:any): Observable<Cliente>{
   return this.http.delete<Cliente>(`${BASE_URL}/clientesPF/${id}`).pipe(take(1));
  }

  //----------------------------------------------- | --------------------------------------------------------\\


  getListClientePJ() {
    var urlString = `${BASE_URL}/clientesPJ`;
    return this.http.get(urlString)
  }

  loadPjByID(id: any){
    return this.http.get<Cliente>(`${BASE_URL}/clientesPJ/${id}`).pipe(take(1));
  }

  private createClientePJ(FormData: Cliente) {
    return this.http.post(`${BASE_URL}/clientesPJ`, FormData);
  }

  private updateClientePJ(FormData: Cliente) {
    return this.http.put(`${BASE_URL}/clientesPJ/${FormData.id}`, FormData);
  }

  savePj(FormData: Cliente){
    if(FormData.id){
      return this.updateClientePJ(FormData);
    }
    return this.createClientePJ(FormData);
  }


  deletarClientePj(id:any): Observable<Cliente>{
    return this.http.delete<Cliente>(`${BASE_URL}/clientesPJ/${id}`).pipe(take(1));
   }



 //----------------------------------------------- | --------------------------------------------------------\\

}
