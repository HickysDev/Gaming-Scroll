import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;


  constructor(private listaService: ListaService) { 
    this.formulario = new FormGroup({
      nome: new FormControl(),
      nota: new FormControl(),
      imagem: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.listaService.addJogo(this.formulario.value);
    console.log(response);
  }

}
