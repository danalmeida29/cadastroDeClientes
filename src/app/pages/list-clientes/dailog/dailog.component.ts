import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../Core/cliente.service';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DailogComponent>, private clienteService: ClienteService) { }

  clientesModel:any;
  clientesPjModel:any;
  Error:any;
  filteredList: any[] = [];
  filteredListPj: any[] = [];
  
  ngOnInit(): void {
  }

  
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

  onDelete(id:any){
    this.clienteService.deletarClientePj(id).subscribe(
      (res:any)=>{
        this.getListClientePJ();
        console.log(this.clientesModel);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
