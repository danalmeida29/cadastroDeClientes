import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ClienteService } from '../Core/cliente.service';
import { VirificaçãoService } from '../Core/virificação.service';

@Component({
  selector: 'app-formulario-pf',
  templateUrl: './formulario-pf.component.html',
  styleUrls: ['./formulario-pf.component.scss']
})
export class FormularioPFComponent implements OnInit {

  clienteForm!: FormGroup;
  phone: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private verificarCpfService: VirificaçãoService
  ) { }

  erro:any;

  ngOnInit(): void {
    //this.verificarCpfService.verificarCpf(0).subscribe();

    this.createForm();
  }


  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }


  createForm(){
    this.clienteForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250) ]],
      phone: [null],
      cpf: [null, [Validators.required, Validators.minLength(11)], [this.validarCpf.bind(this)]],
      rg:[null,[Validators.required, Validators.minLength(9)]],
      adress: [null, Validators.required],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      uf:[null, Validators.required],
      type:['Pessoa fisísca']
    })
    
  }

  /*addPhone(){
    this.phone.push(this.clienteForm.getValue("phones"));
  }*/

  /*removePhone(){
    this.clienteForm.phone.splice(i, 1);
  }*/

  onSubmit(){
    const formData = this.clienteForm.getRawValue();
    console.log(formData);
    this.clienteService.createCliente(formData).subscribe(res =>{
       console.log(res);
      });
    
  }

  onCancel(){
    console.log('onCancel');
  }

  validarCpf(formControl: FormControl){
    return this.verificarCpfService.verificarCpf(formControl.value)
      .pipe(map(cpfExiste => cpfExiste ? {cpfInvalido: true}: null ));
  }

}
