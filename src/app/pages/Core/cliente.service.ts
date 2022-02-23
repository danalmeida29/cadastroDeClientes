import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../shared/cliente';
import { BASE_URL } from 'src/app/app.api';

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

  createCliente(FormData: Cliente) {
    return this.http.post(`${BASE_URL}/clientesPF`, FormData);
  }

  updateCliente(FormData: Cliente) {
    return this.http.put(`${BASE_URL}/clientesPF`, FormData);
  }

  deletarCliente(id: any){
    this.http.delete(`${BASE_URL}/clientesPF/${id}`);
  }

  //----------------------------------------------- | --------------------------------------------------------\\


  getListClientePJ() {
    var urlString = `${BASE_URL}/clientesPJ`;
    return this.http.get(urlString)
  }

  createClientePJ(FormData: Cliente) {
    return this.http.post(`${BASE_URL}/clientesPJ`, FormData);
  }

  updateClientePJ(FormData: Cliente) {
    return this.http.put(`${BASE_URL}/clientesPJ`, FormData);
  }



 //----------------------------------------------- | --------------------------------------------------------\\

}
