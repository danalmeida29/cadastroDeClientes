import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ClienteService } from '../Core/cliente.service';

@Component({
  selector: 'app-formulario-pj',
  templateUrl: './formulario-pj.component.html',
  styleUrls: ['./formulario-pj.component.scss']
})
export class FormularioPJComponent implements OnInit {

  clienteFormPj!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  clientesModel: any;
  erro:any;
  Error: any;

  ngOnInit(): void {

    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.clienteService.loadPjByID(id))
      )
      .subscribe(clientePj => this.updateFormPJ(clientePj));

    this.createForm();
  }

  updateFormPJ(clientePJ: any) {
    this.clienteFormPj.patchValue({
      id: clientePJ.id,
      name: clientePJ.name,
      phone: clientePJ.phone,
      cnpj: clientePJ.cnpj,
      ie: clientePJ.ie,
      adress: clientePJ.adress,
      cep: clientePJ.cep,
      uf: clientePJ.uf

    })
  }
    



  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }


  createForm(){
    this.clienteFormPj = this.formBuilder.group({
      id:[null],
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
    const formData = this.clienteFormPj.getRawValue();
    console.log(formData);

    let msgSuccess = 'Cadastro criado com sucesso!';
    let msgError = 'ERRO ao criar cadastro. Tente novamente!';

    if(this.clienteFormPj.value.id){
      msgSuccess = 'Cadastro atualizado com sucesso!';
      msgError = 'ERRO ao autualizar cadastro. Tente novamente!';
    }

    this.clienteService.savePj(this.clienteFormPj.value).subscribe(
      success => {
        alert(msgSuccess);
      },
      error => {
        alert(msgError);
      }
    );
    
  }

  onCancel(){
    console.log('onCancel');
  }



}
