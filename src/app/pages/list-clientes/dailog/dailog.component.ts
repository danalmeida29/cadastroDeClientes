import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../Core/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DailogComponent>, 
    private clienteService: ClienteService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  clientesModel:any;
  clientesPjModel:any;
  Error:any;
  filteredList: any[] = [];
  filteredListPj: any[] = [];
  
  ngOnInit(): void {
  }

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }


  onCancel(): void {
    this.dialogRef.close();
  }

}
