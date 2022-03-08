import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../Core/cliente.service';
import { Cliente } from '../shared/cliente';
import { DailogComponent } from './dailog/dailog.component';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit, AfterViewInit {

  @ViewChild('filterInput') filterInput!:  ElementRef
  @ViewChild('filterInput') filterInputPj!:  ElementRef
  
  formGroupPesquisa!: FormGroup;
  clienteSelecionado: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private clienteService: ClienteService, 
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ){}
    

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

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DailogComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngAfterViewInit(): void {
    this.filterClienteList()
  }

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }

  //pesquisaPF-----------------------------------------------------

  getListCliente(){
    this.clienteService.getListCliente().subscribe(
      (res:any) =>{ this.clientesModel = res;
        this.filteredList = this.clientesModel;
        console.log(res);
      },

      (error:any) => {
        this.Error= error;
      }
    )
  }

  filterClienteList(){
    let filterValue = this.filterInput.nativeElement.value
    this.filteredList = this.clientesModel
    this.filteredList = this.clientesModel.filter((cliente: any) => //---erro----//
      cliente.name.trim().toLowerCase().includes(filterValue) 
    );
    this.filteredListPj = this.clientesPjModel.filter((cliente: any) => 
    cliente.name.trim().toLowerCase().includes(filterValue) 
    )
    console.log(this.filterInput.nativeElement.value);
  }

  //pesquisaPJ-----------------------------------------------------


    getListClientePJ(){
      this.clienteService.getListClientePJ().subscribe(
        (res:any) =>{ this.clientesPjModel = res;
          this.filteredListPj = this.clientesPjModel;
          console.log(res);
        },

        (error:any) => {
          this.Error= error;
        }
      )
    }

  //---------------------------------------------------------------

    onEdit(pageName: any, id?: any){
      this.router.navigate([`${pageName}/${id}`], {relativeTo: this.route});
    } 

    onDeletar(id: any){
      this.clienteService.deletarCliente(id).subscribe(
        (res:any)=>{
          this.getListCliente();
          console.log(this.clientesModel);
        }
      );
    }
 //---------------------------------------------------deletePj-----------------------------------------------------------
    onDelete(id: any){
      this.clienteService.deletarClientePj(id).subscribe(
        (res:any)=>{
          this.getListClientePJ();
          console.log(this.clientesModel);
        }
      );
    }

}
