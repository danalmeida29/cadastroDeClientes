import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../Core/cliente.service';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit, AfterViewInit {

  @ViewChild('filterInput') filterInput!:  ElementRef
  
  formGroupPesquisa!: FormGroup;

  constructor(private router: Router, private listClientes: ClienteService, private formBuilder: FormBuilder) { }

 clientesModel:any;
 clientesPjModel:any;
 Error:any;
 filteredList: any[] = [];
 filteredListPj: any[] = [];


  ngOnInit(): void {
    this.formGroupPesquisa = this.formBuilder.group({
      name:[null],
    })
    this.getListCliente();
    this.getListClientePJ();
  }

  ngAfterViewInit(): void {
    this.filterClienteList()
}

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }
//pesquisaPF-----------------------------------------------------
filterClienteList(){
  let filterValue = this.filterInput.nativeElement.value
  this.filteredList = this.clientesModel
  this.filteredList = this.clientesModel.filter((cliente: any) => 
    cliente.name.trim().toLowerCase().includes(filterValue) 
  )
  console.log(filterValue);
}

//pesquisaPJ-----------------------------------------------------

filterClientesPjList(){
  let filterValue = this.filterInput.nativeElement.value
  this.filteredListPj = this.clientesPjModel
  this.filteredListPj = this.clientesPjModel.filter((cliente: any) => 
    cliente.name.trim().toLowerCase().includes(filterValue) 
  )
  console.log(filterValue);
}

//---------------------------------------------------------------


  getListCliente(){
    this.listClientes.getListCliente().subscribe(
      (res:any) =>{ this.clientesModel = res;
        this.filteredList = this.clientesModel;
        console.log(res);
      },

      (error:any) => {
        this.Error= error;
      }
    )
  }

  getListClientePJ(){
    this.listClientes.getListClientePJ().subscribe(
      (res:any) =>{ this.clientesPjModel = res;
        console.log(res);
      },

      (error:any) => {
        this.Error= error;
      }
    )
  }

  deletar(){
    this.listClientes.deletarCliente('id')
  }

}
