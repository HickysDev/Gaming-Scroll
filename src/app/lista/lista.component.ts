import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ListaService } from '../services/lista.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  formulario: FormGroup;

  constructor(private listaService: ListaService) {
    this.formulario = new FormGroup({
      nome: new FormControl(),
      nota: new FormControl(),
      imagem: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.listaService.addJogo(this.formulario.value);
    alert('Jogo adicionado com sucesso!');
    console.log(response);
    this.formulario.reset();
  }

  uploadFile(event: any, { id }: Jogo) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/games/${uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Enviando a imagem...',
          success: 'Imagem enviada com sucesso.',
          error: 'Ocorreu um erro ao enviar a imagem...',
        }),
        switchMap((imagem) =>
          this.usersService.updateImage({
            imagem,
          })
        )
      )
      .subscribe();
  }
}
