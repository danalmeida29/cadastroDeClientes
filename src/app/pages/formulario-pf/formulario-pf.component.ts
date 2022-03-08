import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
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
    private listClientes: ClienteService,
    private route: ActivatedRoute,
  ) { }

  clientesModel: any;
  erro: any;
  Error: any;
  cpfExiste: any;

  ngOnInit(): void {

    /*this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const clientePf$ = this.clienteService.loadByID(id);
        clientePf$.subscribe(clientePf => {
          this.updateForm(clientePf);
        });
      }
    );*/

    // modo simplificado -------------------------------

    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.clienteService.loadByID(id))
      )
      .subscribe(clientePf => this.updateForm(clientePf));

    this.getListCliente();
    this.createForm();
  }

  updateForm(clientePf: any) {
    this.clienteForm.patchValue({
      id: clientePf.id,
      name: clientePf.name,
      phone: clientePf.phone,
      cpf: clientePf.cpf,
      rg: clientePf.rg,
      adress: clientePf.adress,
      cep: clientePf.cep,
      uf: clientePf.uf

    })
  }



  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }


  createForm() {
    this.clienteForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      phone: [null],
      cpf: [null, [Validators.required, Validators.minLength(11)], /*[this.validarCpf.bind(this)]*/],
      rg: [null, [Validators.required, Validators.minLength(9)]],
      adress: [null, Validators.required],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      uf: [null, Validators.required],
      type: ['Pessoa fisísca']
    })
  }

  getListCliente() {
    this.listClientes.getListCliente().subscribe(
      (res: any) => {
        this.clientesModel = res;
        console.log(res);
      },

      (error: any) => {
        this.Error = error;
      }
    )
  }

  /*validarCpf() {
    this.clientesModel = this.getListCliente;
    this.clienteForm = this.clientesModel.includes(this.clienteForm.get('cpf'));
    console.log(this.clienteForm);
  }*/


  /*addPhone(){
    this.phone.push(this.clienteForm.getValue("phones"));
  }*/

  /*removePhone(){
    this.clienteForm.phone.splice(i, 1);
  }*/

  onSubmit() {
    const formData = this.clienteForm.getRawValue();
    console.log(formData);

    let msgSuccess = 'Cadastro criado com sucesso!';
    let msgError = 'ERRO ao criar cadastro. Tente novamente!';

    if(this.clienteForm.value.id){
      msgSuccess = 'Cadastro atualizado com sucesso!';
      msgError = 'ERRO ao autualizar cadastro. Tente novamente!';
    }

    this.clienteService.save(this.clienteForm.value).subscribe(
      success => {
        alert(msgSuccess);
      },
      error => {
        alert(msgError);
      }
    );
    
    

    /*if(this.clienteForm.value.id){
      this.clienteService.updateCliente(this.clienteForm.value).subscribe(res => {
        console.log(res);
              success => {
        alert(Cadastro criado com sucesso!);
      },
      error => {
        alert(ERRO ao criar cadastro. Tente novamente!);
      }
        }); 
    } else {
        this.clienteService.createCliente(formData).subscribe(res => {
        console.log(res);
              success => {
        alert(Cadastro atualizado com sucesso!);
      },
      error => {
        alert(ERRO ao autualizar cadastro. Tente novamente!);
      }
        }); 
      }*/


  }

  onCancel() {
    console.log('onCancel');
  }

}
