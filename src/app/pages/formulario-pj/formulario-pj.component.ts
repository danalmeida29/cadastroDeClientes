import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../Core/cliente.service';

@Component({
  selector: 'app-formulario-pj',
  templateUrl: './formulario-pj.component.html',
  styleUrls: ['./formulario-pj.component.scss']
})
export class FormularioPJComponent implements OnInit {

  clienteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  erro:any;

  ngOnInit(): void {
    this.createForm();
  }


  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }


  createForm(){
    this.clienteForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250) ]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      cnpj: [null, [Validators.required, Validators.minLength(11)]],
      ie:[null, [Validators.required, Validators.minLength(9)]],
      adress: [null, Validators.required],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      uf:[null, Validators.required],
      type:['Pessoa Jurídica']
    })
    
  }

  onSubmit(){
    const formData = this.clienteForm.getRawValue();
    console.log(formData);
    this.clienteService.createClientePJ(formData).subscribe(res =>{
       console.log(res);
      });
    
  }

  onCancel(){
    console.log('onCancel');
  }



}
